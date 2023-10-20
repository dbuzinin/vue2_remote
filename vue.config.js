const {ModuleFederationPlugin} = require('webpack').container;

const deps = require('./package.json').dependencies;
module.exports = {
  publicPath: "auto",
  configureWebpack: () => {
    return {
      performance: {
        hints: false,
      },
      optimization: {
       /* // Имена модулей будут осмысленными. Помогает при отладке. На размер бандла влияет крайне мало
        moduleIds: 'named',
        // Имена чанков будут осмысленными. Помогает при отладке. На размер бандла влияет крайне мало
        chunkIds: 'named',*/
        splitChunks: false,
      },
      devtool: process.env.VUE_APP_SENTRY_RELEASE ? 'source-map' : 'eval-cheap-module-source-map',
      devServer: {
        https: true,
        client: {
          overlay: false,
        },
      },
      plugins: [
          new ModuleFederationPlugin({
          name: "remote_app",
          filename: 'remoteEntry.js',
          exposes: {
            './RemoteBtn': './src/components/RemoteBtn',
          },
          shared: {
            ...deps,
            vue: {
              requiredVersion: deps.vue,
              singleton: true,
            },
          },
        }),
        // FEATURE этот плагин делает все в prefetch в index.html, надо поисследовать, так как после этого стала страничка грузиться чуть медленнее
      ].filter(Boolean),
    };
  },


  lintOnSave: process.env.NODE_ENV !== 'production' ? 'warning' : 'error',
};
