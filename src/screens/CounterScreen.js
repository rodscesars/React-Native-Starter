import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const CountScreen = () => {
    const [counter, setCounter ] = useState(0);
  return (
    <View>
        <Button
        onPress={()=>{
            setCounter(counter + 1)
        }} 
        title='Increase'
      />
      <Button
        onPress={()=>{
            setCounter(counter - 1)
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

export default CountScreen;
