import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Login, Welcome } from '../screens';
import { Colors } from '../components';

const Stack = createStackNavigator();

export function RootStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent'
                    },
                    headerTintColor: Colors.tertiary,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 20
                    }
                }}
                initialRouteName='Login'
            >
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen options={{ headerTintColor: Colors.darkLight }} name='Welcome' component={Welcome}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}