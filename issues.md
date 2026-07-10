### 🧩 Issue 1: URLSanitizer allows SSRF via hostnames without DNS/IP revalidation

### 📝 Description

`URLSanitizer.validate_url()` blocks private IP ranges only when the parsed hostname is an IP literal. If the input uses a hostname (e.g., `example.com`) the sanitizer does not resolve it and therefore does not prevent targeting internal services after DNS resolution (DNS rebinding / malicious DNS records).

### 🔄 Steps to Reproduce

1. Create an environment where a hostname resolves to a private IP at validation time (or via DNS rebinding).
2. Call:
   - `validate_url("http://internal-host.example")`
   - or `URLSanitizer().validate_url("http://internal-host.example:8080/health")`
3. Observe that no `InvalidURLError` is raised.

### 🎯 Expected Behavior

The sanitizer should mitigate SSRF by resolving the hostname (or otherwise enforcing stricter rules) and applying the same blocked-network checks to the resolved addresses, including ports.

### ❌ Actual Behavior / Error Logs

No error is raised for hostname-based inputs because `_validate_ip_address()` returns early for non-IP hosts.

### 💻 Environment

- **OS:** Windows 11 (or any)
- **Python Version:** Python 3.x
- **File Name:** `security/url_sanitizer.py`

---

- [ ] I am a registered **GSSoC 2026** contributor.
- [ ] I want to be assigned to fix this issue.

### 🧷 Issue 2: URLSanitizer does not validate/limit URL ports and can permit access to sensitive ports

### 📝 Description

`URLSanitizer.validate_url()` validates scheme and blocked networks, but it does not restrict ports. Even for allowed schemes (`http`, `https`), an attacker can target dangerous ports (e.g., `:22`, `:2375`, `:3306`) on allowed hosts or on hosts that pass the current IP/hostname checks.

### 🔄 Steps to Reproduce

1. Run in Python REPL:
   - `validate_url("http://127.0.0.1:22")`
2. Also test:
   - `validate_url("http://example.com:22")`
3. Observe:
   - IP literal case may be blocked (127.0.0.1), but hostname case can still pass.
   - Port restrictions are never enforced.

### 🎯 Expected Behavior

- Enforce an allowlist of ports or block known dangerous ports.
- Include port logic in validation for both IP literals and hostnames.

### ❌ Actual Behavior / Error Logs

No exception is raised purely due to port number. Current validation focuses on scheme and blocked networks only.

### 💻 Environment

- **OS:** Windows 11 (or any)
- **Python Version:** Python 3.x
- **File Name:** `security/url_sanitizer.py`

---

- [ ] I am a registered **GSSoC 2026** contributor.
- [ ] I would like to implement this feature myself.

### 🗼 Issue 3: SafeTarExtractor path containment check can be bypassed due to naive string prefix matching

### 📝 Description

`SafeTarExtractor._validate_member()` checks traversal safety with:

- `if not str(target_abs).startswith(str(extract_abs))`

String prefix checks can be bypassed with similarly-prefixed paths (e.g., `/tmp/a` vs `/tmp/ab`) depending on filesystem path formatting. This is less robust than using `Path.relative_to()` for containment.

### 🔄 Steps to Reproduce

1. Choose an `extract_path` and craft tar entries whose resolved paths create a similar prefix relationship.
2. Call:
   - `SafeTarExtractor().extract("archive.tar", extract_path)`
3. Observe that some malicious members may not be detected.

### 🎯 Expected Behavior

Containment should be verified using filesystem-safe methods (e.g., `target_abs.relative_to(extract_abs)`), not string-prefix matching.

### ❌ Actual Behavior / Error Logs

Potential false negatives in traversal detection because the check depends on `startswith()`.

### 💻 Environment

- **OS:** Windows 11 / Linux / macOS
- **Python Version:** Python 3.x
- **File Name:** `security/tar_safe.py`

---

- [ ] I am a registered **GSSoC 2026** contributor.
- [ ] I want to be assigned to fix this issue.

### 📦 Issue 4: SafeTarExtractor may silently accept truncated members when member.size metadata is incorrect

### 📝 Description

When extracting a regular file, `_extract_file()` reads until `bytes_copied < member.size`, but if `src.read()` returns `b""` early (truncation), it breaks without raising. It then renames the temp file to `target_path`, potentially allowing corrupted or partially-controlled payloads.

### 🔄 Steps to Reproduce

1. Create a tar where a member’s `size` metadata is larger than the actual data included.
2. Extract with:
   - `SafeTarExtractor(max_file_size=...)`
3. Observe the extractor completes successfully while producing truncated output.

### 🎯 Expected Behavior

If the extracted stream ends before `member.size` bytes are copied, extraction should raise `UnsafeTarError` and delete the temp file.

### ❌ Actual Behavior / Error Logs

No exception; the extractor breaks on missing bytes and proceeds to `os.rename(tmp.name, target_path)`.

### 💻 Environment

- **OS:** Any
- **Python Version:** Python 3.x
- **File Name:** `security/tar_safe.py`

---

- [ ] I am a registered **GSSoC 2026** contributor.
- [ ] I would like to implement this feature myself.

### 🧨 Issue 5: Default values bypass min/max validation in utils/validation.get_int/get_float

### 📝 Description

`utils.validation.get_int()` and `get_float()` return `default` when user input is empty, but do not re-check `default` against `min_value` / `max_value`. This can introduce invalid state and downstream crashes or incorrect logic.

### 🔄 Steps to Reproduce

1. In a game/utility, call:
   - `get_int("Enter: ", min_value=0, max_value=10, default=999)`
2. Press Enter without typing anything.
3. Observe the function returns `999` (out of allowed range) instead of prompting again.

### 🎯 Expected Behavior

When input is empty and a default is provided, the default should be validated against `min_value`/`max_value` (or the default should be rejected with an error).

### ❌ Actual Behavior / Error Logs

No error. Out-of-range defaults are accepted.

### 💻 Environment

- **OS:** Windows 11 (or any)
- **Python Version:** Python 3.x
- **File Name:** `utils/validation.py`

---

- [ ] I am a registered **GSSoC 2026** contributor.
- [ ] I would like to implement this feature myself.
