import React from "react";
import {Text, StyleSheet, View, Image} from 'react-native';

const ImageDetail = (props)=> {
    return (
    <View>
        <Image source={props.imageSource} />
        <Text>{props.title}</Text>
        <Text>Image Score - {props.imageSource}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ImageDetail;