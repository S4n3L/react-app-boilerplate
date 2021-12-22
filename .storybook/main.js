const path = require('path');
const toPath = (filePath) => path.join(process.cwd(), filePath);

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  "framework": "@storybook/react",
  /*
  // To generate storybook compatible properties for mui - need to revise
  // https://stackoverflow.com/questions/63919936/missing-materialui-table-props-in-storybook
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        console.log("***", prop.parent)
        return prop.parent
          ? /@mui/.test(prop.parent.fileName) || !/node_modules/.test(prop.parent.fileName)
          : true
      },
    },
  },
  */
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [
      path.resolve(__dirname, ".."),
      "node_modules",
    ],
    // To make sure we can use aliases in storybook import statements
    config.resolve.alias = {
      ...config.resolve.alias,
      "@src": path.resolve(__dirname, "../src"),
      // To make material-ui-5 with storybook 6.x
      "@emotion/core": toPath("node_modules/@emotion/react"),
      "emotion-theming": toPath("node_modules/@emotion/react")
    }

    return config;
  }
}
