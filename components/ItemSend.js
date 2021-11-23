import React, { useState} from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, TouchableOpacity } from 'react-native';



export const ItemSend = ({item, onSubmit}) => {

  const SendButton = ({onSubmit, id}) =>{
    return(
        <View style={[styles.btn, {backgroundColor: '#3333FF', marginTop: 16}]}>
        {/* <Button title="Сдать в камеру" onPress={()=>onSubmit(id)}  color='#F2F2F3' /> */}
        <TouchableOpacity activeOpacity={.9} style={styles.btn} nPress={()=>onSubmit(id)}><Text style={{ fontFamily: 'Inter_700Bold', color: '#F2F2F3' }}>Сдать в камеру</Text></TouchableOpacity>
    </View>
    );
};

const SendButtonDissable = () =>{
    return(
    <View style={[styles.btn, {backgroundColor: '#DFDFE1', marginTop: 16}]}>
        {/* <Button title="В процессе передачи ..." color='#0C0C0D' /> */}
        <TouchableOpacity activeOpacity={.9} style={styles.btn} nPress={()=>onSubmit(id)}><Text style={{ fontFamily: 'Inter_700Bold', color: '#0C0C0D' }}>В процессе передачи ...</Text></TouchableOpacity>
    </View>
    );
};


  return (
    <View style={[styles.container, {backgroundColor: item.sending ? '#23232A14' : '#FFFFFF'}  ]}>
        <View style={styles.rowimg}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {item.images.map((img, ind) => {
            return(<Image key={ind.toString()} source={img} height='56' width="56" style={{marginHorizontal: 2, borderRadius: 5}} />);
            })}
          </ScrollView>
        </View>
        <View style={styles.row}>
            <Text style={styles.subtext}>Дата</Text>
            <Text style={styles.valuetext} >{item.data}</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.subtext} >Время</Text>
            <Text style={styles.valuetext}>{item.time}</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.subtext} >Место</Text>
            <Text style={styles.valuetext}>{item.place}</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.subtext} >Акт осмотра</Text>
            <Text style={styles.valuetext}>{item.act ? "Имеется" : "Не имеется"}</Text>
        </View>
        <View style={{ width: '90%', justifyContent: 'flex-start'}}>
        <Text style={styles.subtext}>Описание</Text>
        <Text style={styles.infotext} >{item.info}</Text>
        </View>
        {item.sending ? <SendButton onSubmit={onSubmit} id={item.id} /> : <SendButtonDissable />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23232A14',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
    borderRadius: 16,
    width: 375,
    marginVertical: 8
  },
  btn: {
    // marginTop: 16,

    // backgroundColor: '#3333FF',
    width: 327,
    borderRadius: 12,
    fontSize: 14,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 9,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.48,
    shadowRadius: 16,

    elevation: 12,
  },
  row:{
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4
  },
  rowimg:{
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 4
  },
  subtext:{
      fontSize: 12,
      color: '#0C0C0D7A'
  },
  valuetext:{
      fontSize: 12,
      color: '#0C0C0D'
  },
  infotext:{
      fontSize: 16,
      color: '#0C0C0D'
  }
});
