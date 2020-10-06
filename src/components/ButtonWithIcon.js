import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import AntIcon from 'react-native-vector-icons/AntDesign';
import TextCustom from './TextCustom';

const ButtonWithIcon = ({icon, placeholder, text}) => {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.container}>
      <TextCustom text={text} fontSize={20} color="#1363bc" />
      <View style={styles.iconContainer}>
        <AntIcon name="arrowright" style={styles.icon} color="#1363bc" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#fff',
    padding: 10,
  },

  iconContainer: {
    alignItems: 'center',
  },

  icon: {fontSize: 20, marginLeft: 5},

  input: {},
});

export default ButtonWithIcon;
