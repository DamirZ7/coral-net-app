import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Linking, Text, Image, ScrollView, StatusBar, SafeAreaView, ActivityIndicator, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import URL from '../keys/keys'

export default function selectedCarScreen({ navigation, route }) {

    const [resDataPars, setResDataPars] = useState([])
    const [loading, setLoading] = useState(true)
    const [textVisible, setTextVisible] = useState(false)
    const [alert, setAlert] = useState(false)
    const [mailAlert, setMailAlert] = useState('')
    const [mailLoading, setMailLoading] = useState(false)

    const { corner, aacount, exhnum, auction, aucDate, car, car1, color, inspect, lotNum, lotNum1, model, model1, odo, options, options1, price, rate, year, year1, language } = route.params

    useEffect(() => {
        navigation.setOptions({
            title: language.values.selectedCarScreen.selectedCar,
        })
    }, [language])

    const { width } = Dimensions.get('window')
    const height = width * 100 / 140
    const link = `https://www.asnet2.com/asnet_en/auction/detail/corner/${corner}/aacount/${aacount}/exhnum/${exhnum}/`

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                corner: corner,
                aacount: aacount,
                exhnum: exhnum,
            })
        }

        fetch(`${URL}/img`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    setResDataPars(data)
                    setLoading(false)
                    //console.log(data)
                } else {
                    setAlert(true)
                    setLoading(false)
                }
            })
            .catch((err) => {
                setLoading(false)
                setResDataPars([language.values.selectedCarScreen.dataErr])
                console.log(err);
            })

    }, [])

    const sendMail = (link) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                link: link,
            })
        }

        fetch(`${URL}/mailsend`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data === 'Лот отправлен, Ваш менеджер свяжется с вами в ближайшее время') {
                    setMailLoading(false)
                    setMailAlert(language.values.selectedCarScreen.sendMailCompl)
                }
                else if (data.res === 'Произошла ошибка при отправке, попородуйте еще раз') {
                    setMailLoading(false)
                    setMailAlert(language.values.selectedCarScreen.sendMailErr)
                }
                else {
                    setMailLoading(false)
                    setMailAlert('Ошибка')
                }
            })
            .catch(err => {
                console.log(err);
                setMailLoading(false)
                setMailAlert(language.values.selectedCarScreen.serverErr)
            })
    }

    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <ScrollView >

                <View style={{ flex: 1, alignItems: 'center', paddingVertical: 0 }}>
                    {loading ? (
                        <ActivityIndicator
                            visible={loading}
                            size='large'
                            color='#168dd0'
                        />
                    ) : (
                        <ScrollView
                            pagingEnabled={true}
                            horizontal={true}
                            style={{ width, height }}
                        >
                            {alert ? (
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderColor: 'red', borderWidth: 2, width }}>
                                    <Text style={{ fontSize: 28 }}>
                                        {language.values.selectedCarScreen.dataErr}
                                    </Text>
                                </View>
                            ) : (
                                resDataPars[0].carFoto.map((it, index) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => {
                                                Linking.openURL(it)
                                            }}
                                            key={index.toString()}
                                        >
                                            <Image
                                                source={{ uri: it }}
                                                style={{ width, height, resizeMode: 'cover' }}
                                                key={index.toString()}
                                            />
                                        </TouchableOpacity>
                                    )
                                }))}
                        </ScrollView>
                    )}
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            if (textVisible === false) {
                                setTextVisible(true)
                            } else {
                                setTextVisible(false)
                            }
                        }}
                        style={{ marginVertical: 15, height: 20 }}
                    >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 1.5, borderBottomColor: 'gray', paddingBottom: 10, marginHorizontal: 10 }}>
                            <Text style={{ fontStyle: 'italic' }}>{language.values.selectedCarScreen.aucList}</Text>
                            <AntDesign name={textVisible === true ? "up" : "down"} size={22} color="#168dd0" />
                        </View>
                    </TouchableOpacity>
                    <View>
                        {textVisible === false
                            ? <View></View>
                            : <View style={{ paddingHorizontal: 10 }}>
                                <View>
                                    {resDataPars.length === 0 ? (
                                        <ActivityIndicator
                                            visible={loading}
                                            size='small'
                                            color='#168dd0'
                                        />
                                    ) : (
                                        <View>
                                            <Image
                                                source={{ uri: resDataPars[0].aucImage }}
                                                //resizeMode='cover'
                                                style={{ width, height, resizeMode: 'contain', marginBottom: 10 }}
                                            />
                                        </View>
                                    )}
                                </View>
                                <Text>
                                    A1 Маленькая Царапина{'\n'}
                                    A2 Царапина{'\n'}
                                    A3 Большая Царапина{'\n'}
                                    E1 Небольшая Вмятина{'\n'}
                                    E2 Несколько Небольших Вмятина{'\n'}
                                    E3 Много Небольших Вмятин{'\n'}
                                    U1 Маленькая Вмятина{'\n'}
                                    U2 Вмятина{'\n'}
                                    U3 Большая Вмятина{'\n'}
                                    W1 Ремонт/Покраска (едва обнаружимые){'\n'}
                                    W2 Ремонт/Покраска (заметные){'\n'}
                                    W3 Ремонт/Покраска (очень заметные, должно быть перекрашено){'\n'}
                                    S1 Малозаметная Ржавчина{'\n'}
                                    S2 Ржавчина{'\n'}
                                    C1 Коррозия{'\n'}
                                    C2 Заметная Коррозия{'\n'}
                                    P Краска отличается от оригинала{'\n'}
                                    H Краска ухудшилась{'\n'}
                                    X Элемент требует замены{'\n'}
                                    XX Замененный Элемент{'\n'}
                                    B1 Маленькая вмятина с царапиной (размером с большой палец){'\n'}
                                    B2 Вмятина с царапиной (размером с ладонь){'\n'}
                                    B3 Большая вмятина с царапиной (размером с локоть){'\n'}
                                    Y1 Маленькая Трещина{'\n'}
                                    Y2 Трещина{'\n'}
                                    Y3 Большая Трещина{'\n'}
                                    X1 Маленькая Трещина на Ветровом стекле (приблизительно 1 см){'\n'}
                                    R Восстановленная Трещина на Ветровом стекле{'\n'}
                                    RX Восстановленная Трещина на Ветровом стекле (требует замены){'\n'}
                                    X Трещина на Ветровом стекле (требует замены){'\n'}
                                    G Скол на стекле (возможна трещина){'\n'}
                                </Text>
                            </View>
                        }
                    </View>
                </View>

                <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{car}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'gray', fontSize: 16 }}>{language.values.selectedCarScreen.year}: </Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{year} {year1}</Text>
                        </View>
                    </View>

                    <View style={{ borderBottomWidth: 1.5, borderColor: 'gray', paddingBottom: 10, marginBottom: 10 }}>
                        <View>
                            <Text style={{ color: 'gray', fontSize: 16 }}>{language.values.selectedCarScreen.price}</Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{price}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                        <View >
                            <Text style={styles.text}>{language.values.selectedCarScreen.lotNum}</Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={styles.textInfo}>{lotNum} {lotNum1}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                        <View>
                            <Text style={styles.text}>{language.values.selectedCarScreen.rate}</Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={styles.textInfo}>{rate}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                        <View>
                            <Text style={styles.text}>{language.values.selectedCarScreen.inspect}</Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={styles.textInfo}>{inspect}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                        <View>
                            <Text style={styles.text}>{language.values.selectedCarScreen.range}</Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={styles.textInfo}>{odo}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                        <View>
                            <Text style={styles.text}>{language.values.selectedCarScreen.carBody}</Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={styles.textInfo}>{model}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                        <View>
                            <Text style={styles.text}>{language.values.selectedCarScreen.color}</Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={styles.textInfo}>{color}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                        <View>
                            <Text style={styles.text}>{language.values.selectedCarScreen.complect}</Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={styles.textInfo}>{car1}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                        <View>
                            <Text style={styles.text}>{language.values.selectedCarScreen. auction}</Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={styles.textInfo}>{auction}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                        <View>
                            <Text style={styles.text}>{language.values.selectedCarScreen.aucDate}</Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={styles.textInfo}>{aucDate}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                        <View>
                            <Text style={styles.text}>{language.values.selectedCarScreen.engine}</Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={styles.textInfo}>{model1} сс</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                        <View>
                            <Text style={styles.text}>{language.values.selectedCarScreen.fuel}</Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            {resDataPars.length === 0 ? (
                                <ActivityIndicator
                                    visible={loading}
                                    size='small'
                                    color='#168dd0'
                                />
                            ) : (
                                <View>
                                    <Text style={styles.textInfo}>{resDataPars[0].fuel}</Text>
                                </View>
                            )}
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, borderBottomWidth: 1.5, borderBottomColor: 'gray', paddingBottom: 10 }}>
                        <View>
                            <Text style={styles.text}>{language.values.selectedCarScreen.history}</Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            {resDataPars.length === 0 ? (
                                <ActivityIndicator
                                    visible={loading}
                                    size='small'
                                    color='#168dd0'
                                />
                            ) : (
                                <View>
                                    <Text style={styles.textInfo}>{resDataPars[0].history}</Text>
                                </View>
                            )}
                        </View>
                    </View>

                </View>

                <View style={{ paddingHorizontal: 10, marginBottom: 10 }}>
                    <View style={{ marginBottom: 5 }}>
                        <Text style={styles.text}>{language.values.selectedCarScreen.options}</Text>
                    </View>
                    <View>
                        {resDataPars.length === 0 ? (
                            <ActivityIndicator
                                visible={loading}
                                size='small'
                                color='#168dd0'
                            />
                        ) : (
                            <View>
                                <Text style={styles.textInfo}>{options}</Text>
                                <Text style={styles.textInfo}>{options1}</Text>
                                <Text style={styles.textInfo}>{resDataPars[0].equip}</Text>
                            </View>
                        )}
                    </View>
                </View>

                <View style={{ paddingHorizontal: 10 }}>
                    <View style={{ marginBottom: 5 }}>
                        <Text style={styles.text}>{language.values.selectedCarScreen.inform}</Text>
                    </View>

                    <View>
                        {resDataPars.length === 0 ? (
                            <ActivityIndicator
                                visible={loading}
                                size='small'
                                color='#168dd0'
                            />
                        ) : (
                            <View>
                                <Text style={styles.textInfo}>{resDataPars[0].inform}</Text>
                            </View>
                        )}
                    </View>
                </View>



                <View style={styles.btn}>
                    <TouchableOpacity
                        style={styles.btnArea}
                        onPress={() => {
                            setMailLoading(true)
                            sendMail(link)
                        }
                        }
                    >
                        <Text style={{ color: 'white', fontSize: 16 }}>{language.values.selectedCarScreen.sendMail}</Text>
                    </TouchableOpacity>
                </View>

                <View style={{marginVertical: 10}}>
                    {mailLoading ? (
                        <ActivityIndicator
                            visible={loading}
                            size='small'
                            color='#168dd0'
                        />
                    ) : (
                        <View>
                            <Text style={{ textAlign: 'center' }}>{mailAlert}</Text>
                        </View>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    text: {
        color: 'gray',

    },
    textInfo: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    textContainer: {
        marginBottom: 10,
    },
    infoContainer: {
        borderBottomWidth: 1.5,
        borderColor: 'gray',
        marginBottom: 10,
        //width: '95%'
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30,

    },
    btnArea: {
        backgroundColor: '#168dd0',
        width: '50%',
        height: 40,
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 7,

    },
})

