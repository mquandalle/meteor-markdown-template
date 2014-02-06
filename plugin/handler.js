var markdownToHTML = Npm.require("markdown").markdown.toHTML;

Plugin.registerSourceHandler("tpl.md", function (compileStep) {

  // XXX Code copied from
  // packages/templating/plugin/compile-template.js:6
  if (! compileStep.arch.match(/^browser(\.|$)/))
    return;

  var templateName = compileStep.inputPath.slice(0, - ".tpl.md".length);

  // Parse and compile the content
  var content = compileStep.read().toString('utf8');
  var htmlContent = '<template name="">' + markdownToHTML(content) + '</template>';

  // XXX How could I register register htmlContent?
});
