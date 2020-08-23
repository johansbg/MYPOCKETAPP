import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import { Icon, Card, Button } from 'react-native-elements'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { ProgressBar, Colors } from 'react-native-paper';

export default function HomeScreen(props) {

    const screenWidth = Dimensions.get("window").width;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.formContainer}>
                    <TouchableOpacity style={{
                        height: 50,
                        borderRadius: 10,
                        backgroundColor: '#788eec',
                        width: screenWidth-50,
                        alignItems: "center",
                        justifyContent: 'center'
                        }}onPress={()=>{setModalVisible(true);}}>
                        <Text style={styles.buttonTextAdd}>Agregar Nuevo Plan</Text>
                    </TouchableOpacity>
                </View>
                <Card
                    title='HELLO WORLD'
                    imageStyle = {
                        {
                            marginLeft:120,
                            width:100,
                        }}
                    image={require('../../../assets/icon.png')}>
                    <Text style={{marginBottom: 10}}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Text style={{marginBottom: 10}}>
                        Progreso: 10%
                    </Text>
                    <ProgressBar style={{height: 20}} progress={0.1} color={Colors.red800} />
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        buttonStyle={{borderRadius: 0, marginTop:5}}
                        title='VIEW NOW' />
                </Card>
                <Card
                    title='HELLO WORLD'
                    imageStyle = {
                        {
                            marginLeft:120,
                            width:100,
                        }}
                    image={require('../../../assets/icon.png')}>
                    <Text style={{marginBottom: 10}}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Text style={{marginBottom: 10}}>
                        Progreso: 10%
                    </Text>
                    <ProgressBar style={{height: 20}} progress={0.1} color={Colors.red800} />
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        buttonStyle={{borderRadius: 0, marginTop:5}}
                        title='VIEW NOW' />
                </Card>
                <Card
                    title='HELLO WORLD'
                    imageStyle = {
                        {
                            marginLeft:120,
                            width:100,
                        }}
                    image={require('../../../assets/icon.png')}>
                    <Text style={{marginBottom: 10}}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Text style={{marginBottom: 10}}>
                        Progreso: 10%
                    </Text>
                    <ProgressBar style={{height: 20}} progress={0.1} color={Colors.red800} />
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        buttonStyle={{borderRadius: 0, marginTop:5}}
                        title='VIEW NOW' />
                </Card>
                <Card
                    title='HELLO WORLD'
                    imageStyle = {
                        {
                            marginLeft:120,
                            width:100,
                        }}
                    image={require('../../../assets/icon.png')}>
                    <Text style={{marginBottom: 10}}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Text style={{marginBottom: 10}}>
                        Progreso: 10%
                    </Text>
                    <ProgressBar style={{height: 20}} progress={0.1} color={Colors.red800} />
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        buttonStyle={{borderRadius: 0, marginTop:5}}
                        title='VIEW NOW' />
                </Card>
                <Card
                    title='HELLO WORLD'
                    imageStyle = {
                        {
                            marginLeft:120,
                            width:100,
                        }}
                    image={require('../../../assets/icon.png')}>
                    <Text style={{marginBottom: 10}}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Text style={{marginBottom: 10}}>
                        Progreso: 10%
                    </Text>
                    <ProgressBar style={{height: 20}} progress={0.1} color={Colors.red800} />
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        buttonStyle={{borderRadius: 0, marginTop:5}}
                        title='VIEW NOW' />
                </Card>
            </ScrollView>
        </SafeAreaView>
    )
}
