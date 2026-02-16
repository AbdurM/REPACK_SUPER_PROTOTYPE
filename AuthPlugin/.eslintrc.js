module.exports = {
  root: true,
  extends: '@react-native',
  parserOptions: {
    // Allow parsing without requiring a Babel config at the repo root.
    // This avoids "No Babel config file detected" for files like AuthPlugin/auth.js
    // when ESLint is run from the monorepo root.
    requireConfigFile: false,
  },
};
