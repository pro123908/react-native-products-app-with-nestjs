import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import RoundButtonWithIcon from '../components/RoundButtonWithIcon';
import InputWithIcon from '../components/InputWithIcon';
import TextCustom from '../components/TextCustom';
import TextInputCustom from '../components/TextInputCustom';
import ImagePicker from 'react-native-image-picker';
import {OpenImagePicker} from '../components/ImagePicker';

// More info on all the options is below in the API Reference... just some common use cases shown here

const AddProduct = ({route}) => {
  const {onAddProduct} = route.params;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [borderColor, setBorderColor] = useState('#000');
  const [image, setImage] = useState(null);

  // const openImagePicker = () => {
  //   const options = {
  //     title: 'Select Avatar',
  //     customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  //     storageOptions: {
  //       skipBackup: true,
  //       path: 'images',
  //     },
  //   };
  //   ImagePicker.showImagePicker(options, (response) => {
  //     console.log('Response = ', response);

  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //     } else if (response.customButton) {
  //       console.log('User tapped custom button: ', response.customButton);
  //     } else {
  //       const source = {uri: response.uri};
  //       setImage(source);
  //     }
  //   });
  // };

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
        // disabled={!(title && description)}
        // onPress={() => onAddProduct(title, description)}
        onPress={() => OpenImagePicker(setImage)}
      />
      {image && <Image source={image} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  image: {
    flex: 1,
  },
});

export default AddProduct;
