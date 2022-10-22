import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is my custom application!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#aaa",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    width: "90%",
    borderRadius: 8,
    padding: 12,
    color: "#000",
    fontSize: 16,
    backgroundColor: "#e3e3e3",
  },
});
