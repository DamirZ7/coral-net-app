import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text, Image, ScrollView, StatusBar, ActivityIndicator, SafeAreaView } from 'react-native';
import URL from '../keys/keys'

export default function calcResultScreen({ navigation, route }) {

    const [resCalcPars, setResCalcPars] = useState([])

    const { carPrice, auction, carType, fuelType, horsePower, carOld, motorV, language } = route.params

    useEffect(() => {
        navigation.setOptions({
            title: language.values.calcResultScreen.calcRes,
        })
    }, [language])

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

        fetch(`${URL}/calculate`, requestOptions)
            .then(response => response.json())
            .then(data => {
                setResCalcPars(data)
                //console.log(data);

            })
            .catch((err) => {
                console.log(err);
            })

    }, [])

    const result = resCalcPars.map((it) => {
        if (it) {
            return it.price
        } else {
            return language.values.calcResultScreen.calcErr
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
                    <Text style={styles.resText}>{language.values.calcResultScreen.finishPrice}</Text>
                    <Text style={styles.resValue}>{result} {language.values.calcResultScreen.rub}</Text>
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.headTitle}>
                        <Text style={styles.headTitleText}>{language.values.calcResultScreen.japanCosts}</Text>
                    </View>

                    <View style={styles.subContainer}>
                        <Text style={styles.subText}>{language.values.calcResultScreen.aucPrice}</Text>
                        <Text style={styles.subValue}>{price} {language.values.calcResultScreen.jap}</Text>

                        <Text style={styles.subText}>{language.values.calcResultScreen.fob}</Text>
                        <Text style={styles.subValue}>{fobToyama} {language.values.calcResultScreen.jap}</Text>

                        <Text style={styles.subText}>{language.values.calcResultScreen.vladivostokShip}</Text>
                        <Text style={styles.subValue}>{freightJp} {language.values.calcResultScreen.jap} / {freightRf} {language.values.calcResultScreen.rub}</Text>

                        <Text style={styles.subText}>{language.values.calcResultScreen.cf}</Text>
                        <Text style={styles.subValue}>{rowRf} {language.values.calcResultScreen.rub}</Text>
                    </View>

                    <View style={styles.headTitle}>
                        <Text style={styles.headTitleText}>{language.values.calcResultScreen.custom}</Text>
                    </View>

                    <View style={styles.subContainer}>
                        <Text style={styles.subText}>{language.values.calcResultScreen.svh}</Text>
                        <Text style={styles.subValue}>{customDoc} {language.values.calcResultScreen.rub}</Text>

                        <Text style={styles.subText}>{language.values.calcResultScreen.glonas}</Text>
                        <Text style={styles.subValue}>{glonas} {language.values.calcResultScreen.rub}</Text>

                        <Text style={styles.subText}>{language.values.calcResultScreen.util}</Text>
                        <Text style={styles.subValue}>{recycle} {language.values.calcResultScreen.rub}</Text>

                        <Text style={styles.subText}>{language.values.calcResultScreen.duty}</Text>
                        <Text style={styles.subValue}>{taxPay} {language.values.calcResultScreen.rub}</Text>

                        <Text style={styles.subText}>{language.values.calcResultScreen.fullCustom}</Text>
                        <Text style={styles.subValue}>{totalTax} {language.values.calcResultScreen.rub}</Text>

                        <Text style={styles.subText}>{language.values.calcResultScreen.finishPrice}</Text>
                        <Text style={styles.subValue}>{result} {language.values.calcResultScreen.rub}</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
    else if (resCalcPars.length === 9) {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.resContainer}>
                    <Text style={styles.resText}>{language.values.calcResultScreen.finishPrice}</Text>
                    <Text style={styles.resValue}>{result} {language.values.calcResultScreen.rub}</Text>
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.headTitle}>
                        <Text style={styles.headTitleText}>{language.values.calcResultScreen.japanCosts}</Text>
                    </View>

                    <View style={styles.subContainer}>
                        <Text style={styles.subText}>{language.values.calcResultScreen.aucPrice}</Text>
                        <Text style={styles.subValue}>{price} {language.values.calcResultScreen.jap}</Text>

                        <Text style={styles.subText}>{language.values.calcResultScreen.fob}</Text>
                        <Text style={styles.subValue}>{fobToyama} {language.values.calcResultScreen.jap}</Text>

                        <Text style={styles.subText}>{language.values.calcResultScreen.fraght}</Text>
                        <Text style={styles.subValue}>{freightUsd} {language.values.calcResultScreen.usd} / {freightRf} {language.values.calcResultScreen.rub}</Text>

                        <Text style={styles.subText}>{language.values.calcResultScreen.cf}</Text>
                        <Text style={styles.subValue}>{rowRf} {language.values.calcResultScreen.rub}</Text>
                    </View>

                    <View style={styles.headTitle}>
                        <Text style={styles.headTitleText}>{language.values.calcResultScreen.custom}</Text>
                    </View>

                    <View style={styles.subContainer}>
                        <Text style={styles.subText}>{language.values.calcResultScreen.svh}</Text>
                        <Text style={styles.subValue}>{customDoc} {language.values.calcResultScreen.rub}</Text>

                        <Text style={styles.subText}>{language.values.calcResultScreen.finishPrice}</Text>
                        <Text style={styles.subValue}>{result} {language.values.calcResultScreen.rub}</Text>
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

