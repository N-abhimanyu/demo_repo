module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        webpackConfig.plugins.push(
          new webpack.ProvidePlugin({
            chrome: 'chrome'
          })
        );
        return webpackConfig;
      }
    }
  };
  