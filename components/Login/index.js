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
import LoginIcon from '../../assets/images/login.svg'
import { TextInput, Caption, Button, Title } from 'react-native-paper';
import { useHistory } from 'react-router-native'

const Login = () => {
    const history = useHistory()
    const [mobileNumber, setMobileNumber] = useState(null)
    function handleInput(e) {
        if (e.length <= 10) {
            setMobileNumber(e)
        }
        if (e.length == 10) {
            Keyboard.dismiss()
        }
    }
    return (
        <View style={page.container}>
            <Title style={page.heading} >Sign In</Title>
            <LoginIcon height={350} width={300} />
            <View style={page.formFeild}>
                <TextInput keyboardType={Platform.OS === 'android' ? "numeric" : "number-pad"} mode="outlined" onChangeText={e => handleInput(e)} value={mobileNumber} placeholder="Enter Mobile Number" />
                <Button disabled={mobileNumber == null || mobileNumber.length !== 10} style={page.button} mode="contained" onPress={() => history.push('/otp')}>
                    Send OTP
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
export default Login