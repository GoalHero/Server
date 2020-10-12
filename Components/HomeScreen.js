import React from "react";
import { View, Text, Button, StyleSheet, StatusBar } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>
        Welcome to Goal Hero! {"\n\n"}
        Blah blah blah. How does goal hero work? {"\n\n"}
        Make goals for yourself. Level up and defeat the enemy.
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
