module.exports = {
  "stories": [
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],

  "addons": [
    "@storybook/addon-essentials",
    "storybook-css-modules-preset",
    "@chromatic-com/storybook"
  ],

  "framework": {
    name: "@storybook/nextjs",
    options: {}
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
