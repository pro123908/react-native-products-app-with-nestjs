import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';

const TextInputCustom = ({
  placeholder,
  value,
  onChangeHandler,
  onFocus,
  borderColor,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const inputStyles = [
    styles.textInput,
    isFocus && {borderBottomColor: '#1363bc'},
  ];
  return (
    <TextInput
      style={inputStyles}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeHandler}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
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
    borderBottomColor: '#333',

    fontSize: 20,
    marginBottom: 40,
  },
});

export default TextInputCustom;
