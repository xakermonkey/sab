import React, { useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native';

export const Item = ({item}) => {

  return (
    <View style={styles.container}>
        <View style={styles.rowimg}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
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
