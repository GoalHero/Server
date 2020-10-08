import React from 'react';
import { StyleSheet, Text, View,Image,Button, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const heros = ["https://i.imgur.com/hjEkdfQ_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/e3nmpwl_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/kQdzPgD_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/I9u4j6B_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/g0uz6BD_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/0hQTpc8_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/CRVHKVQ_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/paC9vYv_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/6FthuE2_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/rt6jhj5_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/0cZtvWz_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/YytuN0W_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/dfEmvjo_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/vARVaeC_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/cpjTinS_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/I2qOOW5_d.webp?maxwidth=728&fidelity=grand","https://i.imgur.com/cIw9UAt_d.webp?maxwidth=728&fidelity=grand"]
export default  class Signup extends React.Component{

    render(){
    return (
  
     
  
        <View style = {styles.container} >
        
        <Text style = {styles.welcome}>Sign Up!</Text>
        <TextInput placeholder="Name:"  style = {styles.textInputStyle} /> 
      <TextInput placeholder="Email:"  style = {styles.textInputStyle} /> 
      <TextInput placeholder="Password:"  password={true}  style = {styles.textInputStyle}/> 
<View>

{/* {heros.map(hero,index)=>{
    return(
        <Image />
    )
}} */}

</View>
     
      <View style = {styles.buttonStyle}>
          <Text >Signup</Text>
      </View>

  
        <StatusBar style="auto" />
      </View>
  
  
  
  
  
  
  
  
     
  
  
  
  
  
  
      
    );
  }
}
  
  const styles = StyleSheet.create({
    container: {
        height:666,
     // flex: 0,
    //   flexDirection:"row",
    //   flexWrap: "wrap",
      backgroundColor: '#dddddd',
      alignItems: 'center',
     // justifyContent: 'center',
    },
    img:{
  width:55,
  height:55,
  borderRadius:200/2,
    }
    
    
    ,
    welcome:{
marginTop:111,
fontSize:28,
marginBottom:99
    },

   textInputStyle: {
    marginTop:8,
width:"100%",
height:38,
backgroundColor:"white",
borderRadius:100/50,
    },
    buttonStyle:{
        backgroundColor:"pink",
        width:200,
        height:40,
        borderRadius:200/20,
        marginTop:55,
        alignItems: 'center',
        justifyContent: 'center',
        
    }
  });
  