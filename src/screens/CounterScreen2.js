import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const amount = 1;

const reducer = (state, action)=>{
  switch(action.type){
    case "increase":
      return {...state, counter: state.counter + action.payload};
    case "decrease":
      return {...state, counter: state.counter + action.payload};
  }
};

const CountScreen2 = () => {
  const [state, dispatch] = useReducer(reducer, {counter: 0});
  const { counter } = state;
  
  return (
    <View>
        <Button
        onPress={()=>{
            dispatch({ type: "increase", payload: amount })
        }} 
        title='Increase'
      />
      <Button
        onPress={()=>{
          dispatch({ type: "decrease", payload: -1 * amount })
        }} 
        title='Decrease'
      />
      <Text style={styles.text}>Current Count: {counter} </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default CountScreen2;
