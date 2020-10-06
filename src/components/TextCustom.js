import React from 'react';
import {StyleSheet, Text} from 'react-native';

const TextCustom = ({
  text,
  fontSize,
  color,
  textTransform,
  backgroundColor,
  marginBottom,
}) => {
  const stylesText = {
    fontSize: fontSize ? fontSize : 16,
    color: color ? color : '#fff',
    textTransform: textTransform ? textTransform : 'capitalize',
    marginBottom: marginBottom ? marginBottom : 0,
    backgroundColor: backgroundColor ? backgroundColor : 'transparent',
  };
  return <Text style={stylesText}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    textTransform: 'capitalize',
    marginBottom: 10,
  },
});

export default TextCustom;
