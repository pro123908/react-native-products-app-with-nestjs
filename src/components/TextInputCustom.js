import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const TextInputCustom = ({placeholder, value, onChangeHandler}) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      onChangeText={onChangeHandler}
      placeholderTextColor="#fff"
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    color: '#fff',
  },
});

export default TextInputCustom;
