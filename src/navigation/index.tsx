import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppNavigator from './AppNavigator';

type RootStackParamList = {
    App: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false}}>
                <Stack.Screen name="App" component={AppNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
