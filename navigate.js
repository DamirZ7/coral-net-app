import React from "react";
import { HomeScreen, 
    SigninScreen, 
    Auction, 
    CarsModelsScreen, 
    carsResultsScreen, 
    SettingsScreen, 
    aboutusScreen, 
    questionScreen, 
    calculateScreen, 
    calcResultScreen,
    selectedCarScreen,
    followScreen,
    followOneScreen
} from "./screens";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator()

export default function Navigate() {

    const logout = (navigation) => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }
        fetch(`http://52.15.47.185:5050/auth/logout`, requestOptions)
            .then(response => response.json())
            .then(message => {
                console.log(message)
                navigation.navigate('Signin')
                
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Signin'
                    component={SigninScreen}
                    options={{
                        title: 'Вход',
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                    options={({ navigation }) => ({
                        title: 'Главная',
                        headerLeft: null,
                        headerRight: () => (
                        <Ionicons name="exit-outline" size={28} color="#168dd0" onPress={() => logout(navigation)} style={{marginRight: 15}}/>
                        )
                    })}
                />
                <Stack.Screen
                    name='Auction'
                    component={Auction}
                    options={{ title: 'Выберите марку автомобиля' }}
                />
                <Stack.Screen
                    name='CarsModels'
                    component={CarsModelsScreen}
                    options={({ navigation }) => ({
                        title: 'Выберите модель',
                        headerRight: () => (
                        <FontAwesome name="home" size={26} color="#168dd0" onPress={() => navigation.navigate('Home')} style={{marginRight: 15}}/>
                        )
                    })}
                />
                <Stack.Screen
                    name='SettingsScreen'
                    component={SettingsScreen}
                    //options={{ title: 'Дополнительные параметры' }}
                    options={({ navigation }) => ({
                        title: 'Параметры поиска',
                        headerRight: () => (
                        <FontAwesome name="home" size={26} color="#168dd0" onPress={() => navigation.navigate('Home')} style={{marginRight: 15}}/>
                        )
                    })}
                />
                <Stack.Screen
                    name='carsResultsScreen'
                    component={carsResultsScreen}
                    //options={{ title: 'Результаты поиска' }}
                    options={({ navigation }) => ({
                        title: 'Результаты поиска',
                        headerRight: () => (
                        <FontAwesome name="home" size={26} color="#168dd0" onPress={() => navigation.navigate('Home')} style={{marginRight: 15}}/>
                        )
                    })}
                />
                <Stack.Screen
                    name='aboutusScreen'
                    component={aboutusScreen}
                    options={{ title: 'О нас' }}
                />
                 <Stack.Screen
                    name='questionScreen'
                    component={questionScreen}
                    options={{ title: 'Частые вопросы' }}
                />
                 <Stack.Screen
                    name='calculateScreen'
                    component={calculateScreen}
                    options={{ title: 'Калькулятор стоимости' }}
                />
                 <Stack.Screen
                    name='calcResultScreen'
                    component={calcResultScreen}
                    //options={{ title: 'Результаты расчета' }}
                    options={({ navigation }) => ({
                        title: 'Результаты расчета',
                        headerRight: () => (
                        <FontAwesome name="home" size={26} color="#168dd0" onPress={() => navigation.navigate('Home')} style={{marginRight: 15}}/>
                        )
                    })}
                />
                 <Stack.Screen
                    name='selectedCarScreen'
                    component={selectedCarScreen}
                    //options={{title: 'Подробная информация'}}
                    options={({ navigation }) => ({
                        title: 'Подробная информация',
                        headerRight: () => (
                        <FontAwesome name="home" size={26} color="#168dd0" onPress={() => navigation.navigate('Home')} style={{marginRight: 15}}/>
                        )
                    })}                    
                />
                <Stack.Screen
                    name='followScreen'
                    component={followScreen}
                    options={{title: 'Избранное'}}                    
                />
                 <Stack.Screen
                    name='followOneScreen'
                    component={followOneScreen}
                    //options={{title: 'Результаты поиска'}}
                    options={({ navigation }) => ({
                        title: 'Результаты поиска',
                        headerRight: () => (
                        <FontAwesome name="home" size={26} color="#168dd0" onPress={() => navigation.navigate('Home')} style={{marginRight: 15}}/>
                        )
                    })}                   
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}