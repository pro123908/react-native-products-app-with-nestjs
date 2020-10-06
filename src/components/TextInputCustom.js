import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const TextInputCustom = ({placeholder, value, onChangeHandler}) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeHandler}
      // placeholderTextColor="#83b3e7"
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    color: '#000',
    borderBottomWidth: 2,
    borderBottomColor: '#1363bc',
    fontFamily: 'PoppinsRegular',

    fontSize: 20,
    marginBottom: 40,
  },
});

export default TextInputCustom;
