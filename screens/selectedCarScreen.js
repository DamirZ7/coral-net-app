import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Linking, Text, Image, ScrollView, StatusBar, SafeAreaView, ActivityIndicator, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function selectedCarScreen({ navigation, route }) {

    const [resDataPars, setResDataPars] = useState([])
    const [loading, setLoading] = useState(true)
    const [textVisible, setTextVisible] = useState(false)
    const [alert, setAlert] = useState(false)

    const { aucNumber, startPrice, year, rate, mileage, auc, date, carBody, motor, complect, option1, option2, src, login, pass, id, index } = route.params

    const { width } = Dimensions.get('window')
    const height = width * 100 / 140

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: src,
                login: login,
                pass: pass,
                id: id,
                index: index
            })
        }

        fetch('http://52.15.47.185:5050/img', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.imgs.length > 0) {
                    setResDataPars(data.imgs)
                    setLoading(false)
                    console.log(data.imgs)
                } else {
                    setAlert(true)
                    setLoading(false)
                }
            })
            .catch((err) => {
                setLoading(false)
                setResDataPars(['Произошла ошибка!'])
                console.log(err);
            })

    }, [])


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
                                        Аукцион завершен
                                    </Text>
                                </View>
                            ) : (
                                resDataPars.map((it, index) => {
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
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ fontStyle: 'italic' }}>Справочник обозначений аукционного листа</Text>
                            <AntDesign name={textVisible === true ? "up" : "down"} size={22} color="#168dd0" />
                        </View>
                    </TouchableOpacity>
                    <View>
                        {textVisible === false
                            ? <View></View>
                            : <View style={{ paddingHorizontal: 10 }}>
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
                <View style={{ paddingLeft: 10 }}>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, borderBottomWidth: 1.5, borderColor: 'gray', paddingBottom: 10 }}>
                        <View>
                            <Text style={styles.text}>Номер лота</Text>
                            <Text style={styles.textInfo}>{aucNumber}</Text>
                        </View>
                        <View>
                            <Text style={styles.text}>Стартовая цена</Text>
                            <Text style={styles.textInfo}>{startPrice}</Text>
                        </View>
                    </View>
                    <View style={styles.infoContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Год</Text>
                            <Text style={styles.textInfo}>{year}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Оценка</Text>
                            <Text style={styles.textInfo}>{rate}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Пробег</Text>
                            <Text style={styles.textInfo}>{mileage}</Text>
                        </View>
                    </View>
                    <View style={styles.infoContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Кузов</Text>
                            <Text style={styles.textInfo}>{carBody}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Обьем двигателя</Text>
                            <Text style={styles.textInfo}>{motor} сс</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Комплектация</Text>
                            <Text style={styles.textInfo}>{complect}</Text>
                        </View>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Аукцион</Text>
                        <Text style={styles.textInfo}>{auc}</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>Дата аукциона</Text>
                        <Text style={styles.textInfo}>{date}</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>Опции</Text>
                        <Text style={styles.textInfo}>{option2}</Text>
                        <Text style={styles.textInfo}>{option1}</Text>
                    </View>
                </View>

                {/* <View style={styles.btn}>
                    <TouchableOpacity style={styles.btnArea}>
                        <Text style={{ color: 'white', fontSize: 16 }}>Статистика продаж</Text>
                    </TouchableOpacity>
                </View> */}

            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    text: {
        color: 'gray',

    },
    textInfo: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textContainer: {
        marginBottom: 10,
    },
    infoContainer: {
        borderBottomWidth: 1.5,
        borderColor: 'gray',
        marginBottom: 10,
        width: '95%'
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,

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

