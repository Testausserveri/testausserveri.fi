module.exports = {
  "stories": [
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials", 
    "storybook-css-modules-preset"
  ],
  "framework": {
    name: "@storybook/nextjs",
    options: {}
  },
};
