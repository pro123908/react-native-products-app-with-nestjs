import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TextCustom from './TextCustom';

const Product = ({title, description}) => {
  return (
    <View style={styles.container}>
      <TextCustom text={title} fontSize={20} marginBottom={10} />
      <TextCustom
        text={description ? description : 'No Description'}
        fontSize={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1363bc',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    elevation: 20,
    marginRight: 10,
    marginLeft: 10,

    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 1},
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 5,
  },
});

export default Product;
