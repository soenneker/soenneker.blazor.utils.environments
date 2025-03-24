[![](https://img.shields.io/nuget/v/soenneker.blazor.utils.environments.svg?style=for-the-badge)](https://www.nuget.org/packages/soenneker.blazor.utils.environments/)
[![](https://img.shields.io/github/actions/workflow/status/soenneker/soenneker.blazor.utils.environments/publish-package.yml?style=for-the-badge)](https://github.com/soenneker/soenneker.blazor.utils.environments/actions/workflows/publish-package.yml)
[![](https://img.shields.io/nuget/dt/soenneker.blazor.utils.environments.svg?style=for-the-badge)](https://www.nuget.org/packages/soenneker.blazor.utils.environments/)

# ![](https://user-images.githubusercontent.com/4441470/224455560-91ed3ee7-f510-4041-a8d2-3fc093025112.png) Soenneker.Blazor.Utils.Environments
### A script allowing for environment setting within Blazor WASM

## Installation

```
dotnet add package Soenneker.Blazor.Utils.Environments
```

```html
<script src="_content/js/blazorenvironmentsutil.js"></script>
<script src="_framework/blazor.webassembly.js" autostart="false"></script>

<script>
    Blazor.start({
        environment: window.BlazorEnvironment
    });
</script>
```