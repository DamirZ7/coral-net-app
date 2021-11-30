import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text, Image, ScrollView, StatusBar, SafeAreaView } from 'react-native';

export default function aboutusScreen({ navigation }) {

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <View>
                    <Text style={styles.h1}>О Компании</Text>
                    <Text style={styles.infoText}>Coral Network - ведущая торговая компания, базирующаяся в Осаке, втором по величине деловом центре Японии.</Text>
                    <View style={styles.imgContainer}>
                        <Image source={require('../Data/images/AboutUs000.jpg')} style={styles.image} />
                    </View>

                    <Text style={styles.infoText}>Наш опыт заключается в продаже высококачественных товаров, произведенных в Японии, от брокера на аукционе подержанных автомобилей в Японии до поставщика новых автомобилей, лодок и хозяйственных товаров.
                        {'\n'}{'\n'}Мы предлагаем нашим клиентам прямой доступ к японским автомобильным аукционам, японскому рынку автохимии и товаров для дома.
                        На протяжении многих лет мы оттачивали наши навыки экспорта и доставки, гарантируя, что наши клиенты получают беспрепятственный и удовлетворительный опыт покупки товаров из Японии. {'\n'}{'\n'}Хорошо обученный персонал Coral Network понимает потребности клиентов, может свободно общаться практически на всех основных мировых языках и поэтому обеспечивает лучшее и чрезвычайно вежливое обслуживание.
                        Гибкие методы оплаты и бесперебойная быстрая доставка заказанных автомобилей и товаров ежедневно вносят свой вклад в наше надежное имя в мировой торговой индустрии.
                    </Text>
                    <View style={styles.imgContainer}>
                        <Image source={require('../Data/images/AboutUs03.jpg')} style={styles.image} />
                    </View>

                    <Text style={styles.h1}>Наша Миссия</Text>
                    <Text style={styles.infoText}>
                        Видение Coral Network - помогать профессиональным брокерам, автосалонам и частным лицам со всего мира в поиске автомобилей, лодок и химических товаров высшего качества японского производства. {'\n'}{'\n'}Coral Network всегда стремится к построению долгосрочных отношений с клиентами по всему миру, уделяя особое внимание предоставлению отличных и исключительных услуг, поставке товаров Made in Japan в хорошем состоянии, подержанных автомобилей японского рынка, новых автомобилей и лодок и других товаров по честным разумным ценам в сочетании с быстрой доставкой.
                    </Text>

                    <View style={styles.imgContainer}>
                        <Image source={require('../Data/images/Slide2-auction-4.jpg')} style={styles.image} />
                    </View>

                    <Text style={styles.infoText}>
                        Мы поставляем нашим клиентам в Азии, Океании, Европе и Африке подержанные автомобили высокого качества по самым низким ценам. {'\n'}{'\n'}
                        Доступ к аукционам по всей Японии. Coral Net более двух десятилетий экспортирует высококачественные подержанные и новые автомобили в ряд стран Европы, Новой Зеландии, Сингапура, России, Австралии, Ямайки, Мальдивских островов, Маврикия, Кипра, Ботсваны, Суринама, Кении, Танзании, Уганда, Замбия, Зимбабве, Антигуа и Барбуда, Сент-Винсент и Гренадины, Тринидад и Тобаго, Южная Африка, ОАЭ, Нидерланды, Великобритания и многие другие.
                    </Text>

                    <Text style={styles.h1}>Доступные языки</Text>
                    <Text style={styles.infoText}>
                        Русский,{'\n'}{'\n'}Английский,{'\n'}{'\n'}Японский,{'\n'}{'\n'}Испанский{'\n'}
                    </Text>

                    <Text style={styles.h1}>Контакты</Text>
                    <Text style={styles.infoText}>
                        Головной офис: {'\n'}{'\n'}
                        Tel.: +81 72 72 61 200{'\n'}
                        Fax: +81 72 72 61 202{'\n'}{'\n'}
                        Департамент продаж:{'\n'}{'\n'}
                        E-mail: info@coral-net.jp{'\n'}
                        WhatsApp: +81 80 1119 2255{'\n'}
                        WhatsApp: +81 345 78 00 66{'\n'}
                        WhatsApp: +81 645 60 52 88{'\n'}{'\n'}
                        Департамент логистики:{'\n'}{'\n'}
                        E-mail: logistic@coral-net.jp{'\n'}
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

