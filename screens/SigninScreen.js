import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text, Image, ScrollView, ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function SigninScreen({ navigation }) {

    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const [alert, setAlert] = useState('')
    const [loading, setLoading] = useState(false)
    const [selected, setSelected] = useState(false)
    const [secure, setSecure] = useState(true)

    const auth = (login, pass) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: login,
                pass: pass
            })
        }

        fetch('http://192.168.0.103:5050/auth', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.res === 'логин неверный') {
                    setLoading(false)
                    setAlert(data.res)
                }
                else if (data.res === 'пароль неверный') {
                    setLoading(false)
                    setAlert(data.res)
                }
                else if (data.res === '') {
                    setLoading(false)
                    setAlert('')
                    navigation.navigate('Home', {
                        login: login,
                        pass: pass
                    })
                    
                } 
            })
            .catch(err => {
                console.log(err);
                setLoading(false)
                setAlert('Ошибка на сервере')
            })
    }

    return (
        <ScrollView style={styles.container}>

            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../src/img/coralnetlogo.png')} />
                <View style={styles.line} />
                <Text style={styles.logoText} >Used Japanese Cars</Text>
            </View>

            <Image style={styles.mainImage} source={require('../src/img/Camry70.png')} />

            <View style={styles.InputContainer}>
                {loading ? (
                    <ActivityIndicator
                        visible={loading}
                        size='large'
                        color='#168dd0'
                        style={{ marginBottom: 10 }}
                    />
                ) : (
                    (login === '' || pass === '') ? (
                    <Text style={styles.textAlert}>Введите логин и пароль</Text>
                    ) : (
                    <Text style={{ marginBottom: 10, color: 'red' }}>{alert}</Text>
                    )
                )
                }

                <TextInput style={styles.input} onChangeText={(text) => { setLogin(text) }} placeholder='Введите логин' />
                <TextInput style={styles.input} onChangeText={(text) => { setPass(text) }} placeholder='Введите пароль' secureTextEntry={secure}/>
                <View style={styles.passVisible}>
                <FontAwesome name={selected ? "check-circle-o" : "circle-o"} size={24} color="#168dd0" onPress={() => {
                    if (selected) {
                        setSelected(false)
                        setSecure(true)
                    } else {
                        setSelected(true)
                        setSecure(false)
                    }
                }}/>
                <Text style={{marginLeft: 10}}>Показать пароль</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => {
                    setLoading(true)
                    auth(login, pass)
                }}>
                    <Text style={styles.buttonText} >ВОЙТИ</Text>
                </TouchableOpacity>
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
        width: '50%',
        borderBottomWidth: 2,
        borderBottomColor: '#168dd0',
    },
    logo: {
        marginTop: '5%',
        marginBottom: '2%',
        width: '50%',
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

