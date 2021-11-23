import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Toggle from 'react-native-toggle-element';
import {LogPass} from '../components/logpass';
import {LogPhone} from '../components/logphone';

// import AppLoading from 'expo-app-loading';
// import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold, useFonts } from '@expo-google-fonts/inter';



export default function Login({navigation}) {
  const [bPhone, setPhone] = useState(false);

  // let [fontsLoaded] = useFonts({
  //   Inter_400Regular,
  //   Inter_500Medium,
  //   Inter_600SemiBold,
  //   Inter_700Bold,
  //   Inter_800ExtraBold
  // });
  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Вход</Text>
      <Text style={styles.subtext}>Введите номер телефона,</Text>
      <Text style={[styles.subtext, {marginBottom: 24} ]}>чтобы войти в существующий акаунт</Text>
      <Toggle
          value={bPhone}
          onPress={(newState) => setPhone(newState)}
          // leftTitle="Номер телефона"
          // rightTitle="Логин / пароль"
          leftComponent={
            <Text style={{color: bPhone ? '#000' : '#F2F2F3', fontFamily:'Inter_500Medium' }}>Номер телефона</Text>
          }
          rightComponent={
            <Text style={{color: bPhone ? '#F2F2F3' : '#000', fontFamily:'Inter_500Medium' }}>Логин / пароль</Text>
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
            width: 150
          }}
          trackBar={{
            width: 327,
            height: 40,
            radius: 20,
            activeBackgroundColor: '#23232A14',
            inActiveBackgroundColor: '#23232A14',
          }}
        />
      {bPhone ?<LogPass navigation={navigation} /> : <LogPhone navigation={navigation} /> }
      
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
  title: {
    paddingTop: '10%',
    fontFamily: 'Inter_800ExtraBold',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtext:{
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: '#0C0C0D7A'
  },
});
