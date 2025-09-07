import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import navigators and screens
import TabNavigator from './TabNavigator';
import SongDetailsScreen from '../../features/home/screens/SongDetailsScreen';
import { strings } from '../../core/localization/strings';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#FAFAFA' },
      }}
    >
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SongDetails"
        component={SongDetailsScreen}
        options={{
          headerShown: true,
          headerTitle: strings.songDetailsHeader,
          headerTitleAlign: 'center',
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}
      />
    </Stack.Navigator>
  );
};

export { MainNavigator };
export default MainNavigator;
