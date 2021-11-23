import React, { useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Button, TouchableOpacity } from 'react-native';
import { Item } from './Items';

export const PostItems = ({navigation}) => {

    const [items, setItems] = useState([
        {
            id: 1,
            images: [require('../assets/images/photo.png')],
            data: '11 октября',
            time: '11:45',
            place: 'Шереметьево, F',
            act: true,
            info: 'Iphone 7 синий'
        },
        {
            id:2,
            images: [require('../assets/images/photo.png'), require('../assets/images/photo.png'), require('../assets/images/photo.png')],
            data: '11 октября',
            time: '11:45',
            place: 'Шереметьево, F',
            act: false,
            info: 'Iphone 7 синий'
        },
        {
            id:3,
            images: [require('../assets/images/photo.png'), require('../assets/images/photo.png'), ],
            data: '11 октября',
            time: '11:45',
            place: 'Шереметьево, F',
            act: true,
            info: 'Iphone 7 синий'
        }
    ])

  return (
    <View style={styles.container} >
        <FlatList
        data={items}
        renderItem={Item}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
      {/* <View style={styles.btn}> */}
      <TouchableOpacity activeOpacity={.9} style={styles.btn} onPress={()=> navigation.navigate('addItem')}><Text style={{ fontFamily: 'Inter_700Bold', color: '#F2F2F3' }}>Зарегистрировать новый объект</Text></TouchableOpacity>

        {/* <Button title="Зарегистрировать новый объект" onPress={()=> navigation.navigate('addItem')} color='#F2F2F3' /> */}
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9FA',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10
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
});
