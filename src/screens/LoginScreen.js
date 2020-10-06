import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import InputWithIcon from '../components/InputWithIcon';
import {AntIcon} from 'react-native-vector-icons/AntDesign';
import TextCustom from '../components/TextCustom';
import ButtonWithIcon from '../components/ButtonWithIcon';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <TextCustom
        fontSize={30}
        textTransform="uppercase"
        text="Login"
        marginBottom={20}
      />
      <TextCustom
        fontSize={16}
        textTransform="uppercase"
        text="Hey, let's get started"
        marginBottom={30}
      />
      <InputWithIcon placeholder="Email Address" icon="user" />
      <InputWithIcon placeholder="Password" icon="key" />
      <ButtonWithIcon text="Continue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1363bc',
    padding: 30,
    alignItems: 'center',
  },

  screenTitle: {
    fontSize: 30,
  },

  icon: {},

  input: {},
});
export default LoginScreen;
