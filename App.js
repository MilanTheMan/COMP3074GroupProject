import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UserProvider } from './src/context/UserContext'; // Import UserContext

import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import EducationalScreen from './src/screens/EducationalScreen';
import PersonalScreen from './src/screens/PersonalScreen';
import ProfessionalScreen from './src/screens/ProfessionalScreen';
import ChatScreen from './src/screens/ChatScreen';
import GeneralChatScreen from './src/screens/GeneralChatScreen';
import ClassScreen from './src/screens/ClassScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import GradesScreen from './src/screens/GradesScreen';
import FriendsScreen from './src/screens/FriendsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <UserProvider> {/* ✅ Wrap the app with UserProvider */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {/* Login Screen */}
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          {/* SignUp Screen */}
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{
            title: 'Sign Up',
            headerStyle: { backgroundColor: '#007AFF' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="EducationalScreen" component={EducationalScreen} />
          <Stack.Screen name="PersonalScreen" component={PersonalScreen} />
          <Stack.Screen name="ProfessionalScreen" component={ProfessionalScreen} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
          <Stack.Screen name="GeneralChatScreen" component={GeneralChatScreen} />
          <Stack.Screen name="Class" component={ClassScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Marks" component={GradesScreen} />
          <Stack.Screen name="Friends" component={FriendsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}