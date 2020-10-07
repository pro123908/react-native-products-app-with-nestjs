import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import AntIcon from 'react-native-vector-icons/AntDesign';
import TextCustom from './TextCustom';

const RoundButtonWithIcon = ({
  icon = 'user',
  placeholder,
  text,
  onPress,
  borderRadius,
  center,
  position,
  backgroundColor,
  color,
  border,
  disabled,
  size,
  marginBottom,
  marginRight,
  bottom,
  right,
  top,
  left,
}) => {
  const buttonStyles = [
    styles.container,
    center && {alignSelf: 'center'},
    position && {
      position: position,
      bottom: bottom ? bottom : 10,
      right: right ? right : 10,
      top: top && top,
      left: left && left,
    },

    backgroundColor && {backgroundColor: backgroundColor},
    border && {borderWidth: 3, borderColor: '#2c629e'},
    disabled && {backgroundColor: '#d3d3d3'},
    size && {width: size, height: size},
    marginBottom && {marginBottom: marginBottom},
    marginRight && {marginRight: marginRight},
  ];
  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyles}
      disabled={disabled}>
      <View style={styles.iconContainer}>
        <AntIcon
          name={icon}
          style={styles.icon}
          color={color ? color : '#1363bc'}
          size={size ? size / 2 : 40}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'white',

    elevation: 5,

    width: 80,
    height: 80,

    borderRadius: 100,
  },

  iconContainer: {
    alignItems: 'center',
  },

  icon: {},

  input: {},
});

export default RoundButtonWithIcon;
