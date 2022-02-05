import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, Text, Image, ScrollView, ActivityIndicator, FlatList } from 'react-native';
import URL from '../keys/keys'


export default function followOneScreen({ navigation, route }) {

    const { id, language } = route.params

    useEffect(() => {
        navigation.setOptions({
            title: language.values.followOneScreen.searchResult,
        })
    }, [language])

    const [loading, setLoading] = useState(true)
    const [resDataPars, setResDataPars] = useState([])
    const [alert, setAlert] = useState()

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }
        fetch(`${URL}/follow/view/${id}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.cars.length > 0) {
                    //console.log(data.cars)
                    setResDataPars(data.cars)
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

        if (!item.foto) {
            return (
                <View></View>
            )
        } else {
            const image = item.foto.split('/').map(it => it === 'https:' ? 'http:' : it).join('/')
            let carImage = { uri: image }
            let newCar = item.new
            return (
                <TouchableOpacity style={styles.buttonCarList} onPress={() => {
                    navigation.navigate('selectedCarScreen', {
                        corner: item[0],
                        aacount: item[1],
                        exhnum: item[2],
                        auction: item.auction,
                        aucDate: item.aucDate,
                        car: item.car,
                        car1: item.car1,
                        color: item.color,
                        inspect: item.inspect,
                        lotNum: item.lotNum,
                        lotNum1: item.lotNum1,
                        model: item.model,
                        model1: item.model1,
                        odo: item.odo,
                        options: item.options,
                        options1: item.options1,
                        price: item.price,
                        rate: item.rate,
                        year: item.year,
                        year1: item.year1,
                        language: language,
                    })
                }}>
                    <View>
                        {newCar ? <View style={{ width: '100%', height: 3, backgroundColor: '#168dd0', borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}></View> : <View></View>}
                    </View>
                    <View style={styles.headerInfo}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#168dd0' }}>{item.car}</Text>
                        <Text style={{ color: 'gray' }}>{language.values.followOneScreen.year}: {item.year} {item.year1}</Text>
                    </View>
                    <View>
                        <View style={{ width: '95%', height: 200, marginLeft: '2.5%' }}>
                            <Image
                                source={carImage}
                                //resizeMode='contain'
                                style={{ width: '100%', height: '100%', borderRadius: 5 }}
                            />
                        </View>
                    </View>
                    <View style={styles.middleInfo}>
                        <Text>{language.values.followOneScreen.price}: {item.price}</Text>
                        <Text>{language.values.followOneScreen.rate}: {item.rate}</Text>
                    </View>
                    <View style={styles.footerInfoContainer}>
                        <View style={styles.footerInfo1}>
                            <Text style={{ color: 'gray', paddingBottom: 2 }}>{language.values.followOneScreen.range}: {item.odo}km</Text>
                            <Text style={{ color: 'gray', paddingBottom: 2 }}>{language.values.followOneScreen.inspection}: {item.inspect}</Text>
                            <Text style={{ color: 'gray', paddingBottom: 2 }}>{language.values.followOneScreen.carBody}: {item.model}</Text>
                            <Text style={{ color: 'gray', paddingBottom: 2 }}>{language.values.followOneScreen.engine}: {item.model1}cc</Text>
                            <Text style={{ color: 'gray'}}>{language.values.followOneScreen.color}: {item.color}</Text>
                        </View>
                        <View style={styles.footerInfo2}>
                            <Text style={{ color: 'gray', paddingBottom: 2 }}>{language.values.followOneScreen.lotNum}: {item.lotNum} {item.lotNum1}</Text>
                            <Text style={{ color: 'gray', paddingBottom: 2 }}>{language.values.followOneScreen.complect}: {item.car1}</Text>
                            <Text style={{ color: 'gray', paddingBottom: 2 }}>{language.values.followOneScreen.options}: {item.options}, {item.options1}</Text>
                            <Text style={{ color: 'gray' }}>Deadline: {item.deadline} {item.deadline1}</Text>
                        </View>
                    </View>
                    <View style={styles.underInfo}>
                        <Text>{language.values.followOneScreen.auction}: {item.auction}</Text>
                        <Text>{item.aucDate}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#fff' }} >
            {loading ? (
                <View style={styles.activity}>
                    <Text style={{ fontSize: 26, marginBottom: 15 }}>{language.values.followOneScreen.loading}</Text>
                    <ActivityIndicator
                        visible={loading}
                        size='large'
                        color='#168dd0'
                    />
                </View>
            ) : (
                <View>
                    <View style={styles.searchNum}>
                        {(resDataPars[0] === 'Ничего не найдено, измените параметры поиска') ? (
                            <View>
                                <Text style={{ fontSize: 16, paddingTop: 50 }}>{language.values.followOneScreen.searchErr}</Text>
                                {/* <Image source={require('../Data/images/carError.jpg')} style={{ width: '95%', height: 140, marginTop: 50 }} /> */}
                            </View>
                        ) : (
                            <View>

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
        width: '52%',
        //borderWidth: 1,
        //borderColor: 'gray',
        marginRight: 15,
        padding: 0,
        //borderRadius: 5
    },
    footerInfo2: {
        width: '50%',
        marginRight: 10,
        //borderWidth: 1,
        //borderColor: 'gray',
        padding: 0,
        //borderRadius: 5,
    },
    underInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        paddingVertical: 7,
        borderTopWidth: 1,
        borderColor: 'gray',
    }

})