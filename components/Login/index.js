import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Platform,
    Keyboard
} from 'react-native';
const windowHeight = Dimensions.get('window').height
import LoginIcon from '../../assets/images/login.svg'
import { TextInput, Button, Title } from 'react-native-paper';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';

const Login = ({ navigation }) => {
    const [mobileNumber, setMobileNumber] = useState(null)
    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['google'], // what API you want to access on behalf of the user, default is email and profile
            webClientId:
                '206130418404-b6j2rlom5f7nongrbckcocm4n2dig7jv.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        });
    }, []);
    function handleInput(e) {
        if (e.length <= 10) {
            setMobileNumber(e)
        }
        if (e.length == 10) {
            Keyboard.dismiss()
        }
    }

    const signIn = async () => {
        try {
            console.log('called')
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo, "userInfo")
        } catch (error) {
            navigation.navigate('Home')
            console.log(error,"eroor")
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };
    return (
        <View style={page.container}>
            <Title style={page.heading} >Sign In</Title>
            <LoginIcon height={350} width={300} />
            <View style={page.formFeild}>
                {/* <TextInput keyboardType={Platform.OS === 'android' ? "numeric" : "number-pad"} mode="outlined" onChangeText={e => handleInput(e)} value={mobileNumber} placeholder="Enter Mobile Number" />
                <Button disabled={mobileNumber == null || mobileNumber.length !== 10} style={page.button} mode="contained" onPress={() => navigation.navigate('OTP')}>
                    Send OTP
                </Button> */}
                <GoogleSigninButton
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={signIn}
                />
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