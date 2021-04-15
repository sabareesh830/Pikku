import { View, Text, StyleSheet } from "react-native"
import React from 'react'
import { Searchbar, Button, Title } from 'react-native-paper';

const Categories = () => {
    return (
        <View style={page.container}>
            <Searchbar placeholder="Search Pincode" />
        </View>
    )
}
const page = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        margin: 0,
        padding: 10,
        backgroundColor: 'white'
    },
    formFeild: {
        width: '80%'
    },
    button: {
        marginTop: 15,
        padding: 9
    },
    heading: {
        fontSize: 30,
        color: '#6C63FF',
        marginBottom: 20
    }


});
export default Categories