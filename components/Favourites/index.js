import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Title, IconButton, Card, Paragraph, Chip, Button, Caption } from 'react-native-paper'
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';

const data = [
    {
        id: 1,
        name: 'Favourite1',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        orderid: '7nsdf83nskms',
        status: 'Track'
    },
    {
        id: 2,
        name: 'Favourite2',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        orderid: '7nsdf83nskms',
        status: 'Cancelled'
    },
    {
        id: 3,
        name: 'Favourite3',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        orderid: '7nsdf83nskms',
        status: 'Delivered'
    },
    {
        id: 4,
        name: 'Favourite4',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        orderid: '7nsdf83nskms',
        status: 'Cancelled'
    },
    {
        id: 5,
        name: 'Favourite5',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        orderid: '7nsdf83nskms',
        status: 'Delivered'
    },
    {
        id: 6,
        name: 'Favourite6',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        orderid: '7nsdf83nskms',
        status: 'Delivered'
    }, {
        id: 7,
        name: 'Favourite7',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        orderid: '7nsdf83nskms',
        status: 'Cancelled'
    },
    {
        id: 8,
        name: 'Favourite8',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        orderid: '7nsdf83nskms',
        status: 'Delivered'
    }
]

const Favourites = (props) => {
    const { goBack } = props.navigation;
    return (
        <View style={page.container}>
            <View style={page.header}>
                <IconButton icon="keyboard-backspace" onPress={() => goBack()}></IconButton>
                <Title>My Favourite Store</Title>
            </View>
            <View style={{ flex: 10 }}>
                <ScrollView style={page.cardsContainer}>
                    {
                        data.map((d, i) => (
                            <Card key={i} style={page.card}>
                                <Card.Content>
                                    <View style={page.content}>
                                        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                            <Title>{d.name}
                                            </Title>
                                            <IconButton icon="phone" onPress={() => RNImmediatePhoneCall.immediatePhoneCall('0123456789')}></IconButton>
                                        </View>

                                        <Button icon="map-marker" mode="contained">Pick Up</Button>


                                    </View>
                                    <Caption><Text style={{ fontWeight: 'bold' }}>OrderID: </Text>
                                        {d.orderid}</Caption>
                                    <Paragraph>{d.des}</Paragraph>
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
        marginBottom: 10,
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
export default Favourites