import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components"
      />
      <Button onPress={() => navigation.navigate("List")} title="Go to Lists" />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to ImageScreen"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to CounterScreen"
      />
      <Button
        onPress={() => navigation.navigate("Colors")}
        title="Go to ColorScreen"
      />
      <Button
        onPress={() => navigation.navigate("Change")}
        title="Go to ChangeColor"
      />
      <Button
      onPress={() => navigation.navigate("Text")}
      title="Go to TextScreen"
      />
      <Button
      onPress={() => navigation.navigate("Box")}
      title="Go to BoxScreen"
      />
      {/*       <TouchableOpacity
      onPress={()=>navigation.navigate("List")}>
        <Text>Go to List</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
