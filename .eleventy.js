module.exports = function(eleventyConfig) {
  // Set the output directory to the root for GitHub Pages
  return {
    dir: {
      input: "src",
      output: "_site"
    },
    pathPrefix: "/"
  };
};