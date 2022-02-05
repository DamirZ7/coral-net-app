import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import carModel from '../Data/carModel';


export default function CarsModelsScreen({ navigation, route }) {

    const { carsId, follow, language } = route.params

    useEffect(() => {
        navigation.setOptions({
            title: language.values.modelScreen.selectModel,
        })
    }, [language])

    const carsModelData = carModel.filter((it) => {
        if (it.value === carsId) {
            return it
        }
    })
    const filterModel = carsModelData.map((it) => it.title).flat()
    const [listOfModels, setListOfModels] = useState(carsModelData)
    const [searchModel, setSearchModel] = useState('')
    const [filteredDataModel, setFilteredDataModel] = useState(filterModel)




    const searchFilteredModelFunction = (text) => {
        if (text) {

            const newDateModel = filterModel.filter((it) => {
                const itemData = it ? it.toUpperCase() : ''.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })

            setFilteredDataModel(newDateModel)
            setSearchModel(text)
        } else {
            setFilteredDataModel(filterModel)
            setSearchModel(text)
        }

    }

    const modelsListView = ({ item }) => {

        return (
            <TouchableOpacity style={styles.carList} onPress={() => {
                const carsModel = item

                navigation.navigate('SettingsScreen', {
                    carsMod: carsModel,
                    carsBarnd: carsId,
                    follow: follow,
                    language: language
                })
            }} >
                <Text style={styles.text} >{item}</Text>
            </TouchableOpacity>
        )


    }

    return (
        <SafeAreaView style={{ paddingBottom: 100 }} >

            <View style={styles.container} >
                <Ionicons
                    name="search"
                    size={30}
                    color="#168dd0" />
                <TextInput
                    style={styles.search}
                    placeholder={language.values.modelScreen.search}
                    onChangeText={(text) => searchFilteredModelFunction(text)}
                    value={searchModel} />
            </View>

            <View style={styles.list}>
                <FlatList
                    data={filteredDataModel}
                    horizontal={false}
                    renderItem={modelsListView}
                    keyExtractor={(item, index) => index.toString()}
                />

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 15,
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff'

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
        marginTop: 10,
        marginHorizontal: 10,
        height: 40,
        width: '95%',
        backgroundColor: '#fff',
        elevation: 10,
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#168dd0',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 }

    },
    list: {
        paddingTop: 5,
        backgroundColor: '#fff',

    },
})

