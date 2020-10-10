import React from "react";
import { View, Text, Button, StyleSheet, StatusBar } from "react-native";

const Play = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text> THIS IS THE GAME PAGE!!!</Text>
    </View>
  );
};

export default Play;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
