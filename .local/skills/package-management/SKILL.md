---
name: package-management
description: Install and manage language packages, system dependencies, and programming language runtimes.
---

# Package Management Skill

Manage project dependencies and programming language runtimes. Use this skill instead of running shell commands like `npm install`, `pip install`, or `apt install`.

## When to Use

Use this skill when you need to:

- Install language-specific packages (npm, pip, cargo, etc.)
- Install system-level dependencies (ffmpeg, jq, imagemagick, etc.)
- Install programming language runtimes (Python, Node.js, etc.)
- Remove packages from the project
- Check available versions of a programming language

## When NOT to Use

- Searching for available packages (use web search instead)
- Configuring package settings (edit config files directly)
- Running package scripts (use bash tool)

## Modules (Replit Terminology)

"Modules" is a Replit-specific term for language toolchains that can be installed into the NixOS environment. Use `listAvailableModules()` to see what's available.

**Installation priority order:**

1. Modules via this skill (preferred)
2. Nix system dependencies via `installSystemDependencies()`
3. Language package managers (pip, npm, cargo, etc.) via `installLanguagePackages()`

If confused about package installation in Nix or language package managers, use web search.

**After installing a module:**

- Update `.gitignore` with the language's standard ignore patterns
- Never add Replit config files to `.gitignore`

**After removing a module:**

- Consider removing any corresponding workflows that depend on it

## Available Functions

### listAvailableModules(langName=None)

List available language toolchains that can be installed.

**Parameters:**

- `langName` (str, optional): Language name to filter by (e.g., "python", "nodejs", "rust"). If not provided, returns all available modules.

**Returns:** Dict with `success`, `message`, `langName`, and `modules` list

Each module contains: id, name, version, description

**Example:**

```javascript
// List all available modules
const modules = await listAvailableModules();
// Returns: {modules: [{id: "python-3.11", ...}, {id: "nodejs-20", ...}, ...]}

// Find available Python versions
const pythonModules = await listAvailableModules({ langName: "python" });
// Returns: {modules: [{id: "python-3.11", name: "Python", version: "3.11", ...}, ...]}

// Find available Node.js versions
const nodeModules = await listAvailableModules({ langName: "nodejs" });
```

### installProgrammingLanguage(language)

Install a programming language runtime and its package manager.

**Parameters:**

- `language` (str, required): Language identifier like "python-3.11", "nodejs-20"

**Returns:** Dict with `success`, `message`, `language`, and `installedModuleId` keys

**Example:**

```javascript
// First, check available versions
const modules = await listAvailableModules({ langName: "python" });
console.log(modules);  // See available Python versions

// Install specific version
const result = await installProgrammingLanguage({ language: "python-3.11" });

// Install Node.js 20
const result2 = await installProgrammingLanguage({ language: "nodejs-20" });
```

### uninstallProgrammingLanguage(moduleId)

Remove an installed programming language runtime.

**Parameters:**

- `moduleId` (str, required): Module ID from `listAvailableModules`

**Returns:** Dict with `success`, `message`, `moduleId`, and `wasInstalled`

**Example:**

```javascript
// Remove Python 3.10
const result = await uninstallProgrammingLanguage({ moduleId: "python-3.10" });
```

### installLanguagePackages(language, packages)

Install language-specific packages like npm, pip, or cargo packages.

**Parameters:**

- `language` (str, required): Programming language: "nodejs", "python", "bun", "go", "rust"
- `packages` (list[str], required): List of packages to install

**Returns:** Dict with `success`, `message`, `packages`, and `output` keys

**Example:**

```javascript
// Install npm packages
const result = await installLanguagePackages({
    language: "nodejs",
    packages: ["express", "lodash"]
});
console.log(result.message);

// Install pip packages
const result2 = await installLanguagePackages({
    language: "python",
    packages: ["requests", "flask"]
});
```

**IMPORTANT — required parameter rules:**

- `language` is **required** — you must always include it
- Valid language values: `"nodejs"`, `"python"`, `"bun"`, `"go"`, `"rust"`
  - Use `"nodejs"` for JavaScript/TypeScript projects — NEVER use `"js"`, `"node"`, or `"javascript"`
  - Use `"python"` for Python projects — NEVER use `"py"` or `"pip"`
- `packages` must be an **array of strings** — NEVER a single string, NEVER an array of objects
  - Correct: `packages: ["express"]`
  - Wrong: `packages: "express"`
  - Wrong: `packages: [{name: "express"}]`

### uninstallLanguagePackages(language, packages)

Remove language-specific packages.

**Parameters:**

- `language` (str, required): Programming language
- `packages` (list[str], required): List of packages to uninstall

**Returns:** Dict with `success`, `message`, and `packages` keys

**Example:**

```javascript
const result = await uninstallLanguagePackages({
    language: "nodejs",
    packages: ["lodash"]
});
```

### installSystemDependencies(packages)

Install system-level dependencies via Nix.

**Parameters:**

- `packages` (list[str], required): Nixpkgs attribute paths (NOT apt package names)

**Returns:** Dict with `success`, `message`, and `packages` keys

**Important:** Use Nix package names, not apt/debian names:

- X11 libraries need 'xorg.' prefix: `xorg.libxcb`, `xorg.libX11`
- `ca-certificates` is `cacert` in Nix
- `libxcb` is `xorg.libxcb` in Nix

**Example:**

```javascript
// Install system dependencies
const result = await installSystemDependencies({
    packages: ["jq", "ffmpeg", "imagemagick"]
});

// Install X11 libraries (note the xorg. prefix)
const result2 = await installSystemDependencies({
    packages: ["xorg.libxcb", "xorg.libX11"]
});
```

### uninstallSystemDependencies(packages)

Remove system-level dependencies.

**Parameters:**

- `packages` (list[str], required): Nixpkgs attribute paths to uninstall

**Returns:** Dict with `success`, `message`, and `packages` keys

**Example:**

```javascript
const result = await uninstallSystemDependencies({ packages: ["jq"] });
```

## Best Practices

1. **Use language packages for project dependencies**: These are tracked in package files (package.json, requirements.txt)
2. **Use system dependencies for OS-level tools**: Things like ffmpeg, imagemagick, or native libraries
3. **Use Nix package names**: Not apt/debian names. Check nixpkgs for correct names
4. **Install language runtimes when needed**: If `python` or `node` commands fail, install the runtime first
5. **Check versions first**: Use `listAvailableModules` before `installProgrammingLanguage`

## Example Workflow

```javascript
// Check available Python versions
const modules = await listAvailableModules({ langName: "python" });
console.log(modules);

// Set up a Python Flask project
await installProgrammingLanguage({ language: "python-3.11" });
await installLanguagePackages({
    language: "python",
    packages: ["flask", "gunicorn", "sqlalchemy"]
});

// Set up a Node.js project with native dependencies
await installProgrammingLanguage({ language: "nodejs-20" });
await installLanguagePackages({
    language: "nodejs",
    packages: ["sharp", "canvas"]
});
await installSystemDependencies({
    packages: ["pkg-config", "cairo", "pango", "libjpeg"]
});

// Clean up old language version
await uninstallProgrammingLanguage({ moduleId: "python-3.10" });
```

## Automatic Behaviors

- Installing packages automatically creates/updates project files (package.json, requirements.txt, etc.)
- Package installations reboot all workflows to pick up new dependencies
- Language runtime installations include popular package managers (pip, npm, etc.)
