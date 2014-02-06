Package.describe({
  summary: "Markdown templates rendered on the server"
});

Package._transitional_registerBuildPlugin({
  name: "compileMardown",
  use: [],
  sources: ["plugin/handler.js"],
  npmDependencies: { "markdown": "0.5.0" }
});
