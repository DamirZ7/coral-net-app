import React, { useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text, Image, ScrollView, StatusBar, SafeAreaView } from 'react-native';

export default function aboutusScreen({ navigation, route }) {

    const { language } = route.params

    useEffect(() => {
        navigation.setOptions({
            title: language.values.aboutusScreen.aboutUs,
        })
    }, [language])

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <View>
                    <Text style={styles.h1}>{language.values.aboutusScreen.aboutCompany}</Text>
                    <Text style={styles.infoText}>{language.values.aboutusScreen.text1}</Text>
                    <View style={styles.imgContainer}>
                        <Image source={require('../Data/images/AboutUs000.jpg')} style={styles.image} />
                    </View>

                    <Text style={styles.infoText}>{language.values.aboutusScreen.text2}
                    </Text>
                    <View style={styles.imgContainer}>
                        <Image source={require('../Data/images/AboutUs03.jpg')} style={styles.image} />
                    </View>

                    <Text style={styles.h1}>{language.values.aboutusScreen.mission}</Text>
                    <Text style={styles.infoText}>
                        {language.values.aboutusScreen.text3}
                    </Text>

                    <View style={styles.imgContainer}>
                        <Image source={require('../Data/images/Slide2-auction-4.jpg')} style={styles.image} />
                    </View>

                    <Text style={styles.infoText}>
                        {language.values.aboutusScreen.text4}
                    </Text>

                    <Text style={styles.h1}>{language.values.aboutusScreen.lang}</Text>
                    <Text style={styles.infoText}>
                        {language.values.aboutusScreen.langText}
                    </Text>

                    <Text style={styles.h1}>{language.values.aboutusScreen.contact}</Text>
                    <Text style={styles.infoText}>
                       {language.values.aboutusScreen.contactText}
                    </Text>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    h1: {
        color: '#168dd0',
        fontSize: 18,
        marginLeft: 15,
        marginVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#168dd0',
        width: '90%',
        paddingBottom: 5

    },
    infoText: {
        marginHorizontal: 15,
        fontSize: 16,
        textAlign: 'justify'
    },
    image: {
        width: '90%',
        height: 300,

    },
    imgContainer: {
        paddingVertical: 10,
        alignItems: 'center',
    }
})

