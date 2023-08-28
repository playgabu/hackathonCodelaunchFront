import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './screens/Main';
import Login from './screens/Login';
import Signin from './screens/Signin';
import SecureProfile from './screens/SecureProfile';
import Home from './screens/Home';
import DadsProfile from './screens/DadsProfile';
import KidProfile from './screens/KidProfile';

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
                <Stack.Screen name="SecureProfile" component={SecureProfile} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="DadProfile" component={DadsProfile} options={{ headerShown: false }} />
                <Stack.Screen name="KidProfile" component={KidProfile} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
