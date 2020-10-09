import React from "react";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Start Your GoalHero Journey!</Text>
        <TextInput placeholder="Email:" style={styles.textInputStyle} />
        <TextInput
          placeholder="Password:"
          password={true}
          style={styles.textInputStyle}
        />

        <View style={styles.buttonStyle}>
          <Text>Login</Text>
        </View>
        <View style={styles.buttonStyle}>
          <Text>Signup</Text>
        </View>

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 666,
    // flex: 0,
    //   flexDirection:"row",
    //   flexWrap: "wrap",
    backgroundColor: "#dddddd",
    alignItems: "center",
    // justifyContent: 'center',
  },
  img: {
    width: 55,
    height: 55,
    borderRadius: 200 / 2,
  },

  welcome: {
    marginTop: 111,
    fontSize: 28,
    marginBottom: 99,
  },

  textInputStyle: {
    marginTop: 8,
    width: "100%",
    height: 38,
    backgroundColor: "white",
    borderRadius: 100 / 50,
  },
  buttonStyle: {
    backgroundColor: "pink",
    width: 200,
    height: 40,
    borderRadius: 200 / 20,
    marginTop: 55,
    alignItems: "center",
    justifyContent: "center",
  },
});
