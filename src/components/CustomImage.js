import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";

export default class CustomImage extends Component {
  render() {
    return (
      <Image
        source={{
          uri: this.props.url,
        }}
        style={styles.container}
      />
    );
  }
}

// Styling The Component

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 380,
    borderRadius: 10,
    marginVertical: 15,
  },
});
