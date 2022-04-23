import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend 1", age: 20 },
    { name: "Friend 2", age: 18 },
    { name: "Friend 3", age: 15 },
    { name: "Friend 4", age: 20 },
    { name: "Friend 5", age: 20 },
    { name: "Friend 6", age: 35 },
    { name: "Friend 7", age: 40 }
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.listStyle}>
            {item.name} - {item.age}
          </Text>
        );
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    marginVertical: 20,
    borderWidth: 1,
  },
});

export default ListScreen;
