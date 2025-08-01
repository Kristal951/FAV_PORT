module.exports = {
  style: {
    postcss: {
      plugins: [
        require("postcss-flexbugs-fixes"),
        require("postcss-preset-env")({
          autoprefixer: {
            flexbox: "no-2009",
          },
          stage: 3,
        }),
        require("postcss-normalize"),
      ],
    },
  },
};
