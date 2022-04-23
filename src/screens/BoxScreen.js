import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.contentOne}/>
      <View style={styles.contentTwo}/>
      <View style={styles.contentThree}/>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 350
  },
  contentOne: {
    width: 100,
    height: 100,
    backgroundColor: "pink"
  },
  contentTwo: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    top: 100
  },
  contentThree: {
    width: 100,
    height: 100,
    backgroundColor: "green"
  }
});

export default BoxScreen;
