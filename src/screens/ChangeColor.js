import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ColorCounter from "../Components/ColorCounter";

const COLOR_CHANGE = 15;

const ChangeColor = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  function setColor(color, change) {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  }

  return (
    <View>
      <ColorCounter
        title="Red"
        onIncrease={() => setColor("red", COLOR_CHANGE)}
        onDecrease={() => setColor("red", -1 * COLOR_CHANGE)}
      />
      <ColorCounter
        title="Green"
        onIncrease={() => setColor("green", COLOR_CHANGE)}
        onDecrease={() => setColor("green", -1 * COLOR_CHANGE)}
      />
      <ColorCounter
        title="Blue"
        onIncrease={() => setColor("blue", COLOR_CHANGE)}
        onDecrease={() => setColor("blue", -1 * COLOR_CHANGE)}
      />
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChangeColor;
