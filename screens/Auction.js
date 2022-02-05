import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import carBrand from '../Data/carBrand';


export default function Auction({ navigation, route }) {
    const {follow, language} = route.params

    useEffect(() => {
        navigation.setOptions({
            title: language.values.auctionScreen.selectBrand,
        })
    }, [language])

    const [listOfBrands, setListOfBrands] = useState(carBrand)
    const [search, setSearch] = useState('')
    const [filteredData, setFilteredData] = useState(carBrand)

    const searchFilteredFunction = (text) => {
        if (text) {
            const newDate = listOfBrands.filter((item) => {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            setFilteredData(newDate)
            setSearch(text)

        } else {
            setFilteredData(listOfBrands)
            setSearch(text)
        }
    }


    return (
        <ScrollView style={{ backgroundColor: '#fff' }} >

            <View style={styles.container} >
                <Ionicons
                    name="search"
                    size={30}
                    color="#168dd0" />
                <TextInput
                    style={styles.search}
                    placeholder={language.values.auctionScreen.search}
                    onChangeText={(text) => searchFilteredFunction(text)}
                    value={search} />
            </View>

            <View>
                <FlatList
                    data={filteredData}
                    horizontal={true}
                    renderItem={({ item }) => (

                        <TouchableOpacity style={styles.carList} onPress={() => {
                            const carsValue = item.value

                            navigation.navigate('CarsModels', {
                                carsId: carsValue,
                                follow: follow,
                                language: language,
                            })

                        }} >
                            <Image style={styles.image} source={item.img} resizeMode='contain' />
                            <Text style={styles.text}>{item.title}</Text>
                        </TouchableOpacity>

                    )}
                    keyExtractor={(item, index) => index.toString()}
                />

            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 15,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    search: {
        paddingLeft: 10,
        borderWidth: 1,
        borderRadius: 9,
        borderColor: 'grey',
        width: '80%',
        height: '100%',
        marginLeft: 10,

    },
    carList: {
        marginVertical: 20,
        marginHorizontal: 8,
        height: 150,
        width: 120,
        backgroundColor: '#fff',
        elevation: 10,
        borderRadius: 0,
        alignItems: 'center',
        shadowColor: '#168dd0',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 2}

    },
    image: {
        marginVertical: 25,
        width: 60,
        height: 60,
    },
    text: {
        marginTop: 0
    },
})

