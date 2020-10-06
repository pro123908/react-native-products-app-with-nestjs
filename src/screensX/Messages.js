import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Messages = ({navigation}) => {
  return (
    <View>
      <Text>Messages Screen</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({});
