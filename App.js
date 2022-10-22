import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NameText from "./src/components/NameText";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NameText name="Martins" />
        <NameText name="Ngene" />
        <NameText />
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
});
