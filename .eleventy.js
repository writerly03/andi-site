module.exports = function(eleventyConfig) {
  // Copy CSS to output
  eleventyConfig.addPassthroughCopy("src/css");
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};