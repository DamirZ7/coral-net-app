import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Modal, FlatList, SafeAreaView } from 'react-native';
import calculateAuctions from '../Data/calculateAuctions';
import { FontAwesome } from '@expo/vector-icons';


const carTypesData = [
    {
        id: 1,
        title: 'Целый автомобиль'
    },
    {
        id: 2,
        title: 'Распил легковой'
    },
    {
        id: 3,
        title: 'Распил рамный'
    },
    {
        id: 4,
        title: 'Конструктор легковой'
    },
    {
        id: 5,
        title: 'Конструктор джип, микроавтобус'
    },
    {
        id: 6,
        title: 'Запчасти на палете'
    }
]

const fuelTypesData = [
    {
        id: 1,
        title: 'Бензин (гибрид включительно)'
    },
    {
        id: 2,
        title: 'Дизельное топливо'
    },
    {
        id: 3,
        title: 'Электричество'
    }
]

const carOld = [
    {
        id: 1,
        title: 'Меньше 3 лет'
    },
    {
        id: 2,
        title: 'От 3 до 5 лет'
    },
    {
        id: 3,
        title: 'От 5 до 7 лет'
    },
    {
        id: 4,
        title: 'Больше 7 лет'
    }
]

export default function calculateScreen({ navigation, route }) {

    const [selectedType, setSelectedType] = useState(1)
    const [selectedFuel, setSelectedFuel] = useState(1)
    const [selectedOld, setSelectedOld] = useState(2)
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedAuc, setSelectedAuc] = useState(1)
    const [inputVal, setInputVal] = useState(calculateAuctions[0].title)
    const [aucPrice, setAucPrice] = useState(0)
    const [horsePower, setHorsePower] = useState(240)
    const [motorV, setMotorV] = useState(0)

    const renderCarTypesData = ({ item }) => {
        return (
            <TouchableOpacity style={styles.checkList} onPress={() => {
                setSelectedType(item.id)
            }}>
                <FontAwesome name={item.id === selectedType ? "check-circle-o" : "circle-o"} size={20} color="#168dd0" />
                <Text style={styles.checkListText}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    const renderFuelTypesData = ({ item }) => {
        return (
            <TouchableOpacity style={styles.checkList} onPress={() => {
                setSelectedFuel(item.id)
                
            }}>
                <FontAwesome name={item.id === selectedFuel ? "check-circle-o" : "circle-o"} size={20} color="#168dd0" />
                <Text style={styles.checkListText}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    const renderCarOld = ({ item }) => {
        return (
            <TouchableOpacity style={styles.checkList} onPress={() => {
                setSelectedOld(item.id)
            }}>
                <FontAwesome name={item.id === selectedOld ? "check-circle-o" : "circle-o"} size={20} color="#168dd0" />
                <Text style={styles.checkListText}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    const renderAuc = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => {
                setSelectedAuc(item.id)
                setInputVal(item.title)
            }}>
                <View style={styles.flatItems}>
                    <FontAwesome name={item.id === selectedAuc ? "check-circle-o" : "circle-o"} size={20} color="#168dd0" />
                    <Text style={{marginLeft: 20}}>{item.title}</Text>
                </View>

            </TouchableOpacity>
        )
    }

    return (
        
        <ScrollView style={{ backgroundColor: '#fff' }}>

            <View style={styles.aucPrice}>
                <Text style={styles.text}>
                    Цена на аукционе, ¥
                </Text>
                <TextInput placeholder='Введите цену' style={styles.textInput} keyboardType='numeric' maxLength={8} onChangeText={(text) => {setAucPrice(text)}}/>
            </View>

            <View style={styles.aucPrice}>
                <Text style={styles.text}>
                    Аукцион
                </Text>
                <TextInput placeholder='Выберите аукцион' style={styles.textInput} onFocus={() => { setModalVisible(true) }} value={inputVal} />
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(false);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={{paddingBottom: 10}}>
                                Выберите аукцион и нажмите Ok
                            </Text>
                            <FlatList
                                data={calculateAuctions}
                                horizontal={false}
                                renderItem={renderAuc}
                                keyExtractor={(item) => item.id.toString()}
                            />

                            <View style={styles.modalBtn}>
                               

                                <TouchableOpacity onPress={() => {
                    
                    setModalVisible(false)
                  }}>
                    <Text>Ok</Text>
                  </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </Modal>

            </View>

            <View style={styles.carType}>
                <Text style={styles.text}>
                    Тип услуги
                </Text>
                <View style={styles.checkListContainer}>
                    <FlatList
                        data={carTypesData}
                        horizontal={false}
                        renderItem={renderCarTypesData}
                        keyExtractor={(item) => item.id.toString()}

                    />
                </View>
            </View>

            <View style={styles.carType}>
                <Text style={styles.text}>
                    Тип топлива
                </Text>
                <View style={styles.checkListContainer}>
                    <FlatList
                        data={fuelTypesData}
                        horizontal={false}
                        renderItem={renderFuelTypesData}
                        keyExtractor={(item) => item.id.toString()}

                    />
                </View>
            </View>

            <View style={styles.aucPrice}>
                <Text style={styles.text}>
                    Обьем двигателя,{'\n'}см.куб
                </Text>
                <TextInput placeholder='Введите обьем' style={styles.textInput} keyboardType='numeric' maxLength={4} onChangeText={(text) => {setMotorV(text)}}/>
            </View>

            <View style={styles.aucPrice}>
                <Text style={styles.text}>
                    Мощность в л.с.
                </Text>
                <TextInput placeholder='Введите мощность' style={styles.textInput} keyboardType='numeric' maxLength={3} defaultValue={horsePower.toString()} onChangeText={(text) => {setHorsePower(text)}}/>
            </View>

            <View style={styles.carType}>
                <Text style={styles.text}>
                    Возраст автомобиля
                </Text>
                <View style={styles.checkListContainer}>
                    <FlatList
                        data={carOld}
                        //horizontal={false}
                        renderItem={renderCarOld}
                        keyExtractor={(item) => item.id.toString()}

                    />
                </View>
            </View>

            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.searchBtn} onPress={() => {
                    navigation.navigate('calcResultScreen', {
                        carPrice: aucPrice,
                        auction: calculateAuctions[selectedAuc - 1].title,
                        carType: selectedType,
                        fuelType: selectedFuel,
                        horsePower: horsePower,
                        carOld: selectedOld,
                        motorV: motorV
                    })
                }}>
                    <Text style={{ color: 'white', fontSize: 16 }}>
                        Рассчитать
                    </Text>
                </TouchableOpacity>

            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    aucPrice: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 15
    },
    carType: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 20
    },
    textInput: {
        width: '50%',
        //height: '100%',
        borderWidth: 1,
        borderColor: 'grey',
        paddingLeft: 10,
        borderRadius: 4
    },
    text: {
        fontSize: 16,
        //    color: '#168dd0',

    },
    checkListContainer: {
        width: '50%',
        justifyContent: 'center',


    },
    checkList: {
        flexDirection: 'row',
        paddingBottom: 15,
        alignItems: 'center'

    },
    checkListText: {
        paddingLeft: 10,
    },
    btnContainer: {
        alignItems: 'center',
        marginTop: 20,
        paddingBottom: 20
    },
    searchBtn: {
        backgroundColor: '#168dd0',
        width: '60%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 7
    },
    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalView: {
        height: '80%',
        width: '80%',
        marginTop: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 25,
        alignItems: 'flex-start',
        elevation: 5,
        opacity: 0.95,

    },
    modalBtn: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        width: '100%',

    },
    flatItems: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
        paddingRight: '25%',
        
    },
})