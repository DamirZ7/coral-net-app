import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text, Image, ScrollView, StatusBar, ActivityIndicator, SafeAreaView } from 'react-native';

export default function calcResultScreen({ navigation, route }) {

    const [resCalcPars, setResCalcPars] = useState([])

    const { carPrice, auction, carType, fuelType, horsePower, carOld, motorV } = route.params
    console.log([carPrice, auction, carType, fuelType, horsePower, carOld, motorV]);

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                carPrice: carPrice,
                auction: auction,
                carType: carType,
                fuelType: fuelType,
                horsePower: horsePower,
                carOld: carOld,
                motorV: motorV

            })
        }

        fetch('http://192.168.0.103:5050/calculate', requestOptions)
            .then(response => response.json())
            .then(data => {
                setResCalcPars(data.calc)
                console.log(data.calc);

            })
            .catch((err) => {
                console.log(err);
            })

    }, [])

    const result = resCalcPars.map((it) => {
        if (it) {
            return it.price
        } else {
            return 'Ошибка, повторите запрос'
        }
    })

    const price = resCalcPars.map((it) => {
        return it.aucPrice
    })

    const fobToyama = resCalcPars.map((it) => {
        return it.fobToyama
    })

    const freightJp = resCalcPars.map((it) => {
        return it.freightJp
    })

    const freightRf = resCalcPars.map((it) => {
        return it.freightRf
    })

    const rowRf = resCalcPars.map((it) => {
        return it.rowRf
    })

    const customDoc = resCalcPars.map((it) => {
        return it.customDoc
    })

    const glonas = resCalcPars.map((it) => {
        return it.glonas
    })

    const recycle = resCalcPars.map((it) => {
        return it.recycle
    })

    const taxPay = resCalcPars.map((it) => {
        return it.taxPay
    })

    const totalTax = resCalcPars.map((it) => {
        return it.totalTax
    })

    const freightUsd = resCalcPars.map((it) => {
        return it.freightUsd
    })

    if (resCalcPars.length === 12) {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.resContainer}>
                    <Text style={styles.resText}>Итоговая стоимость во Владивостоке</Text>
                    <Text style={styles.resValue}>{result} рублей</Text>
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.headTitle}>
                        <Text style={styles.headTitleText}>Расходы по Японии</Text>
                    </View>

                    <View style={styles.subContainer}>
                        <Text style={styles.subText}>Цена на аукционе</Text>
                        <Text style={styles.subValue}>{price} йен</Text>

                        <Text style={styles.subText}>FOB Тояма</Text>
                        <Text style={styles.subValue}>{fobToyama} йен</Text>

                        <Text style={styles.subText}>Доставка до Владивостока</Text>
                        <Text style={styles.subValue}>{freightJp} йен / {freightRf} рублей</Text>

                        <Text style={styles.subText}>Итого C&F Владивосток</Text>
                        <Text style={styles.subValue}>{rowRf} рублей</Text>
                    </View>

                    <View style={styles.headTitle}>
                        <Text style={styles.headTitleText}>Таможенные платежи</Text>
                    </View>

                    <View style={styles.subContainer}>
                        <Text style={styles.subText}>Услуги по таможенному оформлению, СВХ, СБКТС</Text>
                        <Text style={styles.subValue}>{customDoc} рублей</Text>

                        <Text style={styles.subText}>Установка оборудования Эра-Глонас</Text>
                        <Text style={styles.subValue}>{glonas} рублей</Text>

                        <Text style={styles.subText}>Утилизационный сбор</Text>
                        <Text style={styles.subValue}>{recycle} рублей</Text>

                        <Text style={styles.subText}>Таможенная пошлина</Text>
                        <Text style={styles.subValue}>{taxPay} рублей</Text>

                        <Text style={styles.subText}>Итого таможенные платежи</Text>
                        <Text style={styles.subValue}>{totalTax} рублей</Text>

                        <Text style={styles.subText}>Итоговая стоимость во Владивостоке</Text>
                        <Text style={styles.subValue}>{result} рублей</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
    else if (resCalcPars.length === 9) {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.resContainer}>
                    <Text style={styles.resText}>Итоговая стоимость во Владивостоке</Text>
                    <Text style={styles.resValue}>{result} рублей</Text>
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.headTitle}>
                        <Text style={styles.headTitleText}>Расходы по Японии</Text>
                    </View>

                    <View style={styles.subContainer}>
                        <Text style={styles.subText}>Цена на аукционе</Text>
                        <Text style={styles.subValue}>{price} йен</Text>

                        <Text style={styles.subText}>FOB Тояма</Text>
                        <Text style={styles.subValue}>{fobToyama} йен</Text>

                        <Text style={styles.subText}>Распил / фрахт</Text>
                        <Text style={styles.subValue}>{freightUsd} долларов / {freightRf} рублей</Text>

                        <Text style={styles.subText}>Итого C&F Владивосток</Text>
                        <Text style={styles.subValue}>{rowRf} рублей</Text>
                    </View>

                    <View style={styles.headTitle}>
                        <Text style={styles.headTitleText}>Таможенные платежи</Text>
                    </View>

                    <View style={styles.subContainer}>
                        <Text style={styles.subText}>Услуги по таможенному оформлению</Text>
                        <Text style={styles.subValue}>{customDoc} рублей</Text>

                        <Text style={styles.subText}>Итоговая стоимость во Владивостоке</Text>
                        <Text style={styles.subValue}>{result} рублей</Text>
                    </View>
                </View>
            </ScrollView>
        )
    } else {
        return (
            <SafeAreaView style={styles.activity}>
      <ActivityIndicator size='large' color='#168dd0' />
            </SafeAreaView>
        )
    }

}





const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 7
    },
    resContainer: {
        alignItems: 'center',
    },
    resText: {
        fontSize: 18
    },
    resValue: {
        fontSize: 26,
        paddingVertical: 5,
        color: '#168dd0'
    },
    infoContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    headTitle: {
        marginVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#168dd0',
        paddingBottom: 5,
        width: '80%',
        alignItems: 'center'
    },
    headTitleText: {
        fontSize: 18
    },
    subContainer: {
        alignItems: 'center'
    },
    subText: {
        paddingBottom: 5,
        fontSize: 14
    },
    subValue: {
        color: '#168dd0',
        marginBottom: 15,
        fontSize: 16
    },
    activity: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
})

