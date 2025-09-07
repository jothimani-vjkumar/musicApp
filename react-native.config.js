module.exports = {
  dependencies: {
    'react-native-config': {
      platforms: {
        android: {
          sourceDir: '../node_modules/react-native-config/android',
          packageImportPath: 'import com.lugg.RNCConfig.RNCConfigPackage;',
        },
      },
    },
  },
};
