import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { Title, IconButton, Card, Paragraph, Chip, Button, Caption } from 'react-native-paper';
import StarRating from 'react-native-star-rating';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';

const data = [{
    id: 1,
    name: 'Shop1',
    address: 'Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016',
    rating: 4
}, {
    id: 2,
    name: 'Shop2',
    address: 'Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016',
    rating: 3
},{
    id: 3,
    name: 'Shop3',
    address: 'Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016',
    rating: 5
}, {
    id: 4,
    name: 'Shop4',
    address: 'Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016',
    rating: 3
},{
    id: 5,
    name: 'Shop5',
    address: 'Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016',
    rating: 5
}, {
    id: 6,
    name: 'Shop6',
    address: 'Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016',
    rating: 3
},{
    id: 7,
    name: 'Shop7',
    address: 'Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016',
    rating: 1
}, {
    id: 8,
    name: 'Shop8',
    address: 'Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016',
    rating: 3
}]

const CategoryDetails = ({ route, navigation }) => {
    let catData = route.params
    const { goBack } = navigation;
    return (
        <View style={page.container}>
            <View style={page.header}>
                <IconButton icon="keyboard-backspace" onPress={() => goBack()}></IconButton>
                <Title>{catData.name}</Title>
            </View>
            <View style={{ flex: 10 }}>
                <ScrollView style={page.cardsContainer}>
                <Title style={{padding:10}}>NearBy Store</Title>
                    {
                        data.map((d, i) => (
                            <Card key={i} style={page.card}>
                                <Card.Content>
                                    <View style={page.content}>
                                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                            <Title>{d.name}
                                            </Title>
                                            <IconButton icon="phone" onPress={() => RNImmediatePhoneCall.immediatePhoneCall('0123456789')}></IconButton>
                                        </View>
                                        <Button icon="map-marker" mode="contained">Pick Up</Button>
                                    </View>
                                    <Caption><Text style={{ fontWeight: 'bold' }}>Address: </Text>
                                        {d.address}</Caption>
                                    <View style={{ width: '30%', marginTop: 5 }}>
                                        <StarRating
                                            starSize={15}
                                            disabled={true}
                                            maxStars={5}
                                            rating={d.rating}
                                            fullStarColor={'red'}
                                        />
                                    </View>

                                </Card.Content>
                                <Card.Actions style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'row' }}>
                                    <Button style={{ backgroundColor: '#5DB75D' }} icon="heart" mode="contained">Add to Favourite</Button>
                                </Card.Actions>
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
export default CategoryDetails