import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import RoundButtonWithIcon from '../components/RoundButtonWithIcon';
import InputWithIcon from '../components/InputWithIcon';
import TextCustom from '../components/TextCustom';
import TextInputCustom from '../components/TextInputCustom';

// More info on all the options is below in the API Reference... just some common use cases shown here

const AddProduct = (props) => {
  const {onAddProduct} = props.route.params;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [borderColor, setBorderColor] = useState('#000');

  return (
    <>
      <RoundButtonWithIcon
        text="Add Product"
        icon="back"
        backgroundColor="#1363bc"
        position="absolute"
        top={10}
        left={10}
        size={60}
        color="#fff"
        onPress={() => props.navigation.goBack()}
      />
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
          borderColor={borderColor}
          onFocus={() => setBorderColor('#1363bc')}
        />
        <TextInputCustom
          placeholder="Product Description"
          value={description}
          onChangeHandler={(text) => setDescription(text)}
          borderColor={borderColor}
          onFocus={() => setBorderColor('#1363bc')}
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
        {/* <Image
          style={{flex: 1, height: 100, width: 100, marginRight: 20}}
          source={{
            uri:
              'content://com.google.android.apps.photos.contentprovider/-1/1/content%3A%2F%2Fmedia%2Fexternal%2Fimages%2Fmedia%2F20/ORIGINAL/NONE/image%2Fjpeg/156725367',
          }}
        /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  image: {
    flex: 1,
  },
});

export default AddProduct;
