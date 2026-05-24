# Database Migrations on Publish Reference

How database schema changes flow from development to production for projects that use Replit's managed PostgreSQL, and what the agent must (and must not) do.

## The Two Automatic Schema Application Points

Replit applies schema changes for you in **exactly two** places. Anything outside of these two is unsupported and the agent must not invent a third.

### 1. Task merge → development database

After a task merges back to main, Replit runs the project's post-merge setup script (`scripts/post-merge.sh` or stack default). For Drizzle-based stacks this typically runs `npm run db:push` or `pnpm --filter @workspace/db run push-force`, which applies the latest dev schema to the **development** database only.

This is owned by the `post_merge_setup` skill — the agent does not need to invoke it manually.

### 2. Publish → production database

When the user clicks Publish, the publish flow:

1. Introspects both the development and production databases.
2. Computes a SQL diff between them.
3. Surfaces any column or table renames to the user in the Publish UI for confirmation (without confirmation, a rename is treated as a drop + add and would lose data).
4. Validates the diff statements; non-backwards-compatible changes show a warning and may cause brief downtime during the publish.
5. Applies the resulting SQL to the production database as part of the publish.

There is also an "overwrite data" option in the Publish UI for cases where the user wants to replace prod data with dev data wholesale. The agent does not control this — the user picks it.

User-facing documentation: [Production databases](https://docs.replit.com/cloud-services/storage-and-databases/production-databases).

## What the Agent Must Not Do

If the user reports a production schema problem, do **not**:

- Run DDL directly against the production database (`psql $PROD_URL`, `drizzle-kit push` against a non-dev connection string, `pg_dump … | psql …`, etc.).
- Write a custom migration script (`migrate-prod.sh`, `push-prod.ts`, etc.) that targets production.
- Modify the deploy build command — `.replit` `[deployment].build`, an artifact's `artifact.toml` `[services.production].build`, or any equivalent — to run `db:push`, `push-force`, `drizzle-kit push`, or any other schema mutation. This runs on every deploy and is unsafe.
- Add startup-time DDL (`CREATE TABLE IF NOT EXISTS …`, `ALTER TABLE …`) to the application's entrypoint to "self-heal" production. Production schema is not the application's responsibility.
- Use `executeSql({ environment: "production" })` for DDL. Production access is read-only and DDL calls will fail; the right answer is the Publish flow, not finding a way around the read-only guard.

## What the Agent Should Do

1. Make the schema change in the project's schema source of truth (e.g. `shared/schema.ts` for Drizzle, or the appropriate migrations directory for other ORMs).
2. Let the project's stack-specific dev-side flow apply it to the development database (e.g. `npm run db:push` / `pnpm --filter @workspace/db run push-force` for Drizzle, or the post-merge setup script for stacks that have one).
3. Verify the feature works in development.
4. Tell the user to re-publish. If the change involves a rename or a destructive alter, let them know they will see a confirmation prompt in the Publish UI.

## Failure Mode to Watch For

The classic failure mode that this guidance is designed to prevent:

- The user reports "production is broken — missing the `user_id` column."
- The agent, not knowing about the publish-time diff flow, writes a script or a deploy-time hook that pushes the dev schema to prod.
- The reviewer flags it as risky (deploy-time DDL on every release).
- The agent then writes a startup-time idempotent migration as a "safer" alternative.
- Both solutions are wrong. The right answer is: re-publish.

If you find yourself reaching for any of the patterns in "What the Agent Must Not Do", stop and recommend a re-publish instead.
