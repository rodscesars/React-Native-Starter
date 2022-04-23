import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const TextScreen= () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Enter name:</Text>
      <TextInput
      style={styles.input}
      autoCapitalize="none"
      autoCorrect={false}
      value={name}
      onChangeText={(newName)=> setName(newName)}/>
      <Text>My name is {name}</Text>
      <Text style={{marginTop: 15}} >Enter Password</Text>
      <TextInput
      style={styles.input}
      autoCapitalize="none"
      autoCorrect={false}
      value={password}
      onChangeText={(newPassword)=> setPassword(newPassword)}/>
      {password.length < 5 ? <Text>Password must be longer than 5 characters</Text>
      : null }
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    margin: 15,
    borderColor: "black"
  }
});

export default TextScreen;
