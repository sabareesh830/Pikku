import React, { useState } from 'react'
import { ScrollView, Text, View, StyleSheet } from "react-native"
import { Title, IconButton, TextInput, Caption, Button } from 'react-native-paper'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DocumentPicker from 'react-native-document-picker';

const Bussiness = ({navigation}) => {
    const { goBack } = navigation;
    const [bussinessData, setBussinessData] = useState({
        name: '',
        category: '',
        address1: '',
        address2: '',
        locality: '',
        pincode: '',
        state: '',
        phone: '',
        openingTime: '',
        breakTime: '',
        closeTime: ''
    })
    const [isOpenDatePickerVisible, setOpenDatePickerVisibility] = useState(false);
    const [isBreakDatePickerVisible, setBreakDatePickerVisibility] = useState(false);
    const [isCloseDatePickerVisible, setCloseDatePickerVisibility] = useState(false)

    const handleDocSelection=async()=>{
        try {
            const res = await DocumentPicker.pick({
              type: [DocumentPicker.types.images],
            });
            console.log(
              res.uri,
              res.type, // mime type
              res.name,
              res.size
            );
          } catch (err) {
              console.log(err,'err')
            if (DocumentPicker.isCancel(err)) {
              // User cancelled the picker, exit any dialogs or menus and move on
            } else {
              throw err;
            }
          }
    }

    const handleData = (field, value) => {
        let data = { ...bussinessData }
        data[field] = value
        setBussinessData(data)
    }
    return (
        <View style={page.container}>
            <View style={page.header}>
                <IconButton icon="keyboard-backspace" onPress={() => goBack()}></IconButton>
                <Title>My Bussiness Details</Title>
            </View>
            <View style={{ flex: 10 }}>
                <ScrollView style={{padding: 15}}>
                    <TextInput mode="outlined" value={bussinessData.name} onChange={(e) => handleData('name', e.target.value)} label="Name of Bussiness" placeholder="Enter Name of Bussiness" />
                    <TextInput mode="outlined" value={bussinessData.category} onChange={(e) => handleData('category', e.target.value)} label="Category of Bussiness" placeholder="Enter Category of Bussiness" />
                    <TextInput mode="outlined" value={bussinessData.address1} onChange={(e) => handleData('address1', e.target.value)} label="Address Line 1" placeholder="Enter Address Line 1" />
                    <TextInput mode="outlined" value={bussinessData.address2} onChange={(e) => handleData('address2', e.target.value)} label="Address Line 2" placeholder="Enter Address Line 2" />
                    <TextInput mode="outlined" value={bussinessData.locality} onChange={(e) => handleData('locality', e.target.value)} label="Locality" placeholder="Enter Locality" />
                    <TextInput mode="outlined" value={bussinessData.pincode} onChange={(e) => handleData('pincode', e.target.value)} label="Pincode" placeholder="Enter Pincode" />
                    <TextInput mode="outlined" value={bussinessData.state} onChange={(e) => handleData('state', e.target.value)} label="State" placeholder="Enter State" />
                    <TextInput mode="outlined" value={bussinessData.phone} onChange={(e) => handleData('phone', e.target.value)} label="Contact Number" placeholder="Enter Contact Number" />
                    <Caption>Timing of Bussiness</Caption>
                    <Button uppercase={false}  icon="clock"  style={page.picker} mode="outlined" onPress={() => { console.log(isOpenDatePickerVisible); setOpenDatePickerVisibility(true) }}>{bussinessData.openingTime == '' ? 'Opening Time' : `Opening Time - ${bussinessData.openingTime}`} </Button>
                    <Button uppercase={false} icon="clock" style={page.picker} mode="outlined" onPress={() => setBreakDatePickerVisibility(true)}>{bussinessData.breakTime == '' ? 'Break Time' : `Break Time - ${bussinessData.breakTime}`}</Button>
                    <Button uppercase={false} icon="clock" style={page.picker} mode="outlined" onPress={() => setCloseDatePickerVisibility(true)}>{bussinessData.closeTime == '' ? 'Close Time' : `Close Time - ${bussinessData.closeTime}`}</Button>
                    <Button uppercase={false} icon="clock" style={page.picker} mode="outlined" onPress={handleDocSelection}>Upload Payment QR Code</Button>

                    <DateTimePickerModal
                        isVisible={isOpenDatePickerVisible}
                        mode="time"
                        onConfirm={(d) => {
                            let date = new Date(d)
                            date = `${date.getHours()}:${date.getMinutes()}`
                            handleData('openingTime', date)
                            setOpenDatePickerVisibility(false)
                        }}
                        onCancel={() => setOpenDatePickerVisibility(false)}
                    />
                    <DateTimePickerModal
                        isVisible={isBreakDatePickerVisible}
                        mode="time"
                        onConfirm={(d) => {
                            let date = new Date(d)
                            date = `${date.getHours()}:${date.getMinutes()}`
                            handleData('breakTime', date)
                            setBreakDatePickerVisibility(false)
                        }}
                        onCancel={() => setBreakDatePickerVisibility(false)}
                    />
                    <DateTimePickerModal
                        isVisible={isCloseDatePickerVisible}
                        mode="time"
                        onConfirm={(d) => {
                            let date = new Date(d)
                            date = `${date.getHours()}:${date.getMinutes()}`
                            handleData('closeTime', date)
                            setCloseDatePickerVisibility(false)
                        }}
                        onCancel={() => setCloseDatePickerVisibility(false)}
                    />

                    <Button style={{marginTop:20,marginBottom:30}} icon="plus" mode="contained">Add Bussiness</Button>

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
    picker: {
        marginBottom: 10,
        padding:5
    }


});
export default Bussiness