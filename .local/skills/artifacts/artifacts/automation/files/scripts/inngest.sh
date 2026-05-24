#!/usr/bin/env bash

set -e

INNGEST_CONFIG=".config/inngest/inngest.yaml"
AUTOMATION_PORT="${AUTOMATION_PORT:-5000}"
INNGEST_PORT="${PORT:-3000}"

# Try to store Inngest data in Postgres if it's available. Otherwise, put it in SQLite.
if [[ ! -f "${INNGEST_CONFIG}" ]]; then
    mkdir -p "$(dirname "${INNGEST_CONFIG}")"
    if [[ -n "${DATABASE_URL:-}" ]]; then
        printf 'postgres-uri: "%s"' "${DATABASE_URL}" > "${INNGEST_CONFIG}"
    else
        printf 'sqlite-dir: "/home/runner/workspace/.local/share/inngest"' > "${INNGEST_CONFIG}"
    fi
fi
exec inngest-cli dev -u "http://localhost:${AUTOMATION_PORT}/api/inngest" --host 127.0.0.1 --port "${INNGEST_PORT}" --config "${INNGEST_CONFIG}"
