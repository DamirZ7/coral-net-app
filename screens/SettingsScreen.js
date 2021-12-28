import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, Image, TouchableOpacity, SafeAreaView, Modal, ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import auctions from '../Data/auctions';
import ratings from '../Data/ratings';
import status from '../Data/status';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen({ navigation, route }) {

  const { carsMod, carsBarnd, login, pass, follow } = route.params

  const [loading, setLoading] = useState(true)
  const [followModal, setFollowModal] = useState(false)
  const [errorModal, setErrorModal] = useState(false)

  const followFunc = (carsBarnd, carsMod, carsAuc, carsRate, carsStatus, year_start, year_end, range_start, range_end, login, pass) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        car: carsBarnd,
        model: carsMod,
        rate: carsRate,
        status: carsStatus,
        auction: carsAuc,
        yearS: year_start,
        yearE: year_end,
        rangeS: range_start,
        rangeE: range_end,
        login: login,
        pass: pass,
        follow: follow
      })
    }

    fetch('http://52.15.47.185:5050/follow/add', requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data === 'Ничего не найдено') {
          setLoading(false)
          setFollowModal(false)
          setErrorModal(true)
          console.log(data)
        } else {
          console.log(data)
          setLoading(false)
          setFollowModal(false)
          navigation.navigate('Home')
        }
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
        setFollowModal(false)
        setErrorModal(true)
      })
  }


  const [aucList, setAucList] = useState(auctions)
  const [modalVisible, setModalVisible] = useState(false)
  const [aucInputVal, setAucInputVal] = useState()
  const [selectedItem, setSelectedItem] = useState([])

  const [rateList, setRateList] = useState(ratings)
  const [rateModalVisible, setRateModalVisible] = useState(false)
  const [rateInputVal, setRateInputVal] = useState()
  const [rateSelectedItem, setRateSelectedItem] = useState([])

  const [statusList, setStatusList] = useState(status)
  const [statusModalVisible, setStatusModalVisible] = useState(false)
  const [statusInputVal, setStatusInputVal] = useState()
  const [statusSelectedItem, setStatusSelectedItem] = useState([])

  const [year_start, setYearStart] = useState()
  const [year_end, setYearEnd] = useState(2021)

  const [range_start, setRangeStart] = useState(0)
  const [range_end, setRangeEnd] = useState(500000)



  // Выбор аукционов

  const selectedHandler = (id) => {
    const copySelectedItem = [...selectedItem]
    const index = copySelectedItem.indexOf(id)
    if (index === -1)
      copySelectedItem.push(id)
    else
      copySelectedItem.splice(index, 1)
    setSelectedItem(copySelectedItem)
  }

  const renderAucItems = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {
        selectedHandler(item.id)
      }}>
        <View style={styles.flatItems}>
          <FontAwesome name={selectedItem.includes(item.id) ? "check-circle-o" : "circle-o"} size={24} color="#168dd0" />
          <Text style={{ paddingLeft: 20, paddingRight: '20%' }}>{item.title}</Text>
        </View>

      </TouchableOpacity>
    )
  }

  // Выбор оценок

  const rateSelectedHandler = (id) => {
    const copyRateSelectedItem = [...rateSelectedItem]
    const index = copyRateSelectedItem.indexOf(id)
    if (index === -1)
      copyRateSelectedItem.push(id)
    else
      copyRateSelectedItem.splice(index, 1)
    setRateSelectedItem(copyRateSelectedItem)
  }

  const renderRateItems = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {
        rateSelectedHandler(item.id)
      }}>
        <View style={styles.flatItems}>
          <FontAwesome name={rateSelectedItem.includes(item.id) ? "check-circle-o" : "circle-o"} size={24} color="#168dd0" />
          <Text style={{ paddingLeft: 20, paddingRight: '75%' }}>{item.title}</Text>
        </View>

      </TouchableOpacity>
    )
  }

  // Выбор статуса

  const statusSelectedHandler = (id) => {
    const copyStatusSelectedItem = [...statusSelectedItem]
    const index = copyStatusSelectedItem.indexOf(id)
    if (index === -1)
      copyStatusSelectedItem.push(id)
    else
      copyStatusSelectedItem.splice(index, 1)
    setStatusSelectedItem(copyStatusSelectedItem)
  }

  const renderStatusItems = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {
        statusSelectedHandler(item.id)
      }}>
        <View style={styles.flatItems}>
          <FontAwesome name={statusSelectedItem.includes(item.id) ? "check-circle-o" : "circle-o"} size={24} color="#168dd0" />
          <Text style={{ paddingLeft: 20, paddingRight: '50%' }}>{item.title}</Text>
        </View>

      </TouchableOpacity>
    )
  }


  return (
    <ScrollView style={{ backgroundColor: '#fff', paddingTop: 10 }}>
      <View>
        <View>
          <Text style={styles.text}>Аукцион</Text>
          <View style={styles.aucView}>
            <TextInput placeholder='Выберите аукцион' style={styles.aucArea} onFocus={() => { setModalVisible(true) }} value={aucInputVal} />
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(false);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={{ paddingBottom: 10 }}>Выберите аукцион и нажмите Ок</Text>
                  <FlatList
                    data={aucList}
                    horizontal={false}
                    renderItem={renderAucItems}
                    keyExtractor={(item) => item.id.toString()}
                    extraData={selectedItem}
                  />
                  <View style={styles.modalBtn}>
                    <TouchableOpacity onPress={() => { setModalVisible(false) }}>
                      <Text>Отмена</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                      setAucInputVal(`Выбрано аукционов: ${selectedItem.length}`)
                      setModalVisible(false)
                    }}>
                      <Text>Ok</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>

        <View style={{ paddingTop: 20 }}>
          <Text style={styles.text}>Год</Text>
          <View style={styles.inputView}>
            <TextInput placeholder='от' style={styles.inputArea} keyboardType='numeric' maxLength={4} onChangeText={(text) => { setYearStart(text) }} />
            <TextInput placeholder='до' style={styles.inputArea} keyboardType='numeric' maxLength={4} onChangeText={(text) => { setYearEnd(text) }} />
          </View>
        </View>

        <View style={{ paddingTop: 20 }}>
          <Text style={styles.text}>Пробег</Text>
          <View style={styles.inputView}>
            <TextInput placeholder='от' style={styles.inputArea} keyboardType='numeric' maxLength={6} onChangeText={(text) => { setRangeStart(text) }} />
            <TextInput placeholder='до' style={styles.inputArea} keyboardType='numeric' maxLength={6} onChangeText={(text) => { setRangeEnd(text) }} />
          </View>
        </View>

        <View style={styles.inputView1}>
          <View style={{ width: '48%' }}>
            <Text style={styles.text}>Статус</Text>
            <TextInput placeholder='Выберите статус' style={styles.inputArea1} onFocus={() => { setStatusModalVisible(true) }} value={statusInputVal} />
            <Modal
              animationType="slide"
              transparent={true}
              visible={statusModalVisible}
              onRequestClose={() => {
                setStatusModalVisible(false);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={{ paddingBottom: 10 }}>Выберите статус и нажмите Ок</Text>
                  <FlatList
                    data={statusList}
                    horizontal={false}
                    renderItem={renderStatusItems}
                    keyExtractor={(item) => item.id.toString()}
                    extraData={statusSelectedItem}
                  />
                  <View style={styles.modalBtn}>
                    <TouchableOpacity onPress={() => { setStatusModalVisible(false) }}>
                      <Text>Отмена</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                      setStatusInputVal(`Выбрано оценок: ${statusSelectedItem.length}`)
                      setStatusModalVisible(false)
                    }}>
                      <Text>Ok</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>

          <View style={{ width: '48%' }}>
            <Text style={styles.text}>Оценка</Text>
            <TextInput placeholder='Выберите оценку' style={styles.inputArea1} onFocus={() => { setRateModalVisible(true) }} value={rateInputVal} />
            <Modal
              animationType="slide"
              transparent={true}
              visible={rateModalVisible}
              onRequestClose={() => {
                setRateModalVisible(false);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={{ paddingBottom: 10 }}>Выберите оценку и нажмите Ок</Text>
                  <FlatList
                    data={rateList}
                    horizontal={false}
                    renderItem={renderRateItems}
                    keyExtractor={(item) => item.id.toString()}
                    extraData={rateSelectedItem}
                  />
                  <View style={styles.modalBtn}>
                    <TouchableOpacity onPress={() => { setRateModalVisible(false) }}>
                      <Text>Отмена</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                      setRateInputVal(`Выбрано оценок: ${rateSelectedItem.length}`)
                      setRateModalVisible(false)
                    }}>
                      <Text>Ok</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={followModal}
          onRequestClose={() => {
            setFollowModal(false);
          }}
        >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <Text style={{ fontSize: 26 }}>Идет поиск ...</Text>
            <ActivityIndicator
              visible={loading}
              size='large'
              color='#168dd0'
              style={{ marginTop: 15 }}
            />
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={errorModal}
          onRequestClose={() => {
            setErrorModal(false);
          }}
        >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <Text style={{ fontSize: 26, textAlign: 'center', marginBottom: 20 }}>Ничего не найдено, измените параметры поиска</Text>
            <View>
              <Ionicons name="md-arrow-back-circle-sharp" size={50} color="#168dd0" onPress={() => navigation.navigate('Home')} />
            </View>
          </View>

        </Modal>

        <View style={styles.btn}>
          {follow ? (
            <TouchableOpacity style={styles.btnArea} onPress={() => {
              setFollowModal(true)
              setLoading(true)
              let carsAuc = []
              let carsRate = []
              let carsStatus = []

              aucList.forEach((it) => {
                for (let i = 0; i <= selectedItem.length; i += 1) {
                  if (it.id === selectedItem[i]) {
                    carsAuc.push(it.title)
                  }
                }
              })

              rateList.forEach((it) => {
                for (let i = 0; i <= rateSelectedItem.length; i += 1) {
                  if (it.id === rateSelectedItem[i]) {
                    carsRate.push(it.title)
                  }
                }
              })

              statusList.forEach((it) => {
                for (let i = 0; i <= statusSelectedItem.length; i += 1) {
                  if (it.id === statusSelectedItem[i]) {
                    carsStatus.push(it.title)
                  }
                }
              })

              followFunc(carsBarnd, carsMod, carsAuc, carsRate, carsStatus, year_start, year_end, range_start, range_end, login, pass)
            }}>
              <Text style={{ color: '#fff', fontSize: 16 }}>Начать отслеживание</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.btnArea} onPress={() => {

              let carsAuc = []
              let carsRate = []
              let carsStatus = []

              aucList.forEach((it) => {
                for (let i = 0; i <= selectedItem.length; i += 1) {
                  if (it.id === selectedItem[i]) {
                    carsAuc.push(it.title)
                  }
                }
              })

              rateList.forEach((it) => {
                for (let i = 0; i <= rateSelectedItem.length; i += 1) {
                  if (it.id === rateSelectedItem[i]) {
                    carsRate.push(it.title)
                  }
                }
              })

              statusList.forEach((it) => {
                for (let i = 0; i <= statusSelectedItem.length; i += 1) {
                  if (it.id === statusSelectedItem[i]) {
                    carsStatus.push(it.title)
                  }
                }
              })

              navigation.navigate('carsResultsScreen', {
                carsBarnd: carsBarnd,
                carsMod: carsMod,
                carsAuc: carsAuc,
                carsRate: carsRate,
                carsStatus: carsStatus,
                year_start: year_start,
                year_end: year_end,
                range_start: range_start,
                range_end: range_end,
                login: login,
                pass: pass
              })
            }}>
              <Text style={{ color: '#fff', fontSize: 16 }}>Начать поиск</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  text: {
    color: '#168dd0',
    fontSize: 16,
    paddingLeft: 20,
    paddingBottom: 5,

  },
  inputArea: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'grey',
    width: '48%',
    height: 40,
    paddingLeft: 5

  },
  aucArea: {
    width: '98%',
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'grey',
    paddingLeft: 5

  },
  aucView: {
    alignItems: 'center'

  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  inputView1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,

  },
  inputArea1: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'grey',
    width: '100%',
    height: 40,
    paddingLeft: 5

  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,

  },
  btnArea: {
    backgroundColor: '#168dd0',
    width: '50%',
    height: 40,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15,

  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  modalView: {
    height: '80%',
    width: '80%',
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: 'flex-start',
    elevation: 5,
    opacity: 0.95,

  },
  modalBtn: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    width: '100%',

  },
  flatItems: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,

  }

})

