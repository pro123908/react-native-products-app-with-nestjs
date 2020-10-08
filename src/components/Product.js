import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import TextCustom from './TextCustom';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Product = ({
  product: {id, title, description, userImage},
  deleteProduct,
  updateProduct,
  navigation,
}) => {
  const updateProductWithFields = (title, description) => {
    updateProduct(id, {title, description});
    navigation.navigate('Home');
  };
  console.log('Single Product => ', {id, title, description, userImage});
  return (
    <View style={styles.mainContainer}>
      <Image
        style={{height: 100, width: 100, marginRight: 20}}
        source={{
          uri: userImage,
        }}
      />
      <View style={styles.container}>
        <View style={styles.productTop}>
          <TextCustom
            text={title}
            fontSize={25}
            marginBottom={10}
            marginRight={10}
            flex={5}
          />
          <View style={styles.icons}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Add', {
                  onAddProduct: updateProductWithFields,
                  values: {title, description},
                })
              }>
              <AntDesign
                color="#fff"
                name="edit"
                size={25}
                style={{marginTop: 2, marginRight: 10}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteProduct(id)}>
              <Entypo color="#fff" name="cross" size={30} />
            </TouchableOpacity>
          </View>
        </View>
        <TextCustom
          text={description ? description : 'No Description'}
          fontSize={16}
          marginBottom={10}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#1363bc',
    marginBottom: 20,
    borderRadius: 10,
    elevation: 20,
    marginRight: 10,
    marginLeft: 10,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    paddingTop: 5,
    justifyContent: 'flex-start',

    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 1},
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 5,
  },

  image: {
    flex: 1,
  },

  productTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  icons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,
    flex: 2,
  },
});

export default Product;
