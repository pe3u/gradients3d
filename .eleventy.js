module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  return {
    // Site is deployed as a GitHub Pages project site at
    // https://pe3u.github.io/gradients3d/ (not the domain root), so every
    // internal link/asset path must go through the `url` filter to pick
    // this prefix up. Change/remove this if the site ever moves to a
    // custom domain or a github.io *user* page (root-served).
    pathPrefix: "/gradients3d/",
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
