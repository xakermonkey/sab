import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, TouchableOpacity} from 'react-native';

export const LogPass= ({navigation}) => {

  const [login, setLogin] = useState('')

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
      <Text style={styles.subtext}>Логин</Text>
      <TextInput 
        style={styles.input}
        value={login}
        onChangeText ={(text) => setLogin(text)} />
      <Text style={styles.subtext}>Пароль</Text>
      <TextInput 
        style={styles.input}
        secureTextEntry={true}
       />
      <View style={styles.down}>
      {/* <View style={styles.btn}> */}
      <TouchableOpacity activeOpacity={.9} style={styles.btn} onPress={()=> navigation.navigate('loginCode', params={login:login})}><Text style={{ fontFamily: 'Inter_700Bold', color: '#F2F2F3' }}>Войти</Text></TouchableOpacity>
        {/* <Button title="Войти" onPress={()=> navigation.navigate('loginCode', params={login:login})} color='#F2F2F3' /> */}
      {/* </View> */}
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9FA',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 25
  },
  down:{
    flex: 1,
    backgroundColor: '#F9F9FA',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
  subtext:{
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    color: '#0C0C0D7A',
    marginBottom: 10
  },
});
