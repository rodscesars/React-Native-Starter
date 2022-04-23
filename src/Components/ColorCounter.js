import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ColorCounter = ({ title, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Button onPress={onIncrease} title={`Increase ${title}`} />
      <Button onPress={onDecrease} title={`Decrease ${title}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
