import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Categories from '../Categories'


function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}
const Tab = createMaterialBottomTabNavigator();
const Home = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName

                    if (route.name === 'Orders') {
                        iconName = focused ? 'shopping-cart' : 'shopping-cart';
                    } else if (route.name == 'Coupons') {
                        iconName = focused ? 'qrcode' : 'qrcode'
                    } else if (route.name == 'Categories') {
                        iconName = focused ? 'shopping-bag' : 'shopping-bag'
                    } else if (route.name == 'Favourite') {
                        iconName = focused ? 'heart' : 'heart'
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={20} color={color} />;
                },
                headerShown: true
            })}
            barStyle={{ backgroundColor: '#6C63FF' }}
            initialRouteName="Categories">
            <Tab.Screen name="Categories" component={Categories} />
            <Tab.Screen name="Orders" component={SettingsScreen} />
            <Tab.Screen name="Favourite" component={SettingsScreen} />
            <Tab.Screen name="Coupons" component={SettingsScreen} />
        </Tab.Navigator>
    );
}
export default Home