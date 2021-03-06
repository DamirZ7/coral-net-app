import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text, SafeAreaView, ScrollView, ActivityIndicator, FlatList, SafeAreaViewBase } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import URL from '../keys/keys'

export default function followScreen({ navigation, route }) {

    const { language } = route.params

    useEffect(() => {
        navigation.setOptions({
            title: language.values.followScreen.autoSearch,
        })
    }, [language])

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [alert, setAlert] = useState()
    const [delMessage, setDelMessage] = useState()
    
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }
        fetch(`${URL}/follow`, requestOptions)
            .then(response => response.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
                setLoading(false)
                setAlert('Ошибка на сервере')
            })
    }, [alert, delMessage, loading])

    const deleteFollow = (id) => {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }
        fetch(`${URL}/follow/remove/${id}`, requestOptions)
            .then(response => response.json())
            .then(message => {
                console.log(message)
                setDelMessage(message)
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
                setLoading(false)
                setAlert('Ошибка на сервере')
            })
    }

    const renderFollowItems = ({ item }) => {
        const responseDate = item.date.split('.')
        const date = responseDate[0].split('T')

        const id = item._id
        const car = item.cars[0]
        const carName = car.car
        
       
        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 15, marginTop: 5 }}>
                <TouchableOpacity style={{ backgroundColor: '#fff', width: '75%', height: 60, elevation: 10, alignItems: 'center', justifyContent: 'center' }} onPress={() => {
                    navigation.navigate('followOneScreen', {
                        id: id,
                        language: language
                    })
                }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{ marginRight: 15 }}>{date[0]}</Text>
                        <Text>{date[1]}</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                        <Text>{carName}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: '#fff', width: '15%', height: 60, elevation: 10, alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => {
                        setLoading(true)
                        deleteFollow(id)
                    }}
                >
                    <View>
                        <FontAwesome name="trash-o" size={24} color="#168dd0" />
                    </View>
                </TouchableOpacity>
            </View>

        )
    }
    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1}}>
            
            <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', height: 80, marginTop: 10, marginBottom: 25 }}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Auction', {
                        follow: true,
                        language: language
                    })
                }} style={{ width: '50%', height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderRadius: 0, elevation: 10 }}>
                    <FontAwesome name="plus-square-o" size={30} color="#168dd0" />
                    <Text style={{ marginTop: 10 }}>{language.values.followScreen.newReq}</Text>
                </TouchableOpacity>
            </View>
            <View>
                {loading ?
                    (
                        <ActivityIndicator
                            visible={loading}
                            size='large'
                            color='#168dd0'
                            style={{ marginBottom: 15 }}
                        />
                    ) : (
                        <View>
                            <FlatList
                                data={data}
                                horizontal={false}
                                renderItem={renderFollowItems}
                                keyExtractor={(item) => item._id.toString()}
                            />
                        </View>
                    )
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

