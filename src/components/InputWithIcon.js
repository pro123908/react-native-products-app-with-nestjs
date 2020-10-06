import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import TextCustom from './TextCustom';
import TextInputCustom from './TextInputCustom';
import AntIcon from 'react-native-vector-icons/AntDesign';

const InputWithIcon = ({icon, placeholder}) => {
  return (
    <View style={styles.container}>
      {/* <TextCustom text="Icon" fontSize={20} /> */}
      <AntIcon name={icon} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#fff"
        onChangeText={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    fontSize: 20,
    color: '#fff',
    marginRight: 5,
  },

  input: {},
});

export default InputWithIcon;
