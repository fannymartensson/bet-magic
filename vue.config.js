module.exports = {
  pwa: {
    runtimeCompiler: true,
    publicPath: '/',
    workboxPluginMode: 'InjectManifest',
    manifestOptions: {
      background_color: '#261b40'
    },
    name: 'Bet Magic',
    themeColor: '#261b40',
    workboxOptions: {
      runtimeCaching: [
        {
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5
          }
          // urlPattern:
        }
      ]
    }
  }
}

// add what you prefer
