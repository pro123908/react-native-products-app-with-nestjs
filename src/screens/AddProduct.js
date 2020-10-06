import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RoundButtonWithIcon from '../components/RoundButtonWithIcon';
import InputWithIcon from '../components/InputWithIcon';
import TextCustom from '../components/TextCustom';
import TextInputCustom from '../components/TextInputCustom';

const AddProduct = ({route}) => {
  const {onAddProduct} = route.params;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  return (
    <View style={styles.container}>
      <TextCustom
        text="Enter Product details to continue"
        color="#000"
        fontSize={25}
        textAlign="center"
        fontWeight={'500'}
        marginBottom={40}
      />
      <TextInputCustom
        placeholder="Product Title"
        value={title}
        onChangeHandler={(text) => setTitle(text)}
      />
      <TextInputCustom
        placeholder="Product Description"
        value={description}
        onChangeHandler={(text) => setDescription(text)}
      />
      <RoundButtonWithIcon
        text="Add Product"
        center
        icon="plus"
        backgroundColor="#1363bc"
        color="#fff"
        disabled={!(title && description)}
        onPress={() => onAddProduct(title, description)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default AddProduct;
