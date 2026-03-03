module.exports = function(eleventyConfig) {
  // Copy CSS to output
  eleventyConfig.addPassthroughCopy("src/css");
  // Set the output directory to the root for GitHub Pages
  return {
    dir: {
      input: "src",
      output: "_site"
    },
    pathPrefix: "/"
  };
};