import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';



export default function HomeScreen({ navigation, route }) {
    const {login, pass} = route.params
    return (
        <ScrollView style={{backgroundColor: '#fff'}} >

        <View style={styles.buttonList}>
        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Auction', {
            login: login,
            pass: pass
        })}>
                <Text style={styles.buttonsText}>Аукционы</Text>
                <Ionicons name='md-car-sport-sharp' size={50} color='#168dd0' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('followScreen', {
                login: login,
                pass: pass,
            })}>
                <Text style={styles.buttonsText}>Автоматический поиск</Text>
                <Ionicons name="star-outline" size={50} color="#168dd0" />
            </TouchableOpacity>       
        </View>

        <View style={styles.buttonList} >
            <TouchableOpacity style={styles.button1} onPress={() => {Linking.openURL('https://instagram.com/auc.coral_net.jp?utm_medium=copy_link')}}>
                <Text style={styles.buttonsText}>Мы в Instagram</Text>
                <Ionicons name="md-logo-instagram" size={50} color="#168dd0" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('aboutusScreen')} >
                <Text style={styles.buttonsText}>О Нас</Text>
                <Ionicons name="md-people" size={50} color="#168dd0" />
            </TouchableOpacity>       
        </View>

        <View style={styles.buttonList} >
            <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('calculateScreen')} >
                <Text style={styles.buttonsText}>Калькулятор стоимости</Text>
                <Ionicons name="md-calculator" size={50} color="#168dd0" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('questionScreen')}>
                <Text style={styles.buttonsText}>Частые вопросы</Text>
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
        shadowOffset: {width: 0, height: 2}
        
    }, 
    buttonsText: {
        textAlign: 'center',
        paddingTop: 20,
        fontSize: 16,
        paddingHorizontal: 5,
    }
})