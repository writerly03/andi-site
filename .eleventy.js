module.exports = function(eleventyConfig) {
  // Copy CSS to output
  eleventyConfig.addPassthroughCopy("src/css");
  // Copy CNAME for GitHub Pages custom domain
  eleventyConfig.addPassthroughCopy("src/CNAME");
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};