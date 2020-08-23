import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, TouchableHighlight, View, Dimensions, SafeAreaView, Modal, Picker } from 'react-native'
import { Icon, Card } from 'react-native-elements'
import {LineChart} from "react-native-chart-kit";
import styles from './styles';
import { firebase } from '../../firebase/config';
import DatePicker from 'react-native-datepicker';

export default function IngresosScreen(props) {
    const [selectedValue, setSelectedValue] = useState("Primer Icono");
    const [selectedValue1, setSelectedValue1] = useState("2020");
    const [date, setDateValue] = useState("2020-08-23");
    const [modalVisible, setModalVisible] = useState(false);
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
                <TouchableOpacity style={{ ...styles.openButton, backgroundColor: "red" }} onPress={onAddButtonPress}>
                <Icon
                    name='ios-trash'
                    type='ionicon'
                />
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
                    <View>
                        <Picker
                            selectedValue={selectedValue1}
                            style={ {height: 50, width: 100}}

                            onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}
                        >
                            <Picker.Item label="2020" value="2020" />
                            <Picker.Item label="2021" value="2021" />
                        </Picker>
                    </View>
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
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Nombre del Ingreso</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Nombre'
                                placeholderTextColor="#aaaaaa"
                                /*onChangeText={(text) => setFullName(text)}*/
                                /*value={fullName}*/
                                underlineColorAndroid="transparent"
                                autoCapitalize="none"
                            />
                            <Text style={styles.modalText}>Cantidad</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='$'
                                placeholderTextColor="#aaaaaa"
                                /*onChangeText={(text) => setFullName(text)}*/
                                /*value={fullName}*/
                                underlineColorAndroid="transparent"
                                autoCapitalize="none"
                            />
                            <Text style={styles.modalText}>Fecha de pago</Text>
                            <DatePicker
                                style={styles.date}
                                date={date}
                                mode="date"
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                                // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(date) => setDateValue(date)}
                            />
                            <Text style={styles.modalText}>Selecciona un Icono</Text>
                            <Picker
                                selectedValue={selectedValue}
                                style={{ height: 50, width: 200}}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="Casa" value="Home" />
                                <Picker.Item label="Playa" value="Beach" />
                            </Picker>
                            <View style={styles.entityContainerModal}>
                                <TouchableHighlight
                                    style={{ ...styles.openButton, backgroundColor: "red" }}
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}
                                    >
                                    <Text style={styles.textStyle}>Cancelar</Text>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    style={{ ...styles.openButton, backgroundColor: "#788eec" }}
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}
                                    >
                                    <Text style={styles.textStyle}>Guardar</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity style={{
                    height: 50,
                    borderRadius: 10,
                    backgroundColor: '#788eec',
                    width: screenWidth-50,
                    alignItems: "center",
                    justifyContent: 'center'
                    }}onPress={()=>{setModalVisible(true);}}>
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
