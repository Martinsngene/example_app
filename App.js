import React from "react";
import { View, StyleSheet, Image } from "react-native";
import CustomImage from "./src/components/CustomImage";
import NameText from "./src/components/NameText";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomImage
          isNetwork={true}
          url="https://images.unsplash.com/photo-1659645687954-52b82be586da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VuJTIwYXQlMjBzdW5zZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        />
        <NameText name="Adding Images 🤗🤗🤗" />
        <Image
          source={require("./assets/images/smile.jpg")}
          style={styles.imageStyles}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyles: {
    width: 380,
    height: 200,
    marginVertical: 15,
    borderRadius: 10,
  },
});
