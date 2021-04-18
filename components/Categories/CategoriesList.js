import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, Keyboard } from "react-native"
import React, { useState } from 'react'
import { Searchbar, Title, Avatar, Card, Paragraph } from 'react-native-paper';


const data = [{
    id: 1,
    name: 'Category1',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    image: 'https://picsum.photos/100'
}, {
    id: 2,
    name: 'Category2',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    image: 'https://picsum.photos/200'
}, {
    id: 3,
    name: 'Category3',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    image: 'https://picsum.photos/300'
}, {
    id: 4,
    name: 'Category4',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    image: 'https://picsum.photos/400'
}, {
    id: 5,
    name: 'Category5',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    image: 'https://picsum.photos/500'
}, {
    id: 6,
    name: 'Category6',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    image: 'https://picsum.photos/600'
}, {
    id: 7,
    name: 'Category7',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    image: 'https://picsum.photos/700'
}, {
    id: 8,
    name: 'Category8',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    image: 'https://picsum.photos/800'
}]

const CategoriesList = (props) => {
    const [pincode, setPincode] = useState('')
    const [catData, setCatData] = useState([])

    const handlePincode = query => {
        if (query.length <= 6) {
            setPincode(query)
        }

        if (query.length == 6) {
            setCatData(data)
            Keyboard.dismiss()
        }
        if(query==''){
            setCatData([])
        }
    }
    return (
        <View style={page.container}>
            <Searchbar value={pincode} keyboardType={Platform.OS === 'android' ? "numeric" : "number-pad"} style={page.formFeild} onChangeText={handlePincode} placeholder="Search Pincode" />
            <ScrollView>
                <View style={page.cardsContainer}>
                    {
                        catData.map((d, i) => (
                            <TouchableOpacity
                                key={i}
                                style={page.card}
                                activeOpacity={0.9}
                                onPress={() => props.navigation.navigate('CategoryDetails', d)}
                            >
                                <Card style={{ elevation: 4 }} >
                                    <Card.Cover style={page.cardImage} source={{ uri: d.image }} />
                                    <Card.Content>
                                        <Title>{d.name}</Title>
                                        <Paragraph>{d.para}</Paragraph>
                                    </Card.Content>
                                </Card>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </ScrollView>
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
    formFeild: {
        margin: 10
    },
    button: {
        marginTop: 15,
        padding: 9
    },
    heading: {
        fontSize: 30,
        color: '#6C63FF',
        marginBottom: 20
    },
    cardsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: 'space-between',
        padding: 10,
    },
    card: {
        width: '45%',
        marginBottom: 15
    },
    cardImage: {
        height: 150
    }

});
export default CategoriesList