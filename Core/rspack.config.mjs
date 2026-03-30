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
   plugins: [new Repack.RepackPlugin(),
    new Repack.plugins.ModuleFederationPluginV2({
      name: 'core',
      dts: false,
      defaultRuntimePlugins: ['@callstack/repack/mf/core-plugin'],
      remotes: {
        DashboardPlugin: 'DashboardPlugin@dynamic',
      }
    })
  ],
  shared: {
    react: Repack.Federated.SHARED_REACT,
    'react-native': Repack.Federated.SHARED_REACT_NATIVE,
    'react-native-safe-area-context': {
      singleton: true,
      eager: true,
      requiredVersion: false,
    },
  },
}});
