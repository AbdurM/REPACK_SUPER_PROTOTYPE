module.exports = {
  commands: require('@callstack/repack/commands/rspack'),
  dependencies: {
    'react-native-device-info': {
      platforms: {
        ios: null, // disable autolinking globally
      },
    },
  },
};