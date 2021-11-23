import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Keyboard, TouchableOpacity, Image } from 'react-native';
import { CustomKeyboard } from './CustomKeyboard';

export const LogPhone = ({navigation}) => {

    const [number, setNum] = useState("+7");
    const [selection, setSelection] = useState(2);

    const Verify = (num) =>{
        if (num === 'del'){
            if (number.length > 2){
            setNum(number.slice(0,selection-1)+ number.slice(selection));
            setSelection(selection-1);
            }
        }else{
            setNum(number.slice(0,selection)+num+number.slice(selection));
            setSelection(selection + 1);
        }
        
      };
    
    useEffect(() =>{
      if (number.length === 12){
        navigation.navigate('loginCode', params={login:number});
      }
    })

  return (
    <View style={styles.container}>
      <TextInput style={styles.subtext} value={number} onSelectionChange={(el) => setSelection(el.nativeEvent.selection.start)} showSoftInputOnFocus={false} keyboardType="phone-pad" onChangeText={(text) => setNum(text)} />
      <CustomKeyboard Verify={Verify} pin={false} navigation={navigation} />
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
  input: {
    marginTop: 10,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: '#23232A14'
  },
  subtext:{
    fontSize: 32,
    color: '#0C0C0D',
    marginTop: 45,
    fontWeight: 'bold',
    marginBottom: 45
  },
});
