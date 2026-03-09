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

export default Repack.defineRspackConfig({
  context: __dirname,
  entry: './index.js',
  resolve: {
    ...Repack.getResolveOptions(),
  },
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
  plugins: [
    new Repack.RepackPlugin(),
    new Repack.plugins.ModuleFederationPluginV2({
      name: 'SampleModuleApp1',
      filename: 'SampleModuleApp1.container.js.bundle',
      dts: false,
      exposes: {
        './DashboardTabStackNavigator': './Navigation',
        './loginPage': './loginPage',
        './DashboardView': './screens/dashboard/DashboardView',
        './DashboardPage': './screens/dashboard/DashboardPage',
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: false,
        },
        'react-native': {
          singleton: true,
          eager: true,
          requiredVersion: false,
        },
        'react-native-safe-area-context': {
          singleton: true,
          eager: true,
          requiredVersion: false,
        },
        '@react-navigation/native': {
          eager: true,
          singleton: true,
          requiredVersion: '6.1.4',
        },
        '@react-navigation/native-stack': {
          eager: true,
          singleton: true,
        },
        'react-native-screens': {
          singleton: true,
          eager: true,
          requiredVersion: false,
        },
      },
    }),
  ],
});
