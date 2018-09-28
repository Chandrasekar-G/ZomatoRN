import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class HomePage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the HomePage</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});