import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';

export default function carsResultsScreen({ navigation, route }) {

    const [resDataPars, setResDataPars] = useState([])
    const [loading, setLoading] = useState(true)

    const { carsBarnd, carsMod, carsAuc, carsRate, carsStatus, year_start, year_end, range_start, range_end, login, pass } = route.params

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                car: carsBarnd,
                model: carsMod,
                auction: carsAuc,
                rate: carsRate,
                status: carsStatus,
                yearS: year_start,
                yearE: year_end,
                rangeS: range_start,
                rangeE: range_end,
                login: login,
                pass: pass
            })
        }

        fetch('http://coralserver.ddns.net:8000/auction', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.cars.length > 0) {
                    setResDataPars(data.cars)
                    setLoading(false)
                    console.log(data.cars.length)
                } else {
                    setResDataPars([{ num_cars: 'Ничего не найдено, измените параметры поиска' }])
                    setLoading(false)
                }
            })
            .catch((err) => {
                setLoading(false)
                setResDataPars([{ num_cars: 'Произошла ошибка, повторите поиск' }])
                console.log(err);
            })

    }, [])

    const carsNumber = resDataPars.map((it) => {
        return it.num_cars
    })

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


            return (
                <TouchableOpacity style={styles.buttonCarList} onPress={() => {
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
                        pass: pass
                    })
                }}>
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
                    <Text style={{ fontSize: 26, marginBottom: 15 }}>Идет поиск ...</Text>
                    <ActivityIndicator
                        visible={loading}
                        size='large'
                        color='#168dd0'
                    />
                </View>
            ) : (
                <View>
                    <View style={styles.searchNum}>
                        {(carsNumber[0] === 'Произошла ошибка, повторите поиск') ? (
                            <View>
                                <Text style={{ fontSize: 16, paddingTop: 50 }}>Ничего не найдено, измените параметры поиска</Text>
                                <Image source={require('../Data/images/carError.jpg')} style={{ width: '95%', height: 140, marginTop: 50 }} />
                            </View>
                        ) : (
                            <View>
                                <Text>{carsNumber[0]}</Text>
                            </View>
                        )
                        }

                    </View>
                    <View>
                        <FlatList
                            data={resDataPars}
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
        marginVertical: 7,
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