import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import ClassScreen from './src/screens/ClassScreen';
import SettingsScreen from './src/screens/SettingsScreen';

// Create a stack navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Login Screen */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Hide header for LoginScreen
        />
        {/* SignUp Screen with Back Button */}
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            title: 'Sign Up',
            headerStyle: { backgroundColor: '#007AFF' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        {/* Other Screens */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Class" component={ClassScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
