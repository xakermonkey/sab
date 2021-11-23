import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import { CustomKeyboard } from '../components/CustomKeyboard';

export default function LoginCode({route, navigation}) {

const [code, setCode] = useState('');

  const Verify = (num) =>{
    if (num === 'del'){
      setCode(code.slice(0,-1));
    }
    else{
      setCode(code + num);
    }
    
  };

  useEffect(() => {
    if (code.length ===4){
      navigation.navigate('pin');
    }
  })

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Код из СМС</Text>
      <Text style={styles.subtext}>Введите код из сообщения,</Text>
      <Text style={styles.subtext }>отправленного на номер</Text>
      <Text style={[styles.subtext, {marginBottom: 24} ]}>{route.params.login}</Text>
      <TextInput style={styles.inpuText} value={code} keyboardType='numeric' onChangeText={(text) => setCode(text)} />
      {/* <Text style={styles.sms} >5732</Text> */}
      <CustomKeyboard Verify={Verify} pin={false} navigation={navigation} />
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
    paddingTop: '10%',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Inter_800ExtraBold'
  },
  sms:{
    height: 40,
    width: 108,
    backgroundColor: '#23232A14'
  },
  subtext:{
    fontSize: 16,
    color: '#0C0C0D7A',
    fontFamily: 'Inter_500Medium'
  },
  inpuText:{
    fontSize: 32,
    color: '#0C0C0D',
    marginTop: 45,
    fontWeight: 'bold',
    marginBottom: 45
  }
});
