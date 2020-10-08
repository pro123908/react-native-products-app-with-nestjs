import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import RoundButtonWithIcon from '../components/RoundButtonWithIcon';
import InputWithIcon from '../components/InputWithIcon';
import TextCustom from '../components/TextCustom';
import TextInputCustom from '../components/TextInputCustom';
import {ScrollView} from 'react-native-gesture-handler';

// More info on all the options is below in the API Reference... just some common use cases shown here

const AddProduct = (props) => {
  const {onAddProduct, values} = props.route.params;
  let prevTitle = values?.title;
  let prevDescription = values?.description;

  console.log('AD pro => ', {prevTitle, prevDescription});

  const [title, setTitle] = useState(prevTitle ? prevTitle : '');
  const [description, setDescription] = useState(
    prevDescription ? prevDescription : '',
  );

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
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <ScrollView>
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
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,

    height: Dimensions.get('window').height,
    justifyContent: 'center',
  },
});

export default AddProduct;
