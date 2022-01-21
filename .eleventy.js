module.exports = function (eleventyConfig) {
  // eleventyConfig.addFilter("dateDisplay", require("./src/_filters/dates.js"));

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "public",
    },
  };
};
