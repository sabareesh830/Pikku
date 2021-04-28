import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesList from './CategoriesList'
import CategoryDetails from './CategoryDetails'
import Notifications from '../Notifications'

const Categories = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} initialRouteName="CategoriesList">
            <Stack.Screen name="CategoriesList" component={CategoriesList} />
            <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
            <Stack.Screen name="Notifications" component={Notifications} />
        </Stack.Navigator>
    )
}

export default Categories