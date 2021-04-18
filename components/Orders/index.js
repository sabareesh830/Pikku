import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Title, IconButton, Card, Paragraph, Chip, Button, Caption } from 'react-native-paper'

const data = [
    {
        id: 1,
        name: 'Order1',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        orderid: '7nsdf83nskms',
        status: 'Track'
    },
    {
        id: 2,
        name: 'Order2',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        orderid: '7nsdf83nskms',
        status: 'Cancelled'
    },
    {
        id: 3,
        name: 'Order3',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        orderid: '7nsdf83nskms',
        status: 'Delivered'
    },
    {
        id: 4,
        name: 'Order4',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        orderid: '7nsdf83nskms',
        status: 'Cancelled'
    },
    {
        id: 5,
        name: 'Order5',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        orderid: '7nsdf83nskms',
        status: 'Delivered'
    },
    {
        id: 6,
        name: 'Order6',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        orderid: '7nsdf83nskms',
        status: 'Delivered'
    }, {
        id: 7,
        name: 'Order7',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        orderid: '7nsdf83nskms',
        status: 'Cancelled'
    },
    {
        id: 8,
        name: 'Order8',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        orderid: '7nsdf83nskms',
        status: 'Delivered'
    }
]

const Orders = (props) => {
    console.log(props.navigation,"navi")
    const {  goBack } = props.navigation;
    // const params = state.params || {};
    return (
        <View style={page.container}>
            <View style={page.header}>
                <IconButton icon="keyboard-backspace" onPress={() => goBack()}></IconButton>
                <Title>My Orders</Title>
            </View>
            <View style={{ flex: 10 }}>
                <ScrollView style={page.cardsContainer}>
                    {
                        data.map((d, i) => (
                            <Card key={i} style={page.card}>
                                <Card.Content>
                                    <View style={page.content}>
                                        <Title>{d.name}</Title>
                                        {
                                            d.status == 'Track' ?
                                                <Chip onPress={()=>console.log('caleck')} selectedColor="white" style={{ backgroundColor: '#6C63FF', width: 110, alignItems: 'flex-start', justifyContent: 'center' }} icon="transit-connection-variant" mode="contained">{d.status}</Chip> :
                                                <Chip  icon={d.status == 'Cancelled' ? 'cancel' : 'check-all'} selectedColor="white" style={{ width: 110, alignItems: 'flex-start', justifyContent: 'center', color: 'white', backgroundColor: d.status == 'Cancelled' ? 'orange' : '#5DB75D' }} >{d.status}</Chip>
                                        }

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
        marginBottom:10
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
        flex: 1, flexDirection: 'row', justifyContent: 'space-between'
    }

});
export default Orders