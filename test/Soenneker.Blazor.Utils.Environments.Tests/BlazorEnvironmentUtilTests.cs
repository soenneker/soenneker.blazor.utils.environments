using Soenneker.Tests.HostedUnit;

namespace Soenneker.Blazor.Utils.Environments.Tests;

[ClassDataSource<Host>(Shared = SharedType.PerTestSession)]
public class BlazorEnvironmentUtilTests : HostedUnitTest
{
    public BlazorEnvironmentUtilTests(Host host) : base(host)
    {

    }

    [Test]
    public void Default()
    {

    }
}
