module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: (config) => {
    config.resolve.alias["core-js/modules"] =
      "@storybook/core/node_modules/core-js/modules";
    config.resolve.alias["core-js/features"] =
      "@storybook/core/node_modules/core-js/features";

    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
