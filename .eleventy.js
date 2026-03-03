module.exports = function(eleventyConfig) {
  // Copy CSS to output
  eleventyConfig.addPassthroughCopy("src/css");
  return {
    dir: {
      input: "src",
      output: "_site"
    },
    // For GitHub Pages project site at /andi-site/
    pathPrefix: "/andi-site/"
  };
};