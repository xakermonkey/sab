// import AppLoading from 'expo-app-loading';
// import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold, useFonts,  } from '@expo-google-fonts/inter';
import TouchID from 'react-native-touch-id';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';

export const CustomKeyboard = ({Verify, pin, navigation}) => {

  const optionalConfigObject = {
    title: 'Authentication Required', // Android
    imageColor: '#e00606', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  };


  const Touch = () => {
    TouchID.authenticate('to demo this react-native component', optionalConfigObject)
    .then(() => {
      navigation.navigate('item');
    })
    .catch((error) => {
      Alert.alert(error.message);
      console.log(error);
    });
  }

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
    <View style={styles.container}>
    <View style={styles.row}>
        <TouchableOpacity activeOpacity={.5} onPress={() => Verify('1')} style={styles.circle}><Text style={styles.num}>1</Text></TouchableOpacity>
        <TouchableOpacity activeOpacity={.5} onPress={() => Verify('2')} style={styles.circle}><Text style={styles.num}>2</Text></TouchableOpacity>
        <TouchableOpacity activeOpacity={.5} onPress={() => Verify('3')} style={styles.circle}><Text style={styles.num}>3</Text></TouchableOpacity>
    </View>
    <View style={styles.row}>
        <TouchableOpacity activeOpacity={.5} onPress={() => Verify('4')} style={styles.circle}><Text style={styles.num}>4</Text></TouchableOpacity>
        <TouchableOpacity activeOpacity={.5} onPress={() => Verify('5')} style={styles.circle}><Text style={styles.num}>5</Text></TouchableOpacity>
        <TouchableOpacity activeOpacity={.5} onPress={() => Verify('6')} style={styles.circle}><Text style={styles.num}>6</Text></TouchableOpacity>
    </View>
    
    <View style={styles.row}>
        <TouchableOpacity activeOpacity={.5} onPress={() => Verify('7')} style={styles.circle}><Text style={styles.num}>7</Text></TouchableOpacity>
        <TouchableOpacity activeOpacity={.5} onPress={() => Verify('8')} style={styles.circle}><Text style={styles.num}>8</Text></TouchableOpacity>
        <TouchableOpacity activeOpacity={.5} onPress={() => Verify('9')} style={styles.circle}><Text style={styles.num}>9</Text></TouchableOpacity>
    </View >
    <View style={styles.row}>
        <TouchableOpacity onPress={Touch} activeOpacity={.5} style={[styles.circle, {backgroundColor: '#F9F9FA'}]}>{pin && <Image source={require('../assets/images/Finger.png')} style={{ width:25, height:25 }}/>}</TouchableOpacity>
        <TouchableOpacity activeOpacity={.5} onPress={() => Verify('0')} style={styles.circle}><Text style={styles.num}>0</Text></TouchableOpacity>
        <TouchableOpacity activeOpacity={.5} onPress={() => Verify('del')} style={[styles.circle, {backgroundColor: '#F9F9FA'}]}><Image source={require('../assets/images/Delete.png')} style={{ width:25, height:25 }}/></TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9FA',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  row:{
      flex:1,
      flexDirection: 'row',
      justifyContent: "space-around",
      width: 300,
      height: 72,
      marginTop: 24
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#23232A14',
    width: 72,
    height: 72,
    borderRadius: 75,
  },
  num:{
        color: '#0C0C0D',
        fontSize: 20,
        fontFamily: 'Inter_800ExtraBold',
  }
});
