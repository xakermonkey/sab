import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity } from 'react-native';

import { CustomKeyboard } from '../components/CustomKeyboard';

export default function Pin({ navigation }) {

  


  const [number, setNum] = useState("");

  const Verify = (num) => {
    if (num === 'del') {
      setNum(number.slice(0, -1));
    } else {
      setNum(number + num);
      if (number.length +1  === 4) {
        navigation.navigate('item');
      }
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Введите Пин-код</Text>
      <Text style={styles.subtext}>для входа</Text>
        <View style={styles.row} >
          <View style={[styles.circle, { backgroundColor: number.length > 0 ? '#3333FF' : '#23232A14' }]}></View>
          <View style={[styles.circle, { backgroundColor: number.length > 1 ? '#3333FF' : '#23232A14' }]} ></View>
          <View style={[styles.circle, { backgroundColor: number.length > 2 ? '#3333FF' : '#23232A14' }]} ></View>
          <View style={[styles.circle, { backgroundColor: number.length > 3 ? '#3333FF' : '#23232A14' }]} ></View>
      </View>
      <TouchableOpacity><Text style={styles.repeat}>Забыл пароль</Text></TouchableOpacity>
      <CustomKeyboard Verify={Verify} pin={true} navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    color: '#0C0C0D',
    marginTop: 10,
    fontFamily: 'Inter_800ExtraBold'
  },
  subtext: {
    fontSize: 14,
    color: '#0C0C0D7A',
    fontFamily: 'Inter_600SemiBold'
  },
  repeat: {
    fontSize: 14,
    color: '#0C0C0D',
    fontFamily: 'Inter_700Bold'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 100,
  },
  circle: {
    width: 20,
    height: 20,
    backgroundColor: '#23232A14',
    marginHorizontal: 8,
    borderRadius: 20
  }
});
