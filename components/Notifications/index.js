import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Title, IconButton, Card, Paragraph, Chip, Button, Caption, Dialog, Portal } from 'react-native-paper'
import { back } from 'react-native/Libraries/Animated/Easing'

const data = [
    {
        id: 1,
        name: 'Manish Kumar',
        address: 'A-12,Duggal Colony',
        phone: '8739383838',
        status: 'pending'
    },
    {
        id: 2,
        name: 'Sabareesh Kumar',
        address: 'B-12,NGEOS Colony',
        phone: '973293729',
        status: 'pending'
    },

]

const Notifications = (props) => {
    const { goBack } = props.navigation;
    const [visible, setVisible] = useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);
    return (
        <View style={page.container}>
            <View style={page.header}>
                <IconButton icon="keyboard-backspace" onPress={() => goBack()}></IconButton>
                <Title>Notifications</Title>
            </View>
            <View style={{ flex: 10 }}>
                <ScrollView style={page.cardsContainer}>
                    {
                        data.map((n, i) => (
                            <Card key={i} style={page.card}>
                                <Card.Content>

                                    <Paragraph>
                                        Order Received from {n.name}
                                    </Paragraph>
                                    <Caption><Text style={{ fontWeight: 'bold' }}>Address: </Text>{n.address}, {n.phone}</Caption>

                                    <Button onPress={showDialog} style={{ marginTop: 10 }} mode="contained">Bill Amount</Button>
                                </Card.Content>
                            </Card>
                        ))
                    }
                </ScrollView>
            </View>
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>

                    <Dialog.Content>
                        <Chip style={page.center}> 1000 </Chip>
                        <Chip style={page.center}>Collect Amount</Chip>
                    </Dialog.Content>
                    <Dialog.Actions style={page.center}>
                        <Button style={{marginRight:10,width:80}} mode="contained" onPress={hideDialog}>Yes</Button>
                        <Button style={{backgroundColor:'orange',width:80}}   mode="contained" onPress={hideDialog}>No</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
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
    },
    center:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10
    },
    

});
export default Notifications