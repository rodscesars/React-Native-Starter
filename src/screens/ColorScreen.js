import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]); //definindo colors como um array vazio

  function randomRgb() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`; //vai gerar um rgb random
  }

  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => {
          setColors([...colors, randomRgb()]); //AO CLICAR, ELE VAI ADICIONAR
          //O QUE TIVER DE COLORS ANTERIORMENTE E GERAR UMA NOVA COR RANDOM
        }}
      />
      <FlatList
        keyExtractor={(item) => item} //COMO O ITEM: RGB(X,X,X) VAI SER ÚNICO, ENTÃO O
        //PROPRIO ITEM VAI SER A KEY
        data={colors}
        renderItem={({ item }) => {
          //PARA CADA ITEM DA DATA COLORS
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      /> 
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorScreen;
