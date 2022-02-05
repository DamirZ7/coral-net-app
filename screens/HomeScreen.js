import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation, route }) {
    const { language } = route.params

    useEffect(() => {
        navigation.setOptions({
            title: language.values.homeScreen.home,
        })
    }, [language])

    return (
        <ScrollView style={{ backgroundColor: '#fff' }} >

            <View style={styles.buttonList}>
                <TouchableOpacity
                    style={styles.button1}
                    onPress={() => {
                        const follow = false
                        navigation.navigate('Auction', {
                            follow: follow,
                            language: language
                        })
                    }}>
                    <Text style={styles.buttonsText}>{language.values.homeScreen.auctions}</Text>
                    <Ionicons name='md-car-sport-sharp' size={50} color='#168dd0' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('followScreen', {language: language})}>
                    <Text style={styles.buttonsText}>{language.values.homeScreen.autoSearch}</Text>
                    <Ionicons name="star-outline" size={50} color="#168dd0" />
                </TouchableOpacity>
            </View>

            <View style={styles.buttonList} >
                <TouchableOpacity style={styles.button1} onPress={() => { Linking.openURL('https://instagram.com/auc.coral_net.jp?utm_medium=copy_link') }}>
                    <Text style={styles.buttonsText}>{language.values.homeScreen.instagram}</Text>
                    <Ionicons name="md-logo-instagram" size={50} color="#168dd0" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('aboutusScreen', {language: language})} >
                    <Text style={styles.buttonsText}>{language.values.homeScreen.aboutUs}</Text>
                    <Ionicons name="md-people" size={50} color="#168dd0" />
                </TouchableOpacity>
            </View>

            <View style={styles.buttonList} >
                <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('calculateScreen', {language: language})} >
                    <Text style={styles.buttonsText}>{language.values.homeScreen.calculator}</Text>
                    <Ionicons name="md-calculator" size={50} color="#168dd0" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('questionScreen', {language: language})}>
                    <Text style={styles.buttonsText}>{language.values.homeScreen.questions}</Text>
                    <Ionicons name="help-sharp" size={50} color="#168dd0" />
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    buttonList: {
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 25

    },
    button1: {
        backgroundColor: '#fff',
        height: 180,
        width: 180,
        borderRadius: 0,
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        shadowColor: '#168dd0',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 }

    },
    buttonsText: {
        textAlign: 'center',
        paddingTop: 20,
        fontSize: 16,
        paddingHorizontal: 5,
    }
})