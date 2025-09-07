import React, { useEffect } from 'react';
import { StatusBar, Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

import { AppNavigator } from './src/core/navigation';

const App = () => {
  useEffect(() => {
    // Hide splash screen after app loads
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#ffffff"
        translucent={false}
      />
      <AppNavigator />
    </GestureHandlerRootView>
  );
};

export default App;
