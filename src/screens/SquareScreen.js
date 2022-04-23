import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  //a função reducer já recebe o state através do useReducer
  switch (action.type) {
    case "change_red":
      return state.red + action.playload > 255 ||
        state.red + action.playload < 0
        ? state
        : { ...state, red: state.red + action.payload }; //retorna um novo array, pegando o que já existia anteriormente como state e substituindo o red
    case "change_green":
      return state.green + action.playload > 255 ||
        state.green + action.playload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.playload > 255 ||
        state.blue + action.playload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  //o state é passado como um objeto no segundo argumento
  //o dispatch roda a função reducer, utilizando o parâmetro action, ou seja, a forma como vai ser alterada o state
  //por isso o dispatch nomeia os parâmetros lá embaixo que serão utilizados como o segundo parâmetro da função reducer
  const { red, green, blue } = state; //desestruturando do state, as keys para serem utilizadas

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
