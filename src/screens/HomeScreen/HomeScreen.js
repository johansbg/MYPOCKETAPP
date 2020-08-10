import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Dimensions, SafeAreaView } from 'react-native'
import { Icon, Card } from 'react-native-elements'
import {LineChart} from "react-native-chart-kit";
import styles from './styles';
import { firebase } from '../../firebase/config'

export default function HomeScreen(props) {

    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])

    const entityRef = firebase.firestore().collection('entities')
    const userID = props.extraData.id
    useEffect(() => {
        entityRef
            .where('authorID', '==', userID)
            .orderBy('createdAt', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const newEntities = []
                    querySnapshot.forEach(doc => {
                        const entity = doc.data()
                        entity.id = doc.id
                        newEntities.push(entity)
                    });
                    setEntities(newEntities)
                },
                error => {
                    console.log(error)
                }
            )
    }, [])

    const signOut = () => {
        props.onPress()
    } 

    const onAddButtonPress = () => {
        if (entityText && entityText.length > 0) {
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                text: entityText,
                authorID: userID,
                createdAt: timestamp,
            };
            entityRef
                .add(data)
                .then(_doc => {
                    setEntityText('')
                    Keyboard.dismiss()
                })
                .catch((error) => {
                    alert(error)
                });
        }else{
            alert("Debes llenar el campo") 
        }
    }

    const renderEntity = ({item, index}) => {
        return (
            <View style={styles.entityContainer}>
                <Icon name='rowing' />
                <Text style={styles.entityText}>
                    {item.text} 
                </Text>
                <Text style={styles.entityText}>
                    $300.000 
                </Text>
                <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
                    <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const screenWidth = Dimensions.get("window").width;

    const data = {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",],
        datasets: [
          {
            data: [2000000, 400000, 20000, 800000, 300000, 444477, 1255665, 1212124, 78795, 7887, 9557, 454545],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 3 // optional
          }
        ]
    };

    const chartConfig = {
        backgroundColor: '#FFF',
        backgroundGradientFrom: '#FFF',
        backgroundGradientTo: '#FFF',
        decimalPlaces: 0,
        strokeWidth: 2, // optional, default 3
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: { borderRadius: 16, },
        propsForDots: { r: '6', strokeWidth: '2', stroke: '#788eec', },
        propsForLabels: { fontSize: 9, fontWeight: 'bold',}
    };
    //Decidir entre scrollView o list
    return (
        <SafeAreaView >
            <Card containerStyle={{padding: 0}}>
                <View style={styles.chartContainer}>
                    <Text style={styles.chartTitleText}>
                        INGRESOS TOTALES = $100
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
                        <Text style={styles.buttonText}>Meses/2020</Text>
                    </TouchableOpacity>
                </View>
                <LineChart
                    data={data}
                    width={screenWidth-50}
                    height={200}
                    yAxisLabel={'$'}
                    chartConfig={chartConfig}
                    bezier
                    />
            </Card>
            <View style={styles.formContainer}>
                <TouchableOpacity style={{
                    height: 50,
                    borderRadius: 10,
                    backgroundColor: '#788eec',
                    width: screenWidth-50,
                    alignItems: "center",
                    justifyContent: 'center'
                }}onPress={onAddButtonPress}>
                    <Text style={styles.buttonTextAdd}>Agregar Nuevo Ingreso</Text>
                </TouchableOpacity>
            </View>
            { entities && (
                <Card containerStyle={{padding: 0}}>
                    <Text style={styles.titleText}>
                        INGRESOS
                    </Text>
                    <FlatList
                        data={entities}
                        renderItem={renderEntity}
                        keyExtractor={(item) => item.id}
                        removeClippedSubviews={true}
                    />
                </Card>
            )}
        </SafeAreaView>
    )
}
