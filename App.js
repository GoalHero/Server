

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,Button } from 'react-native';
import {icon} from 'react-native-vector-icons'
import Login from './Component/Login'
import Signup from './Component/Signup'

const heros = ["https://i.imgur.com/hjEkdfQ_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/e3nmpwl_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/kQdzPgD_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/I9u4j6B_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/g0uz6BD_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/0hQTpc8_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/CRVHKVQ_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/paC9vYv_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/6FthuE2_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/rt6jhj5_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/0cZtvWz_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/YytuN0W_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/dfEmvjo_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/vARVaeC_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/cpjTinS_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/I2qOOW5_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/cIw9UAt_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/MSsCJX0_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/3AQ9pdk_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/OofURQE_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/WsJp9vk_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/J4CA8LG_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/cv723mE_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/2NoNUSn_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/UeJK2h5_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/cisT6Mp_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/lQczn8q_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/MtyUmcN_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/nEgRbY8_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/oKxgLLD_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/vOE7vDl_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/6DHm4Rv_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/XQA1XmJ_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/c6fGNxN_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/Dt60Pfu_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/8SyFSNK_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/VYC5DPq_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/HN5Fusl_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/eXkJR2U_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/lRD2cQm_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/R6SeKt7_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/h3cfvg6_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/CkZpxnh_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/XhlsITd_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/sySpyXT_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/Ipr5oRt_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/dFQo3bV_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/lmJJTbQ_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/MQVxJMB_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/h8Y0nCz_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/7izkzqw_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/JZN8tp2_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/1ixpB85_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/XMRGQPv_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/tdAwgyO_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/Qu2b6To_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/27Rh9no_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/cORd8L9_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/XmIBq0L_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/P0jPHCZ_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/ZjBfe2M_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/3OeCNuk_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/KTM5MS8_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/Kc9La3F_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/mI2Qw4k_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/nYtLQMm_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/FyXcKe6_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/bNUJ4Ii_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/KPbXgGz_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/A5jgV8D_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/ZHBBKla_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/KSQOHv3_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/LAutsQc_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/g2qA4B2_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/sN7HoGY_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/fpw2j1d_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/xid7lUq_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/M067NkX_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/gfbwyZl_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/wsnzYtO_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/9svBnSG_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/SwoMhHL_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/RoqzHEd_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/N1FeWX5_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/MmdQtjT_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/plf7fkQ_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/eJxp6am_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/nCseXuO_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/ohjN0fa_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/0AGrnxn_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/yP7gMvB_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/fJZ889K_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/AGp5JQs_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/kcUV4N9_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/dOxwSuk_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/Fhfw8oy_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/wp20zrg_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/6H2W1Jo_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/aDYHLTX_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/HOJleDV_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/MZkqtok_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/y3ffjgv_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/E9kVZ7B_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/XHI6bF9_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/CZ4bBRO_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/clzxD4H_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/pmkOHsk_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/TOvsMmM_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/NgHmmgi_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/AgYiNm8_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/VKBFVSK_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/rw13Oku_d.webp?maxwidth=728&fidelity=grand"]





// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./Components/HomeScreen";
import Icon from "react-native-vector-icons";

const DetailScreen = () => {
  return (

    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Hi guys! This is the DETAILS Screen!</Text>


   

      <View >
      
      {/* <Text>Open up App your app!</Text> */}
      <Signup />

      <StatusBar style="auto" />

    </View>








   






    
  );
};

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Drawer = createDrawerNavigator();


const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      // options={{
      //   title: "Home",
      //   // headerLeft: () => (
      //   //   <Icon.Button
      //   //     name="ios-menu"
      //   //     size={25}
      //   //     backgroundColor="#009387"
      //   //     options={() => {
      //   //       navigation.openDrawer();
      //   //     }}
      //   //   ></Icon.Button>
      //   // ),
      // }}
      // options={{
      //   headerLeft: () => (
      //     <Icon.Button
      //       name="ios-menu"
      //       size={25}
      //       // backgroundColor="#7FAFD0"
      //       backgroundColor="#114C9F"
      //       onPress={() => navigation.openDrawer()}
      //     ></Icon.Button>
      //   ),
      // }}
    />
  </HomeStack.Navigator>
);

const DetailStackScreen = ({ navigation }) => (
  <DetailStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <DetailStack.Screen name="Detail" component={DetailScreen} />
  </DetailStack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        {/* FISH: add log in here!
        <Drawer.Screen name="" component={} />
        STEPHEN/KEVIN: add game here!
        <Drawer.Screen name="" component={} /> */}
        <Drawer.Screen name="Detail" component={DetailStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
     flex: 1,
    // flexDirection:"row",
    // flexWrap: "wrap",
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  img:{
width:55,
height:55,
borderRadius:200/2,
  }
  
  
  ,
});


