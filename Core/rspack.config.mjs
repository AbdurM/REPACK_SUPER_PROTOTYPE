import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as Repack from '@callstack/repack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Rspack configuration enhanced with Re.Pack defaults for React Native.
 *
 * Learn about Rspack configuration: https://rspack.dev/config/
 * Learn about Re.Pack configuration: https://re-pack.dev/docs/guides/configuration
 */

export default Repack.defineRspackConfig(({platform})=>{return {
  context: __dirname,
  entry: './index.js',
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
  module: {
    rules: [
      {
        test: /\.[cm]?[jt]sx?$/,
        type: 'javascript/auto',
        use: {
          loader: '@callstack/repack/babel-swc-loader',
          parallel: true,
          options: {},
        },
      },
      ...Repack.getAssetTransformRules(),
    ],
  },
   plugins: [new Repack.RepackPlugin(),
    new Repack.plugins.ModuleFederationPluginV2({
      name: 'core',
      dts: false,
      defaultRuntimePlugins: ['@callstack/repack/mf/core-plugin'],
      remotes: {
        TransactionsPlugin: 'TransactionsPlugin@dynamic',
        ProfilePlugin: 'ProfilePlugin@dynamic',
        AuthPlugin: 'AuthPlugin@dynamic',
        DashboardPlugin: 'DashboardPlugin@dynamic',
        DashboardModule: `DashboardModule@dynamic`,
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
          eager: true,
        },
        'react-native-screens': {
          singleton: true,
          eager: true,
        },
        'react-native-config': {
          singleton: true,
          eager: true,
        },
        '@react-native-community/netinfo': {
          singleton: true,
          eager: true,
        },
        'react-native-gesture-handler': {
          singleton: true,
          eager: true,
        },
        'react-native-reanimated': {
          singleton: true,
          eager: true,
        },
        'react-native-svg': {
          singleton: true,
          eager: true,
        },
        'react-native-app-auth': {
          singleton: true,
          eager: true,
        },
        'react-native-biometrics': {
          singleton: true,
          eager: true,
        },
        'react-native-worklets': {
          singleton: true,
          eager: true,
        },
        '@gorhom/bottom-sheet': {
          singleton: true,
          eager: true,
        },
        'react-native-responsive-screen': {
          singleton: true,
          eager: true,
        },
        'react-native-uuid': {
          singleton: true,
          eager: true,
        },
        '@shopify/flash-list': {
          singleton: true,
          eager: true,
        },
      },
    })
  ],
}});
