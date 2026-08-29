[![](https://img.shields.io/nuget/v/soenneker.blazor.utils.environments.svg?style=for-the-badge)](https://www.nuget.org/packages/soenneker.blazor.utils.environments/)
[![](https://img.shields.io/github/actions/workflow/status/soenneker/soenneker.blazor.utils.environments/publish-package.yml?style=for-the-badge)](https://github.com/soenneker/soenneker.blazor.utils.environments/actions/workflows/publish-package.yml)
[![](https://img.shields.io/nuget/dt/soenneker.blazor.utils.environments.svg?style=for-the-badge)](https://www.nuget.org/packages/soenneker.blazor.utils.environments/)
[![](https://img.shields.io/github/actions/workflow/status/soenneker/soenneker.blazor.utils.environments/codeql.yml?label=CodeQL&style=for-the-badge)](https://github.com/soenneker/soenneker.blazor.utils.environments/actions/workflows/codeql.yml)

# Soenneker.Blazor.Utils.Environments

A static asset that selects the Blazor WebAssembly host environment from the page hostname before Blazor starts.

Use it when the same published WebAssembly files are deployed behind environment-specific hostnames and the application needs the corresponding Blazor environment name at startup.

## Installation

```bash
dotnet add package Soenneker.Blazor.Utils.Environments
```

No service registration is required.

## Setup

In the WebAssembly host page, load the environment script before manually starting Blazor:

```html
<script src="_content/Soenneker.Blazor.Utils.Environments/js/blazorenvironmentsutil.js"></script>
<script src="_framework/blazor.webassembly.js" autostart="false"></script>
<script>
    Blazor.start({ environment: window.BlazorEnvironment });
</script>
```

Do not also start Blazor automatically. The `autostart="false"` attribute ensures the selected environment is supplied to the single startup call.

## Hostname mapping

The script maps exact dot- or hyphen-delimited hostname tokens:

| Hostname examples | Environment |
| --- | --- |
| `localhost`, `127.0.0.1`, `[::1]` | `Local` |
| `dev.example.com`, `app-development.example.com` | `Development` |
| `staging.example.com`, `app-qa.example.com`, `test.example.com` | `Staging` |
| `prod.example.com`, `app-production.example.com` | `Production` |
| Any unmatched hostname | `Production` |

Matching ignores case. A substring inside a label does not match, so `device.example.com` is not treated as Development.

The selected value is available as `window.BlazorEnvironment` and is passed into the WebAssembly host as its environment name.

## Security boundary

The hostname and `window.BlazorEnvironment` are client-controlled. Use the environment only to select client configuration and behavior; never use it for authorization, feature entitlements, or other server trust decisions.

Everything shipped to a WebAssembly client is public, including environment-specific configuration files. Do not place secrets, private API keys, or privileged connection details in those files.

This package changes only the WebAssembly host environment. It does not change the ASP.NET Core server environment in a hosted application.
