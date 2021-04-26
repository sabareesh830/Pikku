import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Title, IconButton, Card, Paragraph, Chip, Button, Caption, Subheading } from 'react-native-paper'

const data = [
    {
        id: 1,
        name: 'Free Trail',
        // coupon: 'FLAT20%OFF',
        valid: '15 Days'
    },
    {
        id: 1,
        name: 'Coupon1',
        coupon: 'FLAT20%OFF',
        valid: '10 Days'
    },
    {
        id: 2,
        name: 'Coupon2',
        coupon: 'SUPER100',
        valid: '1 Month'
    },
    {
        id: 3,
        name: 'Coupon3',
        coupon: 'FLAT500OFF',
        valid: '6 Months'
    },
    {
        id: 4,
        name: 'Coupon4',
        coupon: 'FLAT400OFF',
        valid: '1 Year'
    },
 
]

const Coupons = (props) => {
    const { goBack } = props.navigation;
    return (
        <View style={page.container}>
            <View style={page.header}>
                <IconButton icon="keyboard-backspace" onPress={() => goBack()}></IconButton>
                <Title>My Coupons</Title>
            </View>
            <View style={{ flex: 10 }}>
                <ScrollView style={page.cardsContainer}>
                    <Subheading>My Subscription</Subheading>
                    {
                        data.map((d, i) => (
                            <Card key={i} style={page.card}>
                                <Card.Content>
                                    <View style={page.content}>
                                        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                            <Title>{d.name}
                                            </Title>
                                            {
                                                d.coupon?
                                                <Chip style={{marginLeft:10}}>{d.coupon}</Chip>:null
                                            }
                                           
                                        </View>
                                        {
                                            d.coupon? <Button icon="cart" mode="contained">Buy</Button>:null
                                        }
                                       
                                    </View>
                                   
                                    <Caption><Text style={{ fontWeight: 'bold' }}>Valid: </Text>
                                        {d.valid}</Caption>
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
export default Coupons