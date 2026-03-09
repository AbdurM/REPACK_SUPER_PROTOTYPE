import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as Repack from '@callstack/repack';
// import {getSharedDependencies} from 'super-app-showcase-sdk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Rspack configuration enhanced with Re.Pack defaults for React Native.
 *
 * Learn about Rspack configuration: https://rspack.dev/config/
 * Learn about Re.Pack configuration: https://re-pack.dev/docs/guides/configuration
 */

export default Repack.defineRspackConfig({
  context: __dirname,
  entry: './index.js',
  output: {
    publicPath: 'http://localhost:9001/',
  },
  ignoreWarnings: [
    {
      module: /react-native-worklets/,
      message: /Critical dependency: require function is used in a way/,
    },
    {
      module: /react-native-reanimated/,
      message: /Critical dependency: require function is used in a way/,
    },
    {
      message: /No version specified and unable to automatically determine one/,
    },
  ],
  resolve: {
    ...Repack.getResolveOptions(),
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
    fallback: {
      crypto: false,
      stream: false,
      buffer: false,
      util: false,
      assert: false,
      http: false,
      https: false,
      os: false,
      url: false,
      zlib: false,
      http2: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.[cm]?[jt]sx?$/,
        type: 'javascript/auto',
        use: {
          loader: '@callstack/repack/babel-swc-loader',
          parallel: true,
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
                tsx: true,
                decorators: false,
              },
              transform: {
                react: {
                  runtime: 'automatic',
                  development: process.env.NODE_ENV === 'development',
                },
              },
              externalHelpers: true,
              target: 'es2018',
            },
          },
        },
      },
      ...Repack.getAssetTransformRules(),
    ],
  },
  plugins: [
    new Repack.RepackPlugin({
      output: {
        auxiliaryComment: 'LoginModule',
      },
    }),
    new Repack.plugins.ModuleFederationPluginV2({
      name: 'LoginModule',
      filename: 'LoginModule.container.js.bundle',
      dts: false,
      exposes: {
        './LandingScreen': './app/screens/landingscreen/LandingscreenView.tsx',
        './AuthStackNavigator': './app/utilities/Navigation.tsx',
        './loginPage': './loginPage',
        './LandingscreenView': './app/screens/landingscreen/index.js',
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
        },
        'react-native': {
          singleton: true,
          eager: true,
        },
        'react-native-safe-area-context': {
          singleton: true,
        },
        'react-native-screens': {
          singleton: true,
        },
        'react-native-config': {
          singleton: true,
        },
        '@react-native-community/netinfo': {
          singleton: true,
        },
        'react-native-gesture-handler': {
          singleton: true,
        },
        'react-native-reanimated': {
          singleton: true,
        },
        'react-native-svg': {
          singleton: true,
        },
        'react-native-app-auth': {
          singleton: true,
        },
        'react-native-biometrics': {
          singleton: true,
        },
        'react-native-worklets': {
          singleton: true,
        },
        '@gorhom/bottom-sheet': {
          singleton: true,
        },
        'react-native-responsive-screen': {
          singleton: true,
        },
        'react-native-uuid': {
          singleton: true,
        },
        '@shopify/flash-list': {
          singleton: true,
        },
      }
    })
  ],
});
