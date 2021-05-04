import { View, Text, StyleSheet, ScrollView } from "react-native"
import React, { useState } from 'react'
import { TextInput, Title, IconButton, Card, Paragraph, Button, Caption, Dialog, Portal, Divider } from 'react-native-paper';
import { add } from "react-native-reanimated";


const dropAddress = [{
    name: 'Home#1',
    address: 'A-12,Duggal Colony',
    mobile: '7383273865'
}]
const pickUpAddress = [{
    name: 'Shop#1',
    address: 'A-12,Duggal Colony',
    mobile: '7383273865'
}]
const PicknDrop = ({ route, navigation }) => {
    const { goBack } = navigation;
    const [visible, setVisible] = useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);
    const [dropAddressData, setDropAddressData] = useState(dropAddress)
    const [address, setAddress] = useState({
        name: '',
        address1: '',
        address2: '',
        pincode: '',
        state: '',
        mobile: ''
    })

    const handleInput = (key, value) => {
        let data = { ...address }
        data[key] = value
        setAddress(data)
    }
    return (
        <View style={page.container}>
            <View style={page.header}>
                <IconButton icon="keyboard-backspace" onPress={() => goBack()}></IconButton>
                <Title>Pick up & Drop</Title>

            </View>
            <View style={{ flex: 10 }}>
                <ScrollView style={page.cardsContainer}>
                    <Title style={{ paddingLeft: 10 }}>Drop Address</Title>
                    {
                        dropAddressData.map((d, i) => (
                            <Card key={i} style={page.card}>
                                <Card.Content>
                                    <Title>{d.name}</Title>
                                    <Caption><Text style={{ fontWeight: 'bold' }}>Address: </Text>
                                        {d.address}</Caption>
                                    <Paragraph>{d.mobile}</Paragraph>
                                </Card.Content>
                            </Card>
                        ))
                    }
                    <View style={{ padding: 10 }}>
                        {
                            !visible ?
                                <Button onPress={showDialog} icon="plus" mode='contained'>Add Address</Button> : null
                        }

                    </View>
                    <View>
                        {
                            visible ?
                                <Card style={page.card}>
                                    <View style={{ padding: 10 }}>
                                        <TextInput
                                            label="Home/Office/Give a Name"
                                            mode='outlined'
                                            value={address.name}
                                            onChangeText={text => handleInput('name', text)}
                                        />
                                        <TextInput
                                            label="Address1"
                                            mode='outlined'
                                            value={address.address1}
                                            onChangeText={text => handleInput('address1', text)}
                                        />
                                        <TextInput
                                            label="Address2"
                                            mode='outlined'
                                            value={address.address2}
                                            onChangeText={text => handleInput('address2', text)}
                                        />
                                        <TextInput
                                            label="Pincode"
                                            mode='outlined'
                                            keyboardType='numeric'
                                            value={address.pincode}
                                            onChangeText={text => handleInput('pincode', text)}
                                        />
                                        <TextInput
                                            label="State"
                                            mode='outlined'
                                            value={address.state}
                                            onChangeText={text => handleInput('state', text)}
                                        />
                                        <TextInput
                                            label="Contact Number"
                                            mode='outlined'
                                            value={address.mobile}
                                            keyboardType='numeric'
                                            onChangeText={text => handleInput('mobile', text)}
                                        />
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', padding: 10, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                                        <Button mode="contained" onPress={() => {
                                            let data = [...dropAddressData]
                                            data.push({
                                                name: address.name,
                                                address: address.address1+', '+address.address2+', '+address.state+', '+address.pincode,
                                                mobile: address.mobile
                                            })
                                            setDropAddressData(data)
                                            hideDialog()
                                        }}>Add</Button>
                                        <Button onPress={hideDialog}>Cancel</Button>
                                    </View>

                                </Card> : null
                        }
                    </View>

                    <Title style={{ paddingLeft: 10 }}>Pickup Address</Title>
                    {
                        dropAddress.map((d, i) => (
                            <Card key={i} style={page.card}>
                                <Card.Content>
                                    <Title>{d.name}</Title>
                                    <Caption><Text style={{ fontWeight: 'bold' }}>Address: </Text>
                                        {d.address}</Caption>
                                    <Paragraph>{d.mobile}</Paragraph>
                                </Card.Content>
                            </Card>
                        ))
                    }
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
    },
    cardsContainer: {
        flex: 1,
        padding: 5,
        textAlign: 'center'
    },
    card: {
        width: '97%',
        marginBottom: 15,
        elevation: 4,
        marginLeft: 5
    },
    content: {
        flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
    }


});

export default PicknDrop