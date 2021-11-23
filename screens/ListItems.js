import React, { useState, useRef, useMemo } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import Toggle from 'react-native-toggle-element'
import { PostItems } from '../components/postitem';
import { NotPostItems } from '../components/noPostItem';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function ListItems({ navigation, route }) {

  const [items, setItems] = useState([
    {
        id: 1,
        images: [require('../assets/images/photo.png')],
        data: '11 октября',
        time: '11:45',
        place: 'Шереметьево, F',
        act: true,
        info: 'Iphone 7 синий',
        sending: true
    },
    {
        id:2,
        images: [require('../assets/images/photo.png'), require('../assets/images/photo.png'), require('../assets/images/photo.png')],
        data: '11 октября',
        time: '11:45',
        place: 'Шереметьево, F',
        act: true,
        info: 'Iphone 7 синий',
        sending: false
    },
    {
        id:3,
        images: [require('../assets/images/photo.png'), require('../assets/images/photo.png'), ],
        data: '11 октября',
        time: '11:45',
        place: 'Шереметьево, F',
        act: true,
        info: 'Iphone 7 синий',
        sending: true
    },
    {
      id:4,
      images: [require('../assets/images/photo.png'), require('../assets/images/photo.png'), require('../assets/images/photo.png'), require('../assets/images/photo.png'), require('../assets/images/photo.png'), require('../assets/images/photo.png')],
      data: '11 октября',
      time: '11:45',
      place: 'Шереметьево, F',
      act: true,
      info: 'Iphone 7 синий',
      sending: false,
  }
])

  const [bPost, setPost] = useState(false);
  const [bAct, setAct] = useState(false)
  const [selectId, setSelectId] = useState(0);

  const BottomSheetRef = useRef(null)

  const snapPoints = useMemo(() => ['45%'], []);

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


  const ViewSheet = (id) => {
    setSelectId(id);
    BottomSheetRef.current.snapToIndex(0);
  }

  const Send = () =>{
    setItems((last_items) =>{
      last_items[selectId-1].sending = true;
      return last_items;
    });
    BottomSheetRef.current.close();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingTop: 20, alignItems: 'center' }}>
        <Toggle
          value={bPost}
          onPress={(newState) => setPost(newState)}
          leftComponent={
            <Text style={{ color: bPost ? '#000' : '#F2F2F3', fontFamily: 'Inter_500Medium' }}>Передано в камеру</Text>
          }
          rightComponent={
            <Text style={{ color: bPost ? '#F2F2F3' : '#000', fontFamily: 'Inter_500Medium' }}>Не передано в камеру</Text>
          }
          thumbStyle={{
            marginLeft: 2,
            marginRight: 2,
          }}
          thumbButton={{
            activeBackgroundColor: '#3333FF',
            inActiveBackgroundColor: '#3333FF',
            radius: 20,
            height: 35,
            width: 190
          }}
          trackBar={{
            width: 380,
            height: 40,
            radius: 20,
            activeBackgroundColor: '#23232A14',
            inActiveBackgroundColor: '#23232A14',
          }}
        />
        
      </View>
      {bPost ? <NotPostItems navigation={navigation} items={items} onSubmit={ViewSheet} /> : <PostItems navigation={navigation} />}
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
                  size={25}
                  fillColor="#3333FF"
                  unfillColor="#23232A14"
                  disableText={false}
                  checkIconImageSource={null}
                  iconStyle={{
                    borderWidth: 0
                  }}
                  onPress={(isChecked) => { setAct(isChecked) }}
                />
              </View>
            </View>
            <View style={styles.row}>
              <View>
                <Text style={styles.place}>Шереметьево</Text>
                <Text style={styles.placesub}>2 этаж, терминал F</Text>
              </View>
              <View style={styles.chekbox}>
                <BouncyCheckbox
                  size={25}
                  fillColor="#3333FF"
                  unfillColor="#23232A14"
                  disableText={false}
                  checkIconImageSource={null}
                  iconStyle={{
                    borderWidth: 0
                  }}
                  onPress={(isChecked) => { setAct(isChecked) }}
                />
              </View>
            </View>
            <View style={styles.row}>
              <View>
                <Text style={styles.place}>Шереметьево</Text>
                <Text style={styles.placesub}>2 этаж, терминал F</Text>
              </View>
              <View style={styles.chekbox}>
                <BouncyCheckbox
                  size={25}
                  fillColor="#3333FF"
                  unfillColor="#23232A14"
                  disableText={false}
                  checkIconImageSource={null}
                  iconStyle={{
                    borderWidth: 0
                  }}
                  onPress={(isChecked) => { setAct(isChecked) }}
                />
              </View>
            </View>
            <TouchableOpacity activeOpacity={.9} onPress={() => Send()} style={styles.btn}><Text style={{ fontFamily: 'Inter_700Bold', color: '#F2F2F3' }}>Подтвердите передачу</Text></TouchableOpacity>
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
    justifyContent: 'flex-start'
  },
  chekbox: {
    borderRadius: 12,
    backgroundColor: '#23232A14',
    width: 24,
    height: 24,
    marginTop: 21

  },
  place:{
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#0C0C0D',
  },
  placesub:{
    fontSize: 12,
    color: '#0C0C0D7A',
    fontFamily: 'Inter_500Medium'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    width: 327,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: '50%',
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
  },
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
    marginBottom: 30,
    elevation: 12,
  },
});
