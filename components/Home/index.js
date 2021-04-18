import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Categories from '../Categories'
import Orders from '../Orders'
import Favourites from '../Favourites'
import Coupons from '../Coupons'

const Tab = createMaterialBottomTabNavigator();
const Home = ({ navigation }) => {
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
export default Home