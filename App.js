
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import LoginCode from './screens/LoginCode';
import Pin from './screens/Pin';
import AddItems from './screens/AddItems';
import ListItems from './screens/ListItems';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import * as Font from 'expo-font';

import AppLoading from 'expo-app-loading';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold, useFonts } from '@expo-google-fonts/inter';


const LoginStack = createNativeStackNavigator();
const ItemStack = createNativeStackNavigator();

// const fetchFont = () => {
//   return Font.loadAsync({
//     'Inter': require('./assets/fonts/Inter.ttf'),
//   });
// };

function Items() {
  return (
    <ItemStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#F9F9FA'
        }
      }}
    >
      <ItemStack.Screen
        options={{
          headerTitle: 'Забытые вещи',
          headerShadowVisible: false,
          headerBackVisible: false
        }}
        name='itemList' component={ListItems}/>
      <ItemStack.Screen
        options={{
          headerTitle: 'Регистрация забытой вещи',
          headerShadowVisible: false,
          headerBackTitle: '',
          headerTintColor: '#0C0C0D'
        }}
        name='addItem' component={AddItems} />
    </ItemStack.Navigator>
  );
}


export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  // const [fontLoaded, setFontLoaded] = useState(false);

  // let [fontsLoaded] = useFonts({
  //   Inter_400Regular,
  //   Inter_600SemiBold,
  //   Inter_700Bold
  // });
  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <NavigationContainer>
      <LoginStack.Navigator
        initialRouteName='item'  // убрать потом
        screenOptions={{
          headerShown: false
        }}>
        <LoginStack.Screen
          name="login"
          component={Login} />
        <LoginStack.Screen
          name="loginCode"
          component={LoginCode} />
        <LoginStack.Screen
          name="pin"
          component={Pin} />
        <LoginStack.Screen
          name="item"
          component={Items} />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
}