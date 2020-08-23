import React, { useEffect, useState } from 'react'
import { Image, FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Dimensions, SafeAreaView } from 'react-native'
import { Icon, Card } from 'react-native-elements'
import styles from './styles';
import { firebase } from '../../firebase/config'

export default function HomeScreen(props) {

    const screenWidth = Dimensions.get("window").width;
    const user = props.extraData
    const signOut = () => {
        props.onPress()
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../../assets/icon.png')}
            />
            <Card
                title='MY POCKET'>
                <Text style={{marginBottom: 10}}>
                ....................Bienvenido a MY POCKET APP....................
                </Text>
                <Card
                title='DATOS PERSONALES'>
                <Text style={{marginBottom: 10}}>
                     Nombre: {user.fullName}
                </Text>
                <Text style={{marginBottom: 10}}>
                     Correo: {user.email}
                </Text>
            </Card>
            </Card>
            
            <View style={styles.formContainer}>
                <TouchableOpacity style={{
                    height: 50,
                    borderRadius: 10,
                    backgroundColor: 'red',
                    width: screenWidth-50,
                    alignItems: "center",
                    justifyContent: 'center'
                    }}onPress={()=>{signOut(true);}}>
                    <Text style={styles.buttonTextAdd}>Cerrar Sesion</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
