import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text, Image, ScrollView, ActivityIndicator, Modal } from 'react-native';
import * as Location from 'expo-location';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import URL from '../keys/keys'
import RU from '../Data/languages/language.ru'
import EN from '../Data/languages/language.en'



export default function SigninScreen({ navigation }) {
    const [language, setLanguage] = useState(EN)
    const [location, setLocation] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const [authEmail, setAuthEmail] = useState('')
    const [pass, setPass] = useState('')
    const [alert, setAlert] = useState('')
    const [loading, setLoading] = useState(false)
    const [selected, setSelected] = useState(false)
    const [secure, setSecure] = useState(true)

    const [registrModal, setRegistrModal] = useState(false)
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [regLogin, setRegLogin] = useState('')
    const [regPass, setRegPass] = useState('')
    const [regPassRepeat, setRegPassRepeat] = useState('')
    const [regEmailAlert, setRegEmailAlert] = useState('')
    const [regPassAlert, setRegPassAlert] = useState('')
    const [regAlert, setRegAlert] = useState('')
    const [allForm, setAllForm] = useState('')

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            if (location) {
                const { latitude, longitude } = location.coords
                let response = await Location.reverseGeocodeAsync({
                    latitude,
                    longitude
                })
                for (let item of response) {
                    let address = {
                        country: item.country,
                        city: item.city,
                        region: item.region,
                        postalCode: item.postalCode,
                        street: item.street,
                        name: item.name,
                        timezone: item.timezone

                    }
                    setLocation(address);
                }
            }
        })();
    }, [])

    const emailValidate = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email)) {
            setRegEmailAlert('')
            return true
        } else {
            setRegEmailAlert('Email error')
            return false
        }
    }

    const passValidate = (regPassRepeat) => {
        if (regPass !== regPassRepeat) {
            setRegPassAlert(language.values.signinScreen.passValidErr)
        } else {
            setRegPassAlert('')
        }
    }

    const auth = (email, pass) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email.toLowerCase(),
                pass: pass
            })
        }

        fetch(`${URL}/login`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data === 'Не верный Email или пароль') {
                    setLoading(false)
                    setAlert(language.values.signinScreen.wrongEmailOrPass)
                }
                else if (data === 'Вход разрешен') {
                    setLoading(false)
                    setAlert(language.values.signinScreen.enter)
                    navigation.navigate('Home', { language: language })
                }

            })
            .catch(err => {
                console.log(err);
                setLoading(false)
                setAlert(language.values.signinScreen.serverErr)
            })
    }

    const registration = (email, phone, regLogin, regPass) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: regLogin,
                pass: regPass,
                email: email.toLowerCase(),
                phone: phone,
                location: location
            })
        }

        fetch(`${URL}/registration`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data === 'Пользователь с таким Email уже существует') {
                    setLoading(false)
                    setRegAlert(language.values.signinScreen.regAlert1)
                }
                else if (data.res === 'Ошибка') {
                    setLoading(false)
                    setRegAlert(language.values.signinScreen.regErr)
                }
                else if (data === 'Регистрация пройдена, данные для входа отправлены на указанный Email') {
                    setLoading(false)
                    setRegAlert(language.values.signinScreen.regAlert2)
                }
            })
            .catch(err => {
                console.log(err);
                setLoading(false)
                setRegAlert(language.values.signinScreen.serverErr)
            })
    }

    return (
        <ScrollView style={styles.container}>

            {/* <TouchableOpacity onPress={() =>
                (language === RU) ? setLanguage(EN) : setLanguage(RU)

            }><Text>Press</Text></TouchableOpacity> */}
    <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '96%', }}>
        
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../src/img/coralnetlogo.png')}/>
                <View style={styles.line} />
                <Text style={styles.logoText} >Used Japanese Cars</Text>
            </View>
            <TouchableOpacity onPress={() =>
                (language === RU) ? setLanguage(EN) : setLanguage(RU)

            } style={{paddingHorizontal: 3, marginTop: 7 ,flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 60, height: 28 ,borderWidth: 1, borderColor: 'gray', borderRadius: 5,}}>
                {/* <Text style={{color: 'gray'}}>Language</Text> */}
                <Image style={{width: 30, height: 20}} resizeMode='contain' source={language.flag} />
                <AntDesign name="down" size={16} color="#168dd0" style={{marginTop: 3}}/>
            </TouchableOpacity>
    </View>
            

            <Image style={styles.mainImage} source={require('../src/img/mb-signin.png')} />
            <View style={{ paddingBottom: 10, alignItems: 'center' }}>
                <Text style={{ textAlign: 'center' }}>{regAlert}</Text>
            </View>
            <View style={styles.InputContainer}>
                {loading ? (
                    <ActivityIndicator
                        visible={loading}
                        size='large'
                        color='#168dd0'
                        style={{ marginBottom: 10 }}
                    />
                ) : (
                    (authEmail === '' || pass === '') ? (
                        <Text style={styles.textAlert}>{language.values.signinScreen.emailPassEnterErr}</Text>
                    ) : (
                        <Text style={{ marginBottom: 10, color: 'red' }}>{alert}</Text>
                    )
                )
                }

                <TextInput style={styles.input} onChangeText={(text) => { setAuthEmail(text) }} placeholder={language.values.signinScreen.enterEmail} />
                <TextInput style={styles.input} onChangeText={(text) => { setPass(text) }} placeholder={language.values.signinScreen.enterPass} secureTextEntry={secure} />
                <View style={styles.passVisible}>
                    <FontAwesome name={selected ? "check-circle-o" : "circle-o"} size={24} color="#168dd0" onPress={() => {
                        if (selected) {
                            setSelected(false)
                            setSecure(true)
                        } else {
                            setSelected(true)
                            setSecure(false)
                        }
                    }} />
                    <Text style={{ marginLeft: 10 }}>{language.values.signinScreen.showPass}</Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={() => {
                    if (authEmail !== '' || pass !== '') {
                        setLoading(true)
                        auth(authEmail, pass)
                        //navigation.navigate('Home')
                    }

                }}>
                    <Text style={styles.buttonText} >{language.values.signinScreen.signIn}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button1} onPress={() => {
                    setRegistrModal(true)
                }}>
                    <Text style={styles.buttonText1}>{language.values.signinScreen.registration}</Text>
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={registrModal}
                    onRequestClose={() => {
                        setRegistrModal(false);
                    }}
                >
                    <ScrollView style={{ backgroundColor: '#168dd0', width: '100%', height: '100%', marginTop: '95%', borderTopLeftRadius: 60, }}>
                        <View style={{ backgroundColor: '#fff', width: '100%', height: '100%', marginTop: 10, borderTopLeftRadius: 60 }}>
                            <TouchableOpacity
                                style={{ alignItems: 'center' }}
                                onPress={() => {
                                    setRegistrModal(false)
                                }}
                            >
                                <AntDesign name="down" size={22} color="#168dd0" />
                            </TouchableOpacity>
                            <View style={{ alignItems: 'center', marginTop: 5 }}>
                                <View style={{ marginBottom: 5 }}>
                                    <Text style={{ color: 'red' }}>{regEmailAlert} {regPassAlert} {allForm}</Text>
                                </View>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={(text) => {
                                        setEmail(text)
                                        emailValidate(text)
                                    }}
                                    placeholder={language.values.signinScreen.enterEmail}
                                />
                                <TextInput style={styles.input} onChangeText={(text) => { setPhone(text) }} placeholder={language.values.signinScreen.phoneNum} />
                                <TextInput style={styles.input} onChangeText={(text) => { setRegLogin(text) }} placeholder={language.values.signinScreen.login} maxLength={10} />
                                <TextInput style={styles.input} onChangeText={(text) => { setRegPass(text) }} placeholder={language.values.signinScreen.enterPass} maxLength={10} />
                                <TextInput style={styles.input} onChangeText={(text) => {
                                    setRegPassRepeat(text)
                                    passValidate(text)
                                }} placeholder={language.values.signinScreen.repeatPass} maxLength={10} secureTextEntry={secure} />
                                <View style={styles.passVisible}>
                                    <FontAwesome name={selected ? "check-circle-o" : "circle-o"} size={24} color="#168dd0" onPress={() => {
                                        if (selected) {
                                            setSelected(false)
                                            setSecure(true)
                                        } else {
                                            setSelected(true)
                                            setSecure(false)
                                        }
                                    }} />
                                    <Text style={{ marginLeft: 10 }}>{language.values.signinScreen.showPass}</Text>
                                </View>

                                <TouchableOpacity style={styles.button2} onPress={() => {
                                    if (email === '' || phone === '' || regLogin === '' || regPass === '' || regPassRepeat === '') {
                                        setAllForm(language.values.signinScreen.allFormErr1)
                                    } else if (regPassAlert !== '' || regEmailAlert !== '') {
                                        setAllForm(language.values.signinScreen.allFormErr2)
                                    } else {
                                        setAllForm('')
                                        setAlert('')
                                        setRegistrModal(false)
                                        setLoading(true)
                                        registration(email, phone, regLogin, regPass)
                                    }

                                }}>
                                    <Text style={styles.buttonText} >{language.values.signinScreen.registration}</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </ScrollView>
                </Modal>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        backgroundColor: '#fff'
    },
    logoContainer: {
        marginLeft: 20,
    },
    line: {
        width: '100%',
        borderBottomWidth: 2,
        borderBottomColor: '#168dd0',
    },
    logo: {
        marginTop: '5%',
        marginBottom: '2%',
        width: '100%',
        height: 55,
    },
    logoText: {
        fontSize: 20,
    },
    mainImage: {
        marginTop: 30,
        marginBottom: 50,
        height: 200,
        width: '90%',
    },
    input: {
        height: 40,
        width: '80%',
        borderWidth: 1,
        marginBottom: 20,
        borderColor: '#168dd0',
        paddingLeft: 10,
        backgroundColor: '#fff',
    },
    InputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        height: 40,
        width: '80%',
        borderWidth: 1,
        backgroundColor: '#168dd0',
        borderWidth: 0,
    },
    button1: {
        height: 40,
        width: '80%',
        borderWidth: 1,
        //backgroundColor: '#168dd0',
        borderWidth: 0,
        marginVertical: 20
    },
    button2: {
        height: 40,
        width: '80%',
        borderWidth: 1,
        backgroundColor: '#168dd0',
        borderWidth: 0,
        marginBottom: 40
    },
    buttonText1: {
        textAlign: 'center',
        marginTop: 10,
        color: '#168dd0',
    },
    buttonText: {
        textAlign: 'center',
        marginTop: 10,
        color: '#fff'
    },
    textAlert: {
        marginBottom: 10,

    },
    passVisible: {
        flex: 1,
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'flex-start',
        marginBottom: 20,
    }
})

