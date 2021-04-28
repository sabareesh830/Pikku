import React from 'react'
import { ScrollView, Text, View, StyleSheet } from "react-native"
import { Title, IconButton, TextInput, Caption } from 'react-native-paper'

const Bussiness = () => {
    return (
        <View style={page.container}>
            <View style={page.header}>
                <IconButton icon="keyboard-backspace" onPress={() => goBack()}></IconButton>
                <Title>My Bussiness Details</Title>
            </View>
            <View style={{ flex: 10, padding: 15 }}>
                <ScrollView>
                    <TextInput mode="outlined" label="Name of Bussiness" placeholder="Enter Name of Bussiness" />
                    <TextInput mode="outlined" label="Category of Bussiness" placeholder="Enter Category of Bussiness" />
                    <TextInput mode="outlined" label="Address Line 1" placeholder="Enter Address Line 1" />
                    <TextInput mode="outlined" label="Address Line 2" placeholder="Enter Address Line 2" />
                    <TextInput mode="outlined" label="Locality" placeholder="Enter Locality" />
                    <TextInput mode="outlined" label="Pincode" placeholder="Enter Pincode" />
                    <TextInput mode="outlined" label="State" placeholder="Enter State" />
                    <TextInput mode="outlined" label="Contact Number" placeholder="Enter Contact Number" />
                    <Caption>Timing of Bussiness</Caption>
                </ScrollView>
            </View>
        </View>
    )
}
const page = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        margin: 0,
        backgroundColor: 'white'
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 1,
        marginBottom: 10,
    },


});
export default Bussiness