(function () {
    const hostname = window.location.hostname.toLowerCase().replace(/^\[|\]$/g, "");
    const tokens = hostname.split(/[.-]/);

    const environmentMappings = [
        { names: ["localhost", "127.0.0.1", "::1"], env: "Local", exact: true },
        { names: ["dev", "development"], env: "Development" },
        { names: ["staging", "qa", "test"], env: "Staging" },
        { names: ["prod", "production"], env: "Production" }
    ];

    const matchedMapping = environmentMappings.find(mapping =>
        mapping.names.some(name => mapping.exact ? hostname === name : tokens.includes(name))
    );

    window.BlazorEnvironment = matchedMapping ? matchedMapping.env : "Production";
})();
