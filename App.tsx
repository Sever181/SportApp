import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import MainScreen from './src/screens/MainScreen';
import SectionDetailScreen from './src/screens/SectionDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Секции рядом' }} />
        <Stack.Screen name="SectionDetail" component={SectionDetailScreen} options={{ title: 'О секции' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
