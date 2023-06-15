/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: ["../stories/**/*.stories.js"],
  framework: {
    name: "@storybook/html-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    config.module?.rules?.push({
      test: /\.handlebars$/,
      loader: "handlebars-loader",
    });
    config.resolve.fallback.fs = false;
    return config;
  },
};
export default config;
