import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text, Image, ScrollView, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function questionScreen({ navigation }) {

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
                            Как покупать
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
                            Регистрация и поиск
                        </Text>

                    </View>
                    <Text style={[styles.subtextInfo, { color: color1 }]}>
                        Зарегистрируйтесь на нашем сайте auc.coral-net.jp и найдите нужный автомобиль, наш менеджер свяжется с вами по E-mail или WhatsApp и ответит на все ваши вопросы, произведет расчеты и покажет предложения.
                    </Text>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={[styles.subtextNumber, { color: color1 }]}>
                            2
                        </Text>
                        <Text style={[styles.subtextTitle, { color: color1 }]}>
                            Депозит
                        </Text>
                    </View>
                    <Text style={[styles.subtextInfo, { color: color1 }]}>
                        Залог подлежит 100% возврату. Независимо от результата аукциона, мы не касаемся вашего аукционного депозита. Вы можете использовать его для другого аукциона, применить возврат, включить в общую стоимость автомобиля или использовать его для оплаты другого автомобиля. все зависит от вас! Сумма депозита составляет 1500 долларов США для автомобилей стоимостью менее 20 000 долларов США. Для автомобилей стоимостью более 20 000 долларов США необходимая сумма залога должна составлять 10% от ожидаемой стоимости автомобиля. Его нужно отправить TT-переводом из любого местного банка.
                    </Text>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={[styles.subtextNumber, { color: color1 }]}>
                            3
                        </Text>
                        <Text style={[styles.subtextTitle, { color: color1 }]}>
                            Размещение ставки и результаты
                        </Text>
                    </View>
                    <Text style={[styles.subtextInfo, { color: color1 }]}>
                        После получения депозита с вами проконсультируют, как выбирать лоты, делать ставки, использовать статистику продаж и т.д.
                    </Text>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={[styles.subtextNumber, { color: color1 }]}>
                            4
                        </Text>
                        <Text style={[styles.subtextTitle, { color: color1 }]}>
                            Полная оплата автомобиля
                        </Text>
                    </View>
                    <Text style={[styles.subtextInfo, { color: color1 }]}>
                        Когда ставка выиграна, вам будет отправлен счет на оплату. Оплата должна быть отправлена ​​в течении 3-5 рабочих дней после покупки через TT-перевод. Как только ваш платеж поступит на наш счет, менеджер по логистике свяжется с вами и соберет все необходимые данные, чтобы организовать отправку вашего автомобиля в страну назначения.
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
                            Вопросы оплаты
                        </Text>
                        <AntDesign name={aFullText2 > 0 ? "up" : "down"} size={20} color="#168dd0" />
                    </View>

                </TouchableOpacity>
                <View style={[styles.subtextContainer, { height: aFullText2 }]}>
                    <View>
                        <Text style={[styles.subtextTitle, { color: color2 }]}>
                            Как мне произвести оплату?
                        </Text>
                        <Text style={[styles.subtextInfo2, { color: color2 }]}>
                            В настоящее время мы принимаем только банковские переводы (T/T). Мы не принимаем кредитные или дебетовые карты и другие способы оплаты.{'\n'}{'\n'}Примечание. Плата за перевод оплачивается клиентом.
                        </Text>
                        <Text style={[styles.subtextTitle, { color: color2 }]}>
                            Куда нужно отправить депозит?
                        </Text>
                        <Text style={[styles.subtextInfo2, { color: color2 }]}>
                            Детали будут отправлены по запросу вашим личным помощником.
                        </Text>
                        <Text style={[styles.subtextTitle, { color: color2 }]}>
                            В какой валюте можно произвести оплату?
                        </Text>
                        <Text style={[styles.subtextInfo2, { color: color2 }]}>
                            Вы можете отправить нам оплату в долларах США, японских йенах или евро.
                        </Text>
                        <Text style={[styles.subtextTitle, { color: color2 }]}>
                            Вы принимаете аккредитив?
                        </Text>
                        <Text style={[styles.subtextInfo2, { color: color2 }]}>
                            Мы принимаем только банковские переводы и не принимаем аккредитивы.
                        </Text>
                        <Text style={[styles.subtextTitle, { color: color2 }]}>
                            Какие условия оплаты?
                        </Text>
                        <Text style={[styles.subtextInfo2, { color: color2 }]}>
                            Перед отправкой автомобиль должен быть оплачен на 100%. При покупке автомобиля на аукционах полная оплата требуется в течение 3-5 рабочих дней, включая дату покупки.
                        </Text>
                        <Text style={[styles.subtextTitle, { color: color2 }]}>
                            Есть ли возможность кредитования?
                        </Text>
                        <Text style={[styles.subtextInfo2, { color: color2 }]}>
                            Нет, мы отправим ваш автомобиль только после того, как банк подтвердит вашу полную оплату.
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
                            Оформление и доставка
                        </Text>
                        <AntDesign name={aFullText3 > 0 ? "up" : "down"} size={20} color="#168dd0" />
                    </View>
                </TouchableOpacity>
                <View style={[styles.subtextContainer, { height: aFullText3 }]}>
                    <View>
                        <Text style={[styles.subtextTitle, { color: color3 }]}>
                        Сколько стоит морская доставка?
                        </Text>
                        <Text style={[styles.subtextInfo2, { color: color3 }]}>
                        Морские перевозки могут быть изменены в зависимости от цен на нефть и обменных курсов валют. Это также зависит от сезона, размера транспортного средства, типа перевозки, будь то контейнер 20-40 футов для нескольких транспортных средств или RORO в случае только одного. Вы всегда МОЖЕТЕ проконсультироваться о наилучшем и наиболее разумном способе доставки вашего автомобиля перед покупкой.
                        </Text>
                        <Text style={[styles.subtextTitle, { color: color3 }]}>
                        Гарантирована ли доставка?
                        </Text>
                        <Text style={[styles.subtextInfo2, { color: color3 }]}>
                        Стоимость страховки не включена в окончательную цену, но груз может быть застрахован за дополнительную плату.
                        </Text>
                        <Text style={[styles.subtextTitle, { color: color3 }]}>
                        Сколько времени нужно судну, чтобы прибыть в порт?
                        </Text>
                        <Text style={[styles.subtextInfo2, { color: color3 }]}>
                        Это зависит от порта назначения. Как правило, после отправки из Японии доставка в далекие порты занимает около трех-пяти недель. У нас есть связи с несколькими судоходными компаниями.
                        </Text>
                        <Text style={[styles.subtextTitle, { color: color3 }]}>
                        Когда моя машина будет отправлена?
                        </Text>
                        <Text style={[styles.subtextInfo2, { color: color3 }]}>
                        Ваш автомобиль отправляется на отгрузку, как только вы вносите платеж в соответствии с ранее согласованными условиями оплаты.
                        </Text>
                        <Text style={[styles.subtextTitle, { color: color3 }]}>
                        Информируются ли клиенты о процессе отгрузки?
                        </Text>
                        <Text style={[styles.subtextInfo2, { color: color3 }]}>
                        Да, Coral-Network всегда информирует своих клиентов о доставке автомобилей и отправке документов.
                        </Text>
                        <Text style={[styles.subtextTitle, { color: color3 }]}>
                        Какие документы я получу?
                        </Text>
                        <Text style={[styles.subtextInfo2, { color: color3 }]}>
                        BL (Landing Bill of Landing - заверенная копия или оригинал){'\n'}{'\n'}Счет-фактура / Счет{'\n'}{'\n'}Экспортный сертификат (перевод на английский только при необходимости за дополнительную плату)
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

