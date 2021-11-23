import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, TouchableOpacity, Platform, Image } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import DateTimePicker from '@react-native-community/datetimepicker';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import * as ImagePicker from 'expo-image-picker';

import { onChange } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';

export default function AddItems({ navigation }) {


  const [bAct, setAct] = useState(false)
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('datetime');
  const [show, setShow] = useState(false);
  const [about, setAbout] = useState('');
  const [images, setImages] = useState([]);
  const [checkPlace, setCheckPlace] = useState([{
                        name: "Шереметьево. 2 этаж, терминал F",
                        isCheck: true
                      },
                      {
                        name: "Шереметьево. 1 этаж, терминал A",
                        isCheck: false
                      },
                      {
                        name: "Шереметьево. 3 этаж, терминал C",
                        isCheck: false
                      }]);
  const [place, setPlace] = useState(checkPlace[0].name);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };



  const BottomSheetRef = useRef(null)
  const BottomDate = useRef(null)

  // variables
  const snapPoints = useMemo(() => ['30%'], []);


  const Sheet = () => BottomSheetRef.current.snapToIndex(0);
  const BottomDateView = () => BottomDate.current.snapToIndex(0);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();


    if (!result.cancelled) {
      setImages([...images, result.uri]);
    }
  };

  // let [fontsLoaded] = useFonts({
  //   Inter_400Regular,
  //   Inter_500Medium,
  //   Inter_600SemiBold,
  //   Inter_700Bold
  // });
  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }


  const Place = (id) =>{
    if (!checkPlace[id].isCheck){
      setCheckPlace((check)=> {
        check.map((item) => item.isCheck = false);
        check[id].isCheck = true;
        return check
      });
      setPlace(checkPlace[id].name);
    }
    console.log(checkPlace);
    BottomSheetRef.current.close();
  }

  const ViewDate = () => {
    return date.toLocaleString().slice(0, -3);
  }

  const Remove = (id) => {
    setImages((img) => {
      if (img.length === 1){
        return [];
      }
      return [...img.slice(0,id), ...img.slice(id+1)];
    })
  }

  const CustomBackDrop = (props) => {
    return (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        opacity='0.9'
        closeOnPress={false}
        enableTouchThrough={false}
        pressBehavior='none'
      />
    );
  };



  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.form}>
        <Text style={styles.subtext}>Дата / время обнаружения</Text>
        <TouchableOpacity style={styles.inputtouch} onPress={BottomDateView} ><Text style={{ fontFamily: 'Inter_600SemiBold' }}>{ViewDate()}</Text></TouchableOpacity>
        <Text style={styles.subtext}>Место обнаружения</Text>
        <TouchableOpacity onPress={Sheet} style={styles.inputtouch}>
          <Text style={{ fontFamily: 'Inter_600SemiBold' }}>{place}</Text>
        </TouchableOpacity>
        <Text style={styles.textimage}>Прикрепить фото забытой вещи</Text>
        <Text style={styles.subtext}>Сфотографируйте вещь со всех сторон</Text>
        {images.length === 0 ? <TouchableOpacity onPress={pickImage} style={styles.inputimage}>
          <Image style={{ marginRight: 12, marginTop: 3 }} source={require('../assets/images/ImageSquare.png')} />
          <View style={{ flex: 1 }} >
            <Text style={styles.placesub} >Добавить фото</Text>
            <Text style={styles.placesub}>Макс. размер фото 10mb</Text>
          </View>
        </TouchableOpacity> :
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ flex: 1, width: 327, height: 56, flexDirection: 'row' }} >
            {images.map((item, id)=> {
              return (<TouchableOpacity activeOpacity='0.9' onPress={()=>Remove(id)} ><Image source={{ uri: item }} key={id} style={{ width: 56, height: 56, marginRight: 10, borderRadius: 4 }} /></TouchableOpacity>);
            })}
            
            <TouchableOpacity onPress={pickImage} style={styles.add} ><Image height='56' source={require('../assets/images/PlusCircle.png')} /></TouchableOpacity>
          </ScrollView>
        }
        <Text style={styles.subtext}>Описание</Text>
        <TextInput
          style={[styles.input, { height: 112 }]}
          multiline
          blurOnSubmit={true}
          placeholder="Введите описание забытой вещи"
        />
        <View style={styles.row}>
          <View style={{}}>
            <Text style={styles.textimage}>Акт осмотра</Text>
          </View>
          <View style={styles.chekbox}>
            <BouncyCheckbox
              size={25}
              fillColor="#3333FF"
              unfillColor="#23232A14"
              disableText={false}
              checkIconImageSource={null}
              backgroundComponent="#D8D8DAF2"
              iconStyle={{
                borderWidth: 0
              }}
              onPress={(isChecked) => { setAct(isChecked) }}
            />
          </View>
        </View>
      </View>
      {/* <View style={styles.btn} > */}
      <TouchableOpacity activeOpacity={.9} style={styles.btn} onPress={() => navigation.navigate('itemList', { start: false })}><Text style={{ fontFamily: 'Inter_700Bold', color: '#F2F2F3' }}>Зарегистрировать</Text></TouchableOpacity>
      {/* </View> */}
      <BottomSheet
        ref={BottomDate}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backdropComponent={CustomBackDrop}
      >
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="spinner"
          onChange={onChange}
          locale="ru-RU"
        />
      </BottomSheet>
      <BottomSheet
        ref={BottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backdropComponent={CustomBackDrop}
      >
        <View style={styles.insidebottomsheet}>
          <Text style={styles.sheettitle} >Место обнаружения</Text>
          <View style={styles.row}>
            <View>
              <Text style={styles.place}>Шереметьево</Text>
              <Text style={styles.placesub}>2 этаж, терминал F</Text>
            </View>
            <View style={styles.chekbox}>
              <BouncyCheckbox
                isChecked = {checkPlace[0].isCheck}
                size={25}
                fillColor="#3333FF"
                unfillColor="#23232A14"
                disableText={false}
                checkIconImageSource={null}
                iconStyle={{
                  borderWidth: 0
                }}
                onPress={() => Place(0)}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View>
              <Text style={styles.place}>Шереметьево</Text>
              <Text style={styles.placesub}>1 этаж, терминал A</Text>
            </View>
            <View style={styles.chekbox}>
              <BouncyCheckbox
                isChecked = {checkPlace[1].isCheck}
                size={25}
                fillColor="#3333FF"
                unfillColor="#23232A14"
                disableText={false}
                checkIconImageSource={null}
                iconStyle={{
                  borderWidth: 0
                }}
                onPress={() => Place(1)}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View>
              <Text style={styles.place}>Шереметьево</Text>
              <Text style={styles.placesub}>3 этаж, терминал C</Text>
            </View>
            <View style={styles.chekbox}>
              <BouncyCheckbox
                isChecked = {checkPlace[2].isCheck}
                size={25}
                fillColor="#3333FF"
                unfillColor="#23232A14"
                disableText={false}
                checkIconImageSource={null}
                iconStyle={{
                  borderWidth: 0
                }}
                onPress={() => Place(2)}
              />
            </View>
          </View>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9FA',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  form: {
    flex: 1,
    backgroundColor: '#F9F9FA',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 30
  },
  down: {
    flex: 1,
    backgroundColor: '#F9F9FA',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  add: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',  
    borderRadius: 4, 
    height: 56, 
    width: 56, 
    backgroundColor: '#23232A14' },
  btn: {
    backgroundColor: '#3333FF',
    width: 327,
    borderRadius: 12,
    fontSize: 14,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 17,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.48,
    shadowRadius: 16,

    elevation: 12,
  },
  input: {
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: '#23232A14',
    width: 327,
    height: 44,
    paddingLeft: 16
  },
  inputimage: {
    borderRadius: 12,
    flexDirection: 'row',
    paddingVertical: 10,
    marginBottom: 12,
    backgroundColor: '#23232A14',
    width: 327,
    paddingLeft: 16
  },
  inputtouch: {
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: '#23232A14',
    width: 327,
    paddingVertical: 16,
    paddingLeft: 16
  },
  chekbox: {
    borderRadius: 12,
    backgroundColor: '#23232A14',
    width: 24,
    height: 24,
    marginTop: 21

  },
  subtext: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    color: '#0C0C0D7A',
    marginBottom: 10
  },
  textimage: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#0C0C0D',
    fontWeight: '600',
    marginTop: 24
  },
  place: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#0C0C0D',
  },
  placesub: {
    fontSize: 12,
    color: '#0C0C0D7A',
    fontFamily: 'Inter_500Medium'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    width: 327,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 30
  },
  insidebottomsheet: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  sheettitle: {
    color: '#0C0C0D',
    fontSize: 16,
    marginBottom: 20
  }
});
