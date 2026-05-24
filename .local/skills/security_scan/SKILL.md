---
name: security_scan
description: Run runDependencyAudit, runSastScan, and runHoundDogScan and return a concise, prioritized security summary with critical/high findings first. Must use this skill if security scanning is explicitly requested by the user.
---

# Security Scan Skill

Run three independent scanners and summarize results:

- `runDependencyAudit()` for package/dependency vulnerabilities
- `runSastScan()` for static code findings
- `runHoundDogScan()` for privacy/security dataflow findings

## Orchestration

For full scans, run scanners in parallel and tolerate per-scanner failures.

```javascript
const [depResult, sastResult, hounddogResult] = await Promise.allSettled([
  runDependencyAudit(),
  runSastScan(),
  runHoundDogScan(),
]);

const dep = depResult.status === 'fulfilled' ? depResult.value : null;
const sast = sastResult.status === 'fulfilled' ? sastResult.value : null;
const hounddog =
  hounddogResult.status === 'fulfilled' ? hounddogResult.value : null;
```

Do not fail the whole scan because one scanner errors.

## Minimal Response Shape

- `runDependencyAudit()`
  - `metadata.vulnerabilities`: `{ info, low, moderate, high, critical }`
  - `vulnerabilities[]`: `id`, `package`, `severity`, `fix`, `source`
- `runSastScan()`
  - `results[]`: `checkId`, `message`, `severity`, `fingerprint`, `location`
- `runHoundDogScan()`
  - `vulnerabilities[]`: `hash`, `ruleIds`, `message`, `severity`, `location`, `privacyViolations`, `remediation*`

## Output Expectations

Return concise results instead of dumping full payloads:

1. Per scanner: status (`ok` or `error`) and count by severity.
2. Top critical/high findings with file path and short message.
3. A short remediation plan, with risky/breaking changes clearly called out.
