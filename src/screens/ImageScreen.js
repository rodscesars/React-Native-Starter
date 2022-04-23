import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../Components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title={"Forest"}
        imageSource={require("../../assets/forest.jpg")}
      ></ImageDetail>
      <ImageDetail
        title={"Beach"}
        imageSource={require("../../assets/beach.jpg")}
      ></ImageDetail>
      <ImageDetail
        title={"Mountain"}
        imageSource={require("../../assets/mountain.jpg")}
      ></ImageDetail>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
