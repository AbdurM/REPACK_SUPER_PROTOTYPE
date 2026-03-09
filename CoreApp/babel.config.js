module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    "react-native-reanimated/plugin",
    "@babel/plugin-transform-class-static-block",
    "@babel/plugin-transform-object-rest-spread",
    [
      'module-resolver',
      {
        alias: {
          assets: './app/assets',
          components: './app/components',
          screens: './app/screens',
          services: './app/services',
          utilities: './app/utilities',
          context: './app/context',
          templates: './app/templates',
        },
      },
    ],
  ],
};
