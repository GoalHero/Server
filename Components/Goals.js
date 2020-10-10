import React from "react";
import { View, Text, Button, StyleSheet, StatusBar } from "react-native";

const Goals = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text> THIS IS FOR THE GOALS</Text>
    </View>
  );
};

export default Goals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
