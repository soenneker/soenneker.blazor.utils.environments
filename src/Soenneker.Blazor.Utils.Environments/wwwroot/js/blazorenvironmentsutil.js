(function () {
    const hostname = window.location.hostname.toLowerCase();

    const environmentMappings = [
        { prefixes: ["localhost", "127.0.0.1"], env: "Local" },
        { prefixes: ["dev", "development"], env: "Development" },
        { prefixes: ["staging", "qa", "test"], env: "Staging" },
        { prefixes: ["prod", "production"], env: "Production" }
    ];

    const matchedMapping = environmentMappings.find(mapping =>
        mapping.prefixes.some(prefix => hostname.includes(prefix))
    );

    const environment = matchedMapping ? matchedMapping.env : "Production"; // default fallback

    console.info(`Environment: ${environment}`);
    window.BlazorEnvironment = environment;
})();