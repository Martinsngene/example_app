import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

export default class NameText extends Component {
  render() {
    // In order to use props, we must use the this keyword for proper reference
    return <Text style={styles.text}>{this.props.name}</Text>;
  }
}

// Using the StyleSheet object, we can style our components
const styles = StyleSheet.create({
  text: {
    width: "90%",
    textAlign: "center",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: "#000",
    fontSize: 16,
    backgroundColor: "#e3e3e3",
    marginVertical: 5,
  },
});
