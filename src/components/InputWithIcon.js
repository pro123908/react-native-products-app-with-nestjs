import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import TextCustom from './TextCustom';
import TextInputCustom from './TextInputCustom';
import AntIcon from 'react-native-vector-icons/AntDesign';

const InputWithIcon = ({
  icon,
  placeholder,
  onChangeText,
  onBlur,
  value,
  error,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {/* <TextCustom text="Icon" fontSize={20} /> */}
        <AntIcon name={icon} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#fff"
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
        />
      </View>
      <TextCustom
        text={error ? error : ''}
        color="yellow"
        fontSize={14}
        fontWeight="500"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 30,
  },
  container: {
    width: '100%',

    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },

  icon: {
    fontSize: 20,
    color: '#fff',
    marginRight: 5,
  },

  input: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'PoppinsRegular',

    flex: 1,
  },
});

export default InputWithIcon;
