[![](https://img.shields.io/nuget/v/soenneker.blazor.utils.environments.svg?style=for-the-badge)](https://www.nuget.org/packages/soenneker.blazor.utils.environments/)
[![](https://img.shields.io/github/actions/workflow/status/soenneker/soenneker.blazor.utils.environments/publish-package.yml?style=for-the-badge)](https://github.com/soenneker/soenneker.blazor.utils.environments/actions/workflows/publish-package.yml)
[![](https://img.shields.io/nuget/dt/soenneker.blazor.utils.environments.svg?style=for-the-badge)](https://www.nuget.org/packages/soenneker.blazor.utils.environments/)
[![](https://img.shields.io/github/actions/workflow/status/soenneker/soenneker.blazor.utils.environments/codeql.yml?label=CodeQL&style=for-the-badge)](https://github.com/soenneker/soenneker.blazor.utils.environments/actions/workflows/codeql.yml)

# Soenneker.Blazor.Utils.Environments

A script allowing for environment setting within Blazor WASM.

## Install

```bash
dotnet add package Soenneker.Blazor.Utils.Environments
```

## What it provides

- A script allowing for environment setting within Blazor WASM.
- <script src="_content/Soenneker.Blazor.Utils.Environments/js/blazorenvironmentsutil.js"></script>.
- <script src="_framework/blazor.webassembly.js" autostart="false"></script>.
- <script>.
- Blazor.start({.
- environment: window.BlazorEnvironment.

## How to use it

Install the package, then consume the supplied build or runtime asset from your application. No service registration is required because this package exposes content rather than a callable API.
