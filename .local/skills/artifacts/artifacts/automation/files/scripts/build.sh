#!/usr/bin/env bash

set -e

export NODE_OPTIONS='--max-old-space-size=1536'
exec mastra build
