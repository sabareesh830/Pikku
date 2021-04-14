import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Platform,
    Keyboard
} from 'react-native';
const windowHeight = Dimensions.get('window').height
import ConfirmIcon from '../../assets/images/confirm.svg'
import { TextInput, Caption, Button, Title } from 'react-native-paper';
import { useHistory } from 'react-router-native'
import Icon from 'react-native-vector-icons/FontAwesome';


const OTP = () => {
    const history = useHistory()
    const [mobileNumber, setMobileNumber] = useState('8309890570')
    const [otp, setoTp] = useState(null)


    function handleOTP(e) {
        if (e.length <= 4) {
            setoTp(e)
        }
        if (e.length == 4) {
            Keyboard.dismiss()
        }
    }
    return (
        <View style={page.container}>
           
            <ConfirmIcon height={300} width={300} />
            <View style={page.formFeild}>
                <TextInput disabled="true" keyboardType={Platform.OS === 'android' ? "numeric" : "number-pad"} mode="outlined" value={mobileNumber} placeholder="Enter Mobile Number" />
                <TextInput keyboardType={Platform.OS === 'android' ? "numeric" : "number-pad"} mode="outlined" onChangeText={e => handleOTP(e)} value={otp} placeholder="Enter OTP" />
                <Button disabled={otp == null || otp.length !== 4} style={page.button} mode="contained" onPress={() => history.push('/home')}>
                    Sign in
                </Button>
            </View>

        </View>
    )
}
const page = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: windowHeight - 40,
        margin: 0,
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
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
export default OTP