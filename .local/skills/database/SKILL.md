---
name: database
description: Create and manage Replit's built-in PostgreSQL databases, check status, execute SQL queries with safety checks, and run read-only queries against the production database. Use when the user wants to check prod data, debug database issues in production, or asks to "check the prod db", "query production", "look at live data", or "see what's in the database on the deployed app". Also use when the user asks how to apply development schema changes to the production database, e.g. "push dev to prod", "migrate the production database", "sync the schema", "production is missing a column", or reports a deployed app failing with "column does not exist" / "relation does not exist".
---

# Database Skill

Manage PostgreSQL databases and execute SQL queries safely in your development and production environments.

## When to Use

Use this skill when:

- Creating a new PostgreSQL database for your project
- Checking if a database is provisioned and accessible
- Running SQL queries against the development or production database
- Querying data warehouses (BigQuery, Databricks, Snowflake). For Databricks, use the `databricks-m2m` connector (not the plain `databricks` connector).

## When NOT to Use

- Schema migrations in production environments — see "Production schema changes" below
- Direct modifications to Stripe tables (use Stripe API instead)
- Converting a pre-existing database over to Replit, unless a user explicitly asks you to.

## Production schema changes

For projects that use Replit's managed PostgreSQL, the production database schema is managed automatically by Replit's Publish flow. When the user clicks Publish, Replit diffs the development schema against production, asks the user to resolve any renames in the Publish UI, and applies the diff to production. This is the supported path for changing the production schema; the agent must not write any code or scripts to migrate the production database.

For the full set of rules on what the agent must and must not do here — including specific patterns to avoid (custom migration scripts, deploy-build hooks, startup-time DDL) and the correct dev-side flow — read `.local/skills/database/references/database-migrations-on-publish.md`.

## Reference Documents

- `.local/skills/database/references/database-migrations-on-publish.md` — Full detail on the publish-time schema migration flow, including the two automatic application points (post-merge → dev, publish → prod), the SQL diff and rename-confirmation behavior, and the canonical failure mode this guidance prevents. Read this when the user reports production is missing a column or table, asks to "push dev to prod" / "migrate the production database" / "sync the schema", or reports the deployed app failing with "column does not exist" / "relation does not exist" errors.

## Available Functions

### checkDatabase()

Check if the PostgreSQL database is provisioned and accessible.

**Parameters:** None

**Returns:** Dict with `provisioned` (bool) and `message` (str)

**Example:**

```javascript
const status = await checkDatabase();
if (status.provisioned) {
    console.log("Database is ready!");
} else {
    console.log(status.message);
    // Consider calling createDatabase()
}
```

### createDatabase()

Create or verify a PostgreSQL database exists for the project.

**Parameters:** None

**Returns:** Dict with:

- `success` (bool): Whether operation succeeded
- `message` (str): Status message
- `alreadyExisted` (bool): True if database already existed
- `secretKeys` (list): Environment variables set (DATABASE_URL, PGHOST, etc.)

**Example:**

```javascript
const result = await createDatabase();
if (result.success) {
    console.log(`Database ready! Environment variables: ${result.secretKeys}`);
    // Now you can use DATABASE_URL in your application
}
```

### executeSql()

Execute a SQL query with safety checks.

**Parameters:**

- `sqlQuery` (str, required): The SQL query to execute. Use `$1`, `$2`, etc. placeholders when using parameterized queries.
- `params` (array, optional): Parameter values for parameterized queries. When provided, values are bound separately from the SQL string, **preventing SQL injection**. Each `$N` placeholder in `sqlQuery` corresponds to the Nth element in this array (1-indexed). Supported types: string, number, boolean, null. **Two restrictions:**
  - **Single-statement only.** When `params` is provided (including `params: []`), `sqlQuery` MUST be a single SQL statement. Semicolon-delimited multi-statement scripts (`BEGIN; ...; COMMIT;`, migration batches, etc.) are rejected on the parameterized path. Send them as a single `executeSql` call WITHOUT `params` — separate calls do NOT share a transaction or session, so splitting would silently lose atomicity. Validate any interpolated values against a strict allowlist before embedding them.
  - **`replit_database` target only.** Data warehouse targets (bigquery, databricks, snowflake) do not support parameter binding — passing `params` with those targets raises an error.
- `target` (str, default "replit_database"): Target database: "replit_database", "bigquery", "databricks", or "snowflake"
- `environment` (str, default "development"): "development" runs against the development database (all SQL operations supported). "production" runs READ-ONLY queries against a replica of the production database (only SELECT queries allowed). Production is only supported for the "replit_database" target. "production" database, depending on when the user last deployed, may have outdated schemas.
- `sampleSize` (int, optional): Sample size for warehouse queries (only for bigquery/databricks/snowflake)

**Returns:** Dict with:

- `success` (bool): Whether query succeeded
- `output` (str): Query output/results
- `exitCode` (int): Exit code (0 = success)
- `exitReason` (str | None): Reason for exit if failed

**CRITICAL: When `params` is supported, ALWAYS use it for any user input or variable.**
This applies when **all** of these are true:

- `target` is `replit_database` (the default).
- `sqlQuery` is a single SQL statement (no semicolons separating multiple statements).

In that case, never use string interpolation or concatenation to build SQL with dynamic literal values — pass them through `params`. This prevents SQL injection.

```javascript
// BAD - vulnerable to SQL injection:
const result = await executeSql({ sqlQuery: `SELECT * FROM users WHERE id = ${userId}` });

// GOOD - use parameterized queries:
const result = await executeSql({
    sqlQuery: "SELECT * FROM users WHERE id = $1",
    params: [userId]
});
```

**Note: `params` only binds literal values** (strings, numbers, booleans, null, or arrays of those scalar literal values for `ANY($1::type[])`). PostgreSQL placeholders cannot substitute identifiers (table or column names), SQL keywords (sort directions like `ASC`/`DESC`, operators), or other syntactic elements. For dynamic identifiers or keywords, validate the value against a strict allowlist (e.g. a fixed set of allowed table names, or a regex like `/^[a-z_][a-z0-9_]*$/`), then interpolate the validated value into the SQL string. Never interpolate free-form user text into identifier positions.

```javascript
// GOOD - pass arrays as one parameter and cast the placeholder for ANY(...):
await executeSql({
    sqlQuery: "SELECT * FROM resources WHERE category = ANY($1::text[])",
    params: [["Anxiety", "Depression", "Trauma"]]
});
```

```javascript
// BAD - $1 cannot bind a table name; this query fails to parse:
await executeSql({ sqlQuery: "SELECT * FROM $1 WHERE id = $2", params: [tableName, userId] });

// GOOD - allowlist + interpolate identifiers, $N for values:
const ALLOWED_TABLES = ["users", "orders", "products"];
if (!ALLOWED_TABLES.includes(tableName)) throw new Error("invalid table");
await executeSql({
    sqlQuery: `SELECT * FROM ${tableName} WHERE id = $1`,
    params: [userId]
});
```

**When `params` is NOT supported on `replit_database`** (multi-statement scripts only — `BEGIN; ...; COMMIT;`, migrations, batched DDL):

1. **For independent statements that don't need shared transaction or session state**, you can split them into separate `executeSql` calls each with its own `params` (e.g., a sequence of unrelated INSERTs into different tables). Note that separate `executeSql` calls do NOT share a connection, transaction, or session — temp tables, `SET LOCAL` GUCs, and `BEGIN`/`COMMIT` will not carry across calls.
2. **For scripts that DO need transactional atomicity or session state** (most multi-statement writes, migrations, scripts that depend on temp tables), send the whole script as a single `executeSql` call without `params`. Validate any interpolated values against a strict allowlist (e.g. integers only, identifier whitelist) before embedding them in the SQL string. Treat any interpolated value as a potential injection vector — never interpolate free-form user text.

**For warehouse targets** (`bigquery`, `databricks`, `snowflake`), `params` is NEVER supported. The runtime rejects any warehouse query that includes `params`, whether single-statement or multi-statement. You MUST either: (a) reject the user input if it cannot be validated, or (b) validate the value against a strict allowlist (e.g. integers only, fixed identifier set) before interpolating it into the SQL string. Never interpolate free-form user text into warehouse SQL.

**Example:**

```javascript
// Simple SELECT with parameters
const result = await executeSql({
    sqlQuery: "SELECT * FROM users WHERE id = $1",
    params: [userId]
});
if (result.success) {
    console.log(result.output);
}

// Static query without user input (no params needed)
const result1b = await executeSql({ sqlQuery: "SELECT * FROM users LIMIT 5" });

// CREATE TABLE (static DDL, no params needed)
const result2 = await executeSql({
    sqlQuery: `
        CREATE TABLE IF NOT EXISTS products (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price DECIMAL(10, 2)
        )
    `
});

// INSERT data with parameters
const result3 = await executeSql({
    sqlQuery: "INSERT INTO products (name, price) VALUES ($1, $2)",
    params: [productName, productPrice]
});

// UPDATE with parameters
const result3b = await executeSql({
    sqlQuery: "UPDATE products SET price = $1 WHERE name = $2",
    params: [newPrice, productName]
});

// DELETE with parameters
const result3c = await executeSql({
    sqlQuery: "DELETE FROM products WHERE id = $1",
    params: [productId]
});

// Read-only production query with parameters
const result4 = await executeSql({
    sqlQuery: "SELECT * FROM users WHERE active = $1",
    params: [true],
    environment: "production"
});

// Data warehouse query — project exact columns + partition filter + LIMIT.
// `sampleSize` only caps rows returned to the client; it does NOT reduce the
// bytes the warehouse scans, so a bare `SELECT *` still costs the full scan.
// (Note: `params` is NOT supported for warehouse targets; if a date or other
// filter value were dynamic, validate it as the expected type before
// interpolating.)
const result5 = await executeSql({
    sqlQuery: `SELECT order_id, customer_id, total_amount, order_date
               FROM sales_data
               WHERE order_date >= '2024-01-01'
                 AND order_date < '2025-01-01'
               LIMIT 100`,
    target: "bigquery",
    sampleSize: 100
});

// Multi-statement transactional scripts (BEGIN ... COMMIT, temp tables,
// SET LOCAL, etc.) MUST run as a single executeSql call WITHOUT `params`
// — separate calls do NOT share a connection or transaction, so
// splitting a transaction across multiple calls would silently lose
// atomicity. If the script needs user-controlled values, validate them
// against a strict allowlist (integers only, identifier whitelist)
// before interpolating; never interpolate free-form user text.
const result = await executeSql({
    sqlQuery: `
        BEGIN;
        UPDATE users SET active = false WHERE last_login < '2024-01-01';
        UPDATE audit_log SET archived = true WHERE created_at < '2024-01-01';
        COMMIT;
    `,
});
```

## Safety Features

1. **Environment Isolation**: Development queries run against the development database; production queries are READ-ONLY against a read replica
2. **Stripe Protection**: Mutations to Stripe schema tables (stripe.*) are blocked
3. **Discussion Mode**: Mutating queries are blocked in Planning/Discussion mode
4. **Destructive Query Protection**: DROP, TRUNCATE, etc. are blocked via the skill callback path (use the tool interface directly for destructive operations that require user confirmation)

## CRITICAL: Data Warehouse Cost Control

Warehouse targets (`bigquery`, `databricks`, `snowflake`) are billed per byte scanned.
One careless `SELECT *` against a fact table can cost tens of dollars; a dashboard
that re-runs warehouse queries every few seconds can burn thousands of dollars per day.
**Treat `executeSql` as an expensive debugging/exploration tool when `target` is a warehouse.**

### Use `executeSql` against a warehouse ONLY for these cases

1. **Schema discovery** — `INFORMATION_SCHEMA.TABLES`, `INFORMATION_SCHEMA.COLUMNS`,
   `DESCRIBE TABLE`, and similar metadata queries to understand the structure.
2. **Small sample reads** with an explicit `LIMIT` (`LIMIT 5`–`LIMIT 100`) to inspect
   value shapes while designing an app or answering an ad-hoc question.
3. **One-off analytical questions** that the user explicitly asked in chat and that
   cannot be answered from cached data.

### Do NOT use `executeSql` against a warehouse for these cases

- Power a data app's runtime queries. The app's API server must run those queries
  itself, with DB-backed caching (TTL matched to the dashboard's lowest refresh
  interval — 5 minutes by default). See the `data-visualization` skill's
  `common-database.md` for the `api_cache` schema and helpers.
- Re-run the same query repeatedly during a session — cache the result locally
  (in a JavaScript variable or a CSV file under `.agents/outputs/`) and reuse it.
- Perform full table scans when an aggregated, partitioned, or `LIMIT`-bounded
  query would answer the same question.

### Required discipline for every warehouse query

- **Project exact columns** — never `SELECT *` on wide tables.
- **Always `LIMIT`** when exploring.
- **Partition / cluster filter** — scope by the partition or cluster column
  (`WHERE event_date >= ...`) so the warehouse prunes data and you are billed
  for a tiny slice, not the whole table.
- **Prefer pre-aggregated tables** (e.g. `_daily`, `_summary`) over raw event tables.
- **Diff-only reads** — for incremental/refresh queries, filter on `WHERE updated_at > :last_seen`
  and persist `last_seen` so subsequent queries only scan the delta.

### If the user is building a data app (dashboard, report, explorer)

Hand off to the `data-visualization` skill. Use `executeSql` only for the initial
schema discovery and a few sample queries. The runtime queries belong in the app's
API server with DB-backed caching — not in repeated `executeSql` calls from the agent
loop.

## Best Practices

1. **Prefer the built-in database**: Replit's built-in PostgreSQL database is always preferred over external services like Supabase. It supports rollback and integrates directly with the Replit product. Only use external database services if the user has specific requirements. The `pg` package should be installed already.
2. **Check before creating**: Call `checkDatabase()` before `createDatabase()` to avoid unnecessary operations
3. **ALWAYS use parameterized queries with user input on the `replit_database` single-statement path**: When `target` is `replit_database` (the default) and `sqlQuery` is a single statement, you MUST use the `params` argument with `$1`, `$2`, etc. placeholders for any user-provided literal value. NEVER use string interpolation, template literals, or concatenation for values in that case. For dynamic identifiers (table/column names) or SQL keywords (sort directions, operators), validate against a strict allowlist before interpolating since `params` cannot bind those. For warehouse targets and multi-statement transactional scripts where `params` is not supported, send the whole script as a single `executeSql` call and validate any interpolated values against a strict allowlist; only split into separate calls when the statements are truly independent and don't share transaction or session state.
4. **Test queries first**: Run SELECT queries before INSERT/UPDATE/DELETE
5. **Keep backups**: Important data should be backed up before destructive operations

## Environment Variables

After creating a database, these environment variables are available:

- `DATABASE_URL`: Full connection string
- `PGHOST`: Database host
- `PGPORT`: Database port (5432)
- `PGUSER`: Database username
- `PGPASSWORD`: Database password
- `PGDATABASE`: Database name

## Example Workflow

```javascript
// 1. Check if database exists
const status = await checkDatabase();

if (!status.provisioned) {
    // 2. Create database
    const createResult = await createDatabase();
    if (!createResult.success) {
        console.log(`Failed: ${createResult.message}`);
    }
}

// 3. Create schema
await executeSql({
    sqlQuery: `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            created_at TIMESTAMP DEFAULT NOW()
        )
    `
});

// 4. Insert data (using parameterized query)
await executeSql({
    sqlQuery: "INSERT INTO users (email) VALUES ($1)",
    params: ['user@example.com']
});

// 5. Query data
const result = await executeSql({ sqlQuery: "SELECT * FROM users" });
console.log(result.output);
```

## Limitations

- Production queries are READ-ONLY (SELECT only) — INSERT, UPDATE, DELETE, and DDL statements will fail
- Production environment is only supported for the "replit_database" target (not data warehouses)
- Cannot modify Stripe schema tables (read-only)
- Destructive queries (DROP, TRUNCATE, etc.) are blocked via the skill callback path
- Mutating queries blocked in Planning mode

## Rollbacks

As stated in the diagnostic skills, the development database support rollbacks. Open that skill for more information.
