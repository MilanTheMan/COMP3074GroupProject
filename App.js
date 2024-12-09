import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import ClassScreen from './src/screens/ClassScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import MessagingScreen from './src/screens/MessagingScreen';
import GradesScreen from './src/screens/GradesScreen';
import TaskScreen from './src/screens/TaskScreen';
import FriendsScreen from './src/screens/FriendsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Class" component={ClassScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />

        <Stack.Screen name="MessagingScreen" component={MessagingScreen} />
        <Stack.Screen name="Chat" component={MessagingScreen} />
        <Stack.Screen name="Marks" component={GradesScreen} />
        <Stack.Screen name="Tasks" component={TaskScreen} />
        <Stack.Screen name="Friends" component={FriendsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
