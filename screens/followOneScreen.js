import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, Text, Image, ScrollView, ActivityIndicator, FlatList } from 'react-native';


export default function followOneScreen({ navigation, route }) {

    const { id, login, pass } = route.params

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [alert, setAlert] = useState()

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }
        fetch(`http://coralserver.ddns.net:8000/follow/view/${id}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.cars.length > 0) {
                    //console.log(data.cars)
                    setData(data.cars)
                    setLoading(false)
                } else {
                    setLoading(false)
                    setAlert('Ничего не найдено, повторите запрос')
                }
            })
            .catch(err => {
                console.log(err);
                setLoading(false)
                setAlert('Ошибка на сервере')
            })
    }, [])


    const carsRenderList = ({ item }) => {
        
        let carImage = { uri: item.img }
        if (!item.img) {
            return (
                <View></View>
            )
        } else {
            const carInfo = item.carType.split(' ')
            const hp = item.carPower.split(' ')
            const option = hp[1].split('cc')
            const date = item.date.split('[')
            let newCar = item.new
           
            return (
                <TouchableOpacity style={styles.buttonCarList} onPress={() => {
                    const index = data.findIndex(it => it.auction_num === item.auction_num)
                 
                    navigation.navigate('selectedCarScreen', {
                        aucNumber: item.auction_num,
                        startPrice: item.carPrice,
                        year: carInfo[0],
                        rate: item.rate,
                        mileage: item.mileage,
                        auc: item.carAuction,
                        date: date[0],
                        carBody: carInfo[1],
                        motor: option[0],
                        complect: item.carComplect,
                        option1: option[1],
                        option2: hp[0],
                        //img: carImage,
                        src: item.src,
                        login: login,
                        pass: pass,
                        id: id,
                        index: index
                    })
                }}>
                    <View>
                        {newCar === 'true' ? (<View style={{ backgroundColor: '#168dd0', width: '100%', height: 3 }}></View>) : (<View></View>)}
                    </View>
                    <View style={styles.headerInfo}>
                        <Text>Номер лота: {item.auction_num}</Text>
                        <Text>Стартовая цена: {item.carPrice}</Text>
                    </View>
                    <View>
                        <View style={{ width: '95%', height: 180, marginLeft: '2.5%' }} >
                            <Image source={carImage} style={{ width: '100%', height: '100%', borderRadius: 15 }} />
                        </View>
                    </View>
                    <View style={styles.middleInfo}>
                        <Text>Год: {carInfo[0]}</Text>
                        <Text>Оценка: {item.rate}</Text>
                        <Text>Пробег: {item.mileage}km</Text>
                    </View>
                    <View style={styles.footerInfoContainer}>
                        <View style={styles.footerInfo1}>
                            <Text>Аукцион: {item.carAuction}</Text>
                            <Text>Дата: {date[0]}</Text>
                            <Text>Кузов: {carInfo[1]}</Text>
                            <Text>Обьем: {option[0]}cc</Text>
                        </View>
                        <View style={styles.footerInfo2}>
                            <Text>Комплектация: {item.carComplect}</Text>
                            <Text>Дополнительная информация: {option[1]}{hp[0]}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#fff' }} >
            {loading ? (
                <View style={styles.activity}>
                    <ActivityIndicator
                        visible={loading}
                        size='large'
                        color='#168dd0'
                    />
                </View>
            ) : (
                <View>
                    <View style={styles.searchNum}>
                        {alert ? (
                            <View>
                                <Text style={{ fontSize: 16, paddingTop: 50 }}>На сервере произошла ошибка, повторите поиск</Text>
                                <Image source={require('../Data/images/carError.jpg')} style={{ width: '95%', height: 140, marginTop: 50 }} />
                            </View>
                        ) : (
                            <View>
                                {/* <Text>{carsNumber[0]}</Text> */}
                            </View>
                        )
                        }

                    </View>
                    <View>
                        <FlatList
                            data={data}
                            contentContainerStyle={{ paddingBottom: '50%' }}
                            horizontal={false}
                            renderItem={carsRenderList}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </View>
            )
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    buttonCarList: {
        marginTop: 5,
        marginBottom: 10,
        marginHorizontal: 10,
        elevation: 7,
        backgroundColor: '#fff',
        shadowColor: '#168dd0',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 }

    },
    searchNum: {
        marginVertical: 0,
        marginLeft: 14,
        backgroundColor: '#fff'
    },
    aucLink: {
        backgroundColor: '#168dd0',
        borderRadius: 0,
        height: 30,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    activity: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    },
    headerInfo: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 7,
        justifyContent: 'space-between',
    },
    middleInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        paddingVertical: 7,
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
    footerInfoContainer: {
        flexDirection: 'row',
        width: '90%',
        marginHorizontal: 10,
        marginVertical: 10,
    },
    footerInfo1: {
        width: '50%',
        borderWidth: 1,
        borderColor: 'gray',
        marginRight: 15,
        padding: 5,
        borderRadius: 4
    },
    footerInfo2: {
        width: '50%',
        marginRight: 14,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 5,
        borderRadius: 5,
    }

})

