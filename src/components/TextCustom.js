import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';

const TextCustom = ({
  text,
  fontSize,
  color,
  textTransform,
  backgroundColor,
  marginBottom,
  fontWeight,
  textAlign,
  onClick,
  flex,
  marginRight,
}) => {
  const [isFocus, isSetFocus] = useState(false);

  if (fontWeight) {
    if (fontWeight === '200') {
      fontWeight = 'PoppinsExtraLight';
    } else if (fontWeight === '300') {
      fontWeight = 'PoppinsLight';
    } else if (fontWeight === '500') {
      fontWeight = 'PoppinsMedium';
    } else if (fontWeight === '600') {
      fontWeight = 'PoppinsSemiBold';
    } else if (fontWeight === '700') {
      fontWeight = 'PoppinsBold';
    } else if (fontWeight === '800') {
      fontWeight = 'PoppinsExtraBold';
    }
  }
  const stylesText = [
    styles.text,
    fontSize && {fontSize: fontSize},
    color && {color: color},
    textTransform && {textTransform: textTransform},
    marginBottom && {marginBottom: marginBottom},

    backgroundColor && {backgroundColor: backgroundColor},
    fontWeight && {fontFamily: fontWeight},
    textAlign && {textAlign: textAlign},
    flex && {flex: flex},
    marginRight && {marginRight: marginRight},
  ];
  return (
    <Text style={stylesText} onPress={onClick}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',

    fontFamily: 'PoppinsRegular',
    flexShrink: 1,
  },
});

export default TextCustom;
