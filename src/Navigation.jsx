import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './screens/Main';
import Login from './screens/Login';

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Main />
            {/* <Login/> */}
            {/* <Stack.Screen name="Main" component={Main} /> */}
            {/* <Stack.Screen name="Login" component={Login} /> */}
        </NavigationContainer>
    );
};





























































