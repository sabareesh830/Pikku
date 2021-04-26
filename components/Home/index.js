import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Categories from '../Categories'
import Orders from '../Orders'
import Favourites from '../Favourites'
import Coupons from '../Coupons'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, Button, Text } from 'react-native'

const Tab = createMaterialBottomTabNavigator();
function HomeScreen({ navigation }) {
    return (
        <Tab.Navigator
            shifting={false}
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
                    return <Icon name={iconName} size={20} color={color} />;
                },
            })}
            barStyle={{ backgroundColor: '#6C63FF' }}
            initialRouteName="Categories">
            <Tab.Screen name="Categories" component={Categories} listeners={{
                tabPress: () => {
                    console.log('called')
                    navigation.navigate('CategoriesList')
                }
            }} />
            <Tab.Screen name="Orders" component={Orders} />
            <Tab.Screen name="Favourite" component={Favourites} />
            <Tab.Screen name="Coupons" component={Coupons} />
        </Tab.Navigator>
    );
}

const Profile = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                Profile
        </Text>
        </View>
    )
}

const Bussiness = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                Bussiness
        </Text>
        </View>
    )
}

const Subscription = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                Subscription
        </Text>
        </View>
    )
}

const HelpnSupport = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                Help and Support
        </Text>
        </View>
    )
}

const Drawer = createDrawerNavigator();
const Home = ({ navigation }) => {
    return (

        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="My Profile" component={Profile} />
            <Drawer.Screen name="Add Business" component={Bussiness} />
            <Drawer.Screen name="My Subscription" component={Subscription} />
            <Drawer.Screen name="Help & Support" component={HelpnSupport} />
        </Drawer.Navigator>
    );
}
export default Home