import {
    StyleSheet,
    View,
    Text,
    Dimensions
} from 'react-native';
const windowHeight = Dimensions.get('window').height
import React, { useEffect } from 'react';
import SplashImage from '../../assets/images/splash.svg'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 4000)
    })
    return (
        <View style={page.container} >
            <Text style={page.logoColor}>PIKKU</Text>
            <SplashImage height={400} width={300} />
            <Text style={page.slogan}>Delivering Happiness</Text>
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
    logoColor: {
        color: '#6C63FF',
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Arial, Helvetica, sans-serif;'
    },
    slogan: {
        color: '#3F3D56',
        fontSize: 20,
    }

});

export default Splash