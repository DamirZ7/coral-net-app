import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text, Image, ScrollView, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function questionScreen({ navigation, route }) {

    const { language } = route.params

    useEffect(() => {
        navigation.setOptions({
            title: language.values.faqsScreen.faqs,
        })
    }, [language])

    const [aFullText1, setAFullText1] = useState(0)
    const [color1, setColor1] = useState('white')

    const [aFullText2, setAFullText2] = useState(0)
    const [color2, setColor2] = useState('white')

    const [aFullText3, setAFullText3] = useState(0)
    const [color3, setColor3] = useState('white')

    return (
        <ScrollView style={{ backgroundColor: '#fff' }} >

            <View style={styles.container}>

                <TouchableOpacity style={styles.buttons} onPress={() => {
                    if (aFullText1 > 0) {
                        setAFullText1(0)
                    } else {
                        setAFullText1(800)
                    }
                    if (color1 === 'white') {
                        setColor1('black')
                    } else {
                        setColor1('white')
                    }
                }}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            {language.values.faqsScreen.howToBuy}
                        </Text>
                        <AntDesign name={aFullText1 > 0 ? "up" : "down"} size={20} color="#168dd0" />
                    </View>

                </TouchableOpacity>

                <View style={[styles.subtextContainer, { height: aFullText1 }]}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={[styles.subtextNumber, { color: color1 }]}>
                            1
                        </Text>
                        <Text style={[styles.subtextTitle, { color: color1 }]}>
                            {language.values.faqsScreen.text1}
                        </Text>

                    </View>
                    <Text style={[styles.subtextInfo, { color: color1 }]}>
                        {language.values.faqsScreen.text2}
                    </Text>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={[styles.subtextNumber, { color: color1 }]}>
                            2
                        </Text>
                        <Text style={[styles.subtextTitle, { color: color1 }]}>
                            {language.values.faqsScreen.text3}
                        </Text>
                    </View>
                    <Text style={[styles.subtextInfo, { color: color1 }]}>
                        {language.values.faqsScreen.text4}
                    </Text>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={[styles.subtextNumber, { color: color1 }]}>
                            3
                        </Text>
                        <Text style={[styles.subtextTitle, { color: color1 }]}>
                            {language.values.faqsScreen.text5}
                        </Text>
                    </View>
                    <Text style={[styles.subtextInfo, { color: color1 }]}>
                        {language.values.faqsScreen.text6}
                    </Text>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={[styles.subtextNumber, { color: color1 }]}>
                            4
                        </Text>
                        <Text style={[styles.subtextTitle, { color: color1 }]}>
                            {language.values.faqsScreen.text7}
                        </Text>
                    </View>
                    <Text style={[styles.subtextInfo, { color: color1 }]}>
                        {language.values.faqsScreen.text8}
                    </Text>
                </View>

                <TouchableOpacity style={styles.buttons} onPress={() => {
                    if (aFullText2 > 0) {
                        setAFullText2(0)
                    } else {
                        setAFullText2(650)
                    }
                    if (color2 === 'white') {
                        setColor2('black')
                    } else {
                        setColor2('white')
                    }
                }}>
                    <View style={styles.textContainer} >
                        <Text style={styles.text} >
                            {language.values.faqsScreen.payment}
                        </Text>
                        <AntDesign name={aFullText2 > 0 ? "up" : "down"} size={20} color="#168dd0" />
                    </View>

                </TouchableOpacity>
                <View style={[styles.subtextContainer, { height: aFullText2 }]}>
                    <View>
                        <Text style={[styles.subtextTitle, { color: color2 }]}>
                            {language.values.faqsScreen.text9}
                        </Text>
                        <Text style={[styles.subtextInfo2, { color: color2 }]}>
                            {language.values.faqsScreen.text10}
                        </Text>
                        <Text style={[styles.subtextTitle, { color: color2 }]}>
                            {language.values.faqsScreen.text11}
                        </Text>
                        <Text style={[styles.subtextInfo2, { color: color2 }]}>
                            {language.values.faqsScreen.text12}
                        </Text>
                        <Text style={[styles.subtextTitle, { color: color2 }]}>
                            {language.values.faqsScreen.text13}
                        </Text>
                        <Text style={[styles.subtextInfo2, { color: color2 }]}>
                            {language.values.faqsScreen.text14}
                        </Text>
                        <Text style={[styles.subtextTitle, { color: color2 }]}>
                            {language.values.faqsScreen.text15}
                        </Text>
                        <Text style={[styles.subtextInfo2, { color: color2 }]}>
                            {language.values.faqsScreen.text16}
                        </Text>
                        <Text style={[styles.subtextTitle, { color: color2 }]}>
                            {language.values.faqsScreen.text17}
                        </Text>
                        <Text style={[styles.subtextInfo2, { color: color2 }]}>
                            {language.values.faqsScreen.text18}
                        </Text>
                        <Text style={[styles.subtextTitle, { color: color2 }]}>
                            {language.values.faqsScreen.text19}
                        </Text>
                        <Text style={[styles.subtextInfo2, { color: color2 }]}>
                            {language.values.faqsScreen.text20}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.buttons} onPress={() => {
                    if (aFullText3 > 0) {
                        setAFullText3(0)
                    } else {
                        setAFullText3(850)
                    }
                    if (color3 === 'white') {
                        setColor3('black')
                    } else {
                        setColor3('white')
                    }
                }}>
                    <View style={styles.textContainer} >
                        <Text style={styles.text} >
                            {language.values.faqsScreen.shiping}
                        </Text>
                        <AntDesign name={aFullText3 > 0 ? "up" : "down"} size={20} color="#168dd0" />
                    </View>
                </TouchableOpacity>
                <View style={[styles.subtextContainer, { height: aFullText3 }]}>
                    <View>
                        <Text style={[styles.subtextTitle, { color: color3 }]}>
                        {language.values.faqsScreen.text21}
                        </Text>
                        <Text style={[styles.subtextInfo2, { color: color3 }]}>
                        {language.values.faqsScreen.text22}
                        </Text>
                        <Text style={[styles.subtextTitle, { color: color3 }]}>
                        {language.values.faqsScreen.text23}
                        </Text>
                        <Text style={[styles.subtextInfo2, { color: color3 }]}>
                        {language.values.faqsScreen.text24}
                        </Text>
                        <Text style={[styles.subtextTitle, { color: color3 }]}>
                        {language.values.faqsScreen.text25}
                        </Text>
                        <Text style={[styles.subtextInfo2, { color: color3 }]}>
                        {language.values.faqsScreen.text26}
                        </Text>
                        <Text style={[styles.subtextTitle, { color: color3 }]}>
                        {language.values.faqsScreen.text27}
                        </Text>
                        <Text style={[styles.subtextInfo2, { color: color3 }]}>
                        {language.values.faqsScreen.text28}
                        </Text>
                        <Text style={[styles.subtextTitle, { color: color3 }]}>
                        {language.values.faqsScreen.text29}
                        </Text>
                        <Text style={[styles.subtextInfo2, { color: color3 }]}>
                        {language.values.faqsScreen.text30}
                        </Text>
                        <Text style={[styles.subtextTitle, { color: color3 }]}>
                        {language.values.faqsScreen.text31}
                        </Text>
                        <Text style={[styles.subtextInfo2, { color: color3 }]}>
                        {language.values.faqsScreen.text32}
                        </Text>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {

    },
    buttons: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        marginVertical: 5,
        height: 60,
        justifyContent: 'center',
        elevation: 7,
        shadowColor: '#168dd0',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 2}
    },
    subtextContainer: {
        width: '100%',
        paddingHorizontal: 10,


    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    text: {
        fontSize: 16,
    },
    subtextNumber: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtextTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: 7,

    },
    subtextInfo: {
        textAlign: 'center',
        paddingBottom: 20
    },
    subtextInfo2: {
        textAlign: 'justify',
        paddingBottom: 20
    }
})

