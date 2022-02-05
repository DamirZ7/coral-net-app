import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, Image, TouchableOpacity, SafeAreaView, Modal, ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import odo from '../Data/odo';
import engine from '../Data/engine';
import color from '../Data/color'
import ratings from '../Data/ratings';
import inspection from '../Data/inspection';
import { Ionicons } from '@expo/vector-icons';
import URL from '../keys/keys'

export default function SettingsScreen({ navigation, route }) {

  const { carsMod, carsBarnd, follow, language } = route.params

  useEffect(() => {
    navigation.setOptions({
        title: language.values.settingsScreen.params,
    })
}, [language])

  const [loading, setLoading] = useState(true)
  const [followModal, setFollowModal] = useState(false)
  const [errorModal, setErrorModal] = useState(false)

  const followFunc = (carsBarnd, carsMod, engine, carsRate, carInspect, year_start, year_end, range_start, range_end, color, altColor) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        car: carsBarnd,
        model: carsMod,
        engine: engine,
        rate: carsRate,
        inspect: carInspect,
        yearS: year_start,
        yearE: year_end,
        rangeS: range_start,
        rangeE: range_end,
        color: color,
        altColor: altColor,
        follow: follow
      })
    }

    fetch(`${URL}/follow/add`, requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data === 'Ничего не найдено') {
          setLoading(false)
          setFollowModal(false)
          setErrorModal(true)
          //console.log(data)
        } else {
          console.log(data)
          setLoading(false)
          setFollowModal(false)
          navigation.navigate('Home', {language: language})
        }
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
        setFollowModal(false)
        setErrorModal(true)
      })
  }


  const [aucList, setAucList] = useState(engine)
  const [modalVisible, setModalVisible] = useState(false)
  const [aucInputVal, setAucInputVal] = useState()
  const [selectedItem, setSelectedItem] = useState()

  const [rateList, setRateList] = useState(ratings)
  const [rateModalVisible, setRateModalVisible] = useState(false)
  const [rateInputVal, setRateInputVal] = useState()
  const [rateSelectedItem, setRateSelectedItem] = useState()

  const [inspectList, setInspectList] = useState(inspection)
  const [inspectModalVisible, setInspectModalVisible] = useState(false)
  const [inspectInputVal, setInspectInputVal] = useState()
  const [inspectSelectedItem, setInspectSelectedItem] = useState()

  const [year_start, setYearStart] = useState('')
  const [year_end, setYearEnd] = useState('')

  const [range_start, setRangeStart] = useState(odo)
  const [rangeStartModal, setRangeStartModal] = useState(false)
  const [rangeStartInputVal, setRangeStartInputVal] = useState()
  const [rangeStartSelectedItem, setRangeStartSelectedItem] = useState()

  const [range_end, setRangeEnd] = useState(odo)
  const [rangeEndModal, setRangeEndModal] = useState(false)
  const [rangeEndInputVal, setRangeEndInputVal] = useState()
  const [rangeEndSelectedItem, setRangeEndSelectedItem] = useState()

  const [colorList, setColorList] = useState(color)
  const [colorModalVisible, setColorModalVisible] = useState(false)
  const [colorInputVal, setColorInputVal] = useState()
  const [colorSelectedItem, setColorSelectedItem] = useState()

  const [altColorList, setAltColorList] = useState(color)
  const [altColorModalVisible, setAltColorModalVisible] = useState(false)
  const [altColorInputVal, setAltColorInputVal] = useState()
  const [altColorSelectedItem, setAltColorSelectedItem] = useState()


  // Выбор двигателя

  const renderAucItems = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {
        setSelectedItem(item.id)
        setAucInputVal(item.title)
      }}>
        <View style={styles.flatItems}>
          <FontAwesome name={selectedItem === item.id ? "check-circle-o" : "circle-o"} size={24} color="#168dd0" />
          <Text style={{ paddingLeft: 20, paddingRight: '20%' }}>{item.title}</Text>
        </View>

      </TouchableOpacity>
    )
  }

  // Выбор года

  const renderRangeStartItems = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {
        setRangeStartSelectedItem(item.id)
        setRangeStartInputVal(item.title)
      }}>
        <View style={styles.flatItems}>
          <FontAwesome name={rangeStartSelectedItem === item.id ? "check-circle-o" : "circle-o"} size={24} color="#168dd0" />
          <Text style={{ paddingLeft: 20, paddingRight: '75%' }}>{item.title}</Text>
        </View>

      </TouchableOpacity>
    )
  }

  const renderRangeEndItems = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {
        setRangeEndSelectedItem(item.id)
        setRangeEndInputVal(item.title)
      }}>
        <View style={styles.flatItems}>
          <FontAwesome name={rangeEndSelectedItem === item.id ? "check-circle-o" : "circle-o"} size={24} color="#168dd0" />
          <Text style={{ paddingLeft: 20, paddingRight: '75%' }}>{item.title}</Text>
        </View>

      </TouchableOpacity>
    )
  }

  // Выбор цвета

  const renderColorItems = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {
        setColorSelectedItem(item.id)
        setColorInputVal(item.title)
      }}>
        <View style={styles.flatItems}>
          <FontAwesome name={colorSelectedItem === item.id ? "check-circle-o" : "circle-o"} size={24} color="#168dd0" />
          <Text style={{ paddingLeft: 20, paddingRight: '75%' }}>{item.title}</Text>
        </View>

      </TouchableOpacity>
    )
  }

  const renderAltColorItems = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {
        setAltColorSelectedItem(item.id)
        setAltColorInputVal(item.title)
      }}>
        <View style={styles.flatItems}>
          <FontAwesome name={altColorSelectedItem === item.id ? "check-circle-o" : "circle-o"} size={24} color="#168dd0" />
          <Text style={{ paddingLeft: 20, paddingRight: '75%' }}>{item.title}</Text>
        </View>

      </TouchableOpacity>
    )
  }

  //  Выбор осмтора и оценки

  const renderInspectItems = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {
        setInspectSelectedItem(item.id)
        setInspectInputVal(item.title)
      }}>
        <View style={styles.flatItems}>
          <FontAwesome name={inspectSelectedItem === item.id ? "check-circle-o" : "circle-o"} size={24} color="#168dd0" />
          <Text style={{ paddingLeft: 20, paddingRight: '75%' }}>{item.title}</Text>
        </View>

      </TouchableOpacity>
    )
  }

  const renderRateItems = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {
        setRateSelectedItem(item.id)
        setRateInputVal(item.title)
      }}>
        <View style={styles.flatItems}>
          <FontAwesome name={rateSelectedItem === item.id ? "check-circle-o" : "circle-o"} size={24} color="#168dd0" />
          <Text style={{ paddingLeft: 20, paddingRight: '75%' }}>{item.title}</Text>
        </View>

      </TouchableOpacity>
    )
  }


  return (
    <ScrollView style={{ backgroundColor: '#fff', paddingTop: 10 }}>
      <View>
        <View>
          <Text style={styles.text}>{language.values.settingsScreen.engine}</Text>
          <View style={styles.aucView}>
            <TextInput placeholder={language.values.settingsScreen.selectEngine} style={styles.aucArea} onFocus={() => { setModalVisible(true) }} value={aucInputVal} />
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
                  <Text style={{ paddingBottom: 10 }}>{language.values.settingsScreen.modalHead}</Text>
                  <FlatList
                    data={aucList}
                    horizontal={false}
                    renderItem={renderAucItems}
                    keyExtractor={(item) => item.id.toString()}
                    extraData={selectedItem}
                    showsVerticalScrollIndicator={false}
                  />
                  <View style={styles.modalBtn}>
                    <TouchableOpacity onPress={() => {
                      setModalVisible(false)
                      setAucInputVal()
                      setSelectedItem()
                    }}>
                      <Text style={styles.modalBtnText}>{language.values.settingsScreen.cancel}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                      setModalVisible(false)
                    }}>
                      <Text style={styles.modalBtnText}>{language.values.settingsScreen.ok}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>



        <View style={{ paddingTop: 20 }}>
          <Text style={styles.text}>{language.values.settingsScreen.year}</Text>
          <View style={styles.inputView}>
            <TextInput placeholder={language.values.settingsScreen.yearStart} style={styles.inputArea} keyboardType='numeric' maxLength={4} onChangeText={(text) => { setYearStart(text) }} />
            <TextInput placeholder={language.values.settingsScreen.yearEnd} style={styles.inputArea} keyboardType='numeric' maxLength={4} onChangeText={(text) => { setYearEnd(text) }} />
          </View>
        </View>



        <View style={styles.inputView1}>
          <View style={{ width: '48%' }}>
            <Text style={styles.text}>{language.values.settingsScreen.range}</Text>
            <TextInput placeholder={language.values.settingsScreen.rangeStart} style={styles.inputArea1} onFocus={() => { setRangeStartModal(true) }} value={rangeStartInputVal} />
            <Modal
              animationType="slide"
              transparent={true}
              visible={rangeStartModal}
              onRequestClose={() => {
                setRangeStartModal(false);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={{ paddingBottom: 10 }}>{language.values.settingsScreen.modalHead}</Text>
                  <FlatList
                    data={range_start}
                    horizontal={false}
                    renderItem={renderRangeStartItems}
                    keyExtractor={(item) => item.id.toString()}
                    extraData={rangeStartSelectedItem}
                    showsVerticalScrollIndicator={false}
                  />
                  <View style={styles.modalBtn}>
                    <TouchableOpacity onPress={() => {
                      setRangeStartModal(false)
                      setRangeStartInputVal()
                      setRangeStartSelectedItem()
                    }}>
                      <Text style={styles.modalBtnText}>{language.values.settingsScreen.cancel}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                      setRangeStartModal(false)
                    }}>
                      <Text style={styles.modalBtnText}>{language.values.settingsScreen.ok}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>

          <View style={{ width: '48%' }}>
            <Text style={styles.text}></Text>
            <TextInput placeholder={language.values.settingsScreen.rangeEnd} style={styles.inputArea1} onFocus={() => { setRangeEndModal(true) }} value={rangeEndInputVal} />
            <Modal
              animationType="slide"
              transparent={true}
              visible={rangeEndModal}
              onRequestClose={() => {
                setRangeEndModal(false);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={{ paddingBottom: 10 }}>{language.values.settingsScreen.modalHead}</Text>
                  <FlatList
                    data={range_end}
                    horizontal={false}
                    renderItem={renderRangeEndItems}
                    keyExtractor={(item) => item.id.toString()}
                    extraData={rangeEndSelectedItem}
                    showsVerticalScrollIndicator={false}
                  />
                  <View style={styles.modalBtn}>
                    <TouchableOpacity onPress={() => {
                      setRangeEndModal(false)
                      setRangeEndInputVal()
                      setRangeEndSelectedItem()
                    }}>
                      <Text style={styles.modalBtnText}>{language.values.settingsScreen.cancel}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                      setRangeEndModal(false)
                    }}>
                      <Text style={styles.modalBtnText}>{language.values.settingsScreen.ok}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>


        <View style={styles.inputView1}>
          <View style={{ width: '48%' }}>
            <Text style={styles.text}>{language.values.settingsScreen.inspect}</Text>
            <TextInput placeholder={language.values.settingsScreen.selectInspect} style={styles.inputArea1} onFocus={() => { setInspectModalVisible(true) }} value={inspectInputVal} />
            <Modal
              animationType="slide"
              transparent={true}
              visible={inspectModalVisible}
              onRequestClose={() => {
                setInspectModalVisible(false);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={{ paddingBottom: 10 }}>{language.values.settingsScreen.modalHead}</Text>
                  <FlatList
                    data={inspectList}
                    horizontal={false}
                    renderItem={renderInspectItems}
                    keyExtractor={(item) => item.id.toString()}
                    extraData={inspectSelectedItem}
                    showsVerticalScrollIndicator={false}
                  />
                  <View style={styles.modalBtn}>
                    <TouchableOpacity onPress={() => {
                      setInspectModalVisible(false)
                      setInspectInputVal()
                      setInspectSelectedItem()
                    }}>
                      <Text style={styles.modalBtnText}>{language.values.settingsScreen.cancel}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                      setInspectModalVisible(false)
                    }}>
                      <Text style={styles.modalBtnText}>{language.values.settingsScreen.ok}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>

          <View style={{ width: '48%' }}>
            <Text style={styles.text}>{language.values.settingsScreen.rate}</Text>
            <TextInput placeholder={language.values.settingsScreen.selectRate} style={styles.inputArea1} onFocus={() => { setRateModalVisible(true) }} value={rateInputVal} />
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
                  <Text style={{ paddingBottom: 10 }}>{language.values.settingsScreen.modalHead}</Text>
                  <FlatList
                    data={rateList}
                    horizontal={false}
                    renderItem={renderRateItems}
                    keyExtractor={(item) => item.id.toString()}
                    extraData={rateSelectedItem}
                    showsVerticalScrollIndicator={false}
                  />
                  <View style={styles.modalBtn}>
                    <TouchableOpacity onPress={() => {
                      setRateModalVisible(false)
                      setRateInputVal()
                      setRateSelectedItem()
                    }}>
                      <Text style={styles.modalBtnText}>{language.values.settingsScreen.cancel}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                      setRateModalVisible(false)
                    }}>
                      <Text style={styles.modalBtnText}>{language.values.settingsScreen.ok}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>

        <View style={styles.inputView1}>
          <View style={{ width: '48%' }}>
            <Text style={styles.text}>{language.values.settingsScreen.color}</Text>
            <TextInput placeholder={language.values.settingsScreen.colorBase} style={styles.inputArea1} onFocus={() => { setColorModalVisible(true) }} value={colorInputVal} />
            <Modal
              animationType="slide"
              transparent={true}
              visible={colorModalVisible}
              onRequestClose={() => {
                setColorModalVisible(false);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={{ paddingBottom: 10 }}>{language.values.settingsScreen.modalHead}</Text>
                  <FlatList
                    data={colorList}
                    horizontal={false}
                    renderItem={renderColorItems}
                    keyExtractor={(item) => item.id.toString()}
                    extraData={colorSelectedItem}
                    showsVerticalScrollIndicator={false}
                  />
                  <View style={styles.modalBtn}>
                    <TouchableOpacity onPress={() => {
                      setColorModalVisible(false)
                      setColorInputVal()
                      setColorSelectedItem()
                    }}>
                      <Text style={styles.modalBtnText}>{language.values.settingsScreen.cancel}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                      setColorModalVisible(false)
                    }}>
                      <Text style={styles.modalBtnText}>{language.values.settingsScreen.ok}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>

          <View style={{ width: '48%' }}>
            <Text style={styles.text}></Text>
            <TextInput placeholder={language.values.settingsScreen.colorAlt} style={styles.inputArea1} onFocus={() => { setAltColorModalVisible(true) }} value={altColorInputVal} />
            <Modal
              animationType="slide"
              transparent={true}
              visible={altColorModalVisible}
              onRequestClose={() => {
                setAltColorModalVisible(false);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={{ paddingBottom: 10 }}>{language.values.settingsScreen.modalHead}</Text>
                  <FlatList
                    data={altColorList}
                    horizontal={false}
                    renderItem={renderAltColorItems}
                    keyExtractor={(item) => item.id.toString()}
                    extraData={altColorSelectedItem}
                    showsVerticalScrollIndicator={false}
                  />
                  <View style={styles.modalBtn}>
                    <TouchableOpacity onPress={() => {
                      setAltColorModalVisible(false)
                      setAltColorInputVal()
                      setAltColorSelectedItem()
                    }}>
                      <Text style={styles.modalBtnText}>{language.values.settingsScreen.cancel}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                      setAltColorModalVisible(false)
                    }}>
                      <Text style={styles.modalBtnText}>{language.values.settingsScreen.ok}</Text>
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
            <Text style={{ fontSize: 26 }}>{language.values.settingsScreen.loading}</Text>
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
            <Text style={{ fontSize: 26, textAlign: 'center', marginBottom: 20 }}>{language.values.settingsScreen.searchErr}</Text>
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

              let carEngine = ''
              let carsRate = ''
              let carInspect = ''
              let rangeStart = ''
              let rangeEnd = ''
              let color = ''
              let altColor = ''

              aucList.forEach((it) => {
                if (it.id === selectedItem) {
                  carEngine = it.value
                }
              })
              rateList.forEach((it) => {
                if (it.id === rateSelectedItem) {
                  carsRate = it.value
                }
              })
              inspectList.forEach((it) => {
                if (it.id === inspectSelectedItem) {
                  carInspect = it.value
                }
              })
              range_start.forEach((it) => {
                if (it.id === rangeStartSelectedItem) {
                  rangeStart = it.value
                }
              })
              range_end.forEach((it) => {
                if (it.id === rangeEndSelectedItem) {
                  rangeEnd = it.value
                }
              })
              colorList.forEach((it) => {
                if (it.id === colorSelectedItem) {
                  color = it.value
                }
              })
              altColorList.forEach((it) => {
                if (it.id === altColorSelectedItem) {
                  altColor = it.value
                }
              })

              followFunc(carsBarnd, carsMod, carEngine, carsRate, carInspect, year_start, year_end, rangeStart, rangeEnd, color, altColor)
            }}>
              <Text style={{ color: '#fff', fontSize: 16 }}>{language.values.settingsScreen.newSearch}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.btnArea} onPress={() => {

              let carEngine = ''
              let carsRate = ''
              let carInspect = ''
              let rangeStart = ''
              let rangeEnd = ''
              let color = ''
              let altColor = ''

              aucList.forEach((it) => {
                if (it.id === selectedItem) {
                  carEngine = it.value
                }
              })
              rateList.forEach((it) => {
                if (it.id === rateSelectedItem) {
                  carsRate = it.value
                }
              })
              inspectList.forEach((it) => {
                if (it.id === inspectSelectedItem) {
                  carInspect = it.value
                }
              })
              range_start.forEach((it) => {
                if (it.id === rangeStartSelectedItem) {
                  rangeStart = it.value
                }
              })
              range_end.forEach((it) => {
                if (it.id === rangeEndSelectedItem) {
                  rangeEnd = it.value
                }
              })
              colorList.forEach((it) => {
                if (it.id === colorSelectedItem) {
                  color = it.value
                }
              })
              altColorList.forEach((it) => {
                if (it.id === altColorSelectedItem) {
                  altColor = it.value
                }
              })

              navigation.navigate('carsResultsScreen', {
                carsBarnd: carsBarnd,
                carsMod: carsMod,
                color: color,
                altColor: altColor,
                carsRate: carsRate,
                carInspect: carInspect,
                year_start: year_start,
                year_end: year_end,
                range_start: rangeStart,
                range_end: rangeEnd,
                engine: carEngine,
                language: language
              })
            }}>
              <Text style={{ color: '#fff', fontSize: 16 }}>{language.values.settingsScreen.newSearch}</Text>
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
    alignItems: 'center',
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
    paddingTop: 15,
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
    width: 1000,
    marginTop: 20,

  },
  modalBtnText: {
    fontSize: 16
  }
})

