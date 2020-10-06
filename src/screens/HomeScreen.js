import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import InputWithIcon from '../components/InputWithIcon';
import {AntIcon} from 'react-native-vector-icons/AntDesign';
import TextCustom from '../components/TextCustom';
import RoundButtonWithIcon from '../components/RoundButtonWithIcon';

import Product from '../components/Product';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import {addProduct, getProducts} from '../actions/ProductsActions';
import {connect} from 'react-redux';

const HomeScreen = (props) => {
  useEffect(() => {
    props.getProducts();
  }, []);

  useEffect(() => {
    console.log(props.products);
  }, [props.products]);

  const addProductInApi = (title, desc) => {
    props.addProduct(title, desc);
    props.navigation.navigate('Home');
  };
  const productsArr = [];
  const getHeader = () => {
    return (
      <View style={styles.container}>
        <TextCustom
          text="Your Products"
          color="#000"
          fontSize={25}
          textAlign="center"
          marginBottom={10}
          fontWeight="500"
        />

        {/* <TextCustom
          text="Products"
          color="#000"
          fontSize={30}
          marginBottom={20}
        /> */}
      </View>
    );
  };

  const getFooter = () => {
    if (false) {
      return null;
    }
    return (
      <View
        style={{
          // backgroundColor: '#1363bc',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 10,
          marginLeft: 10,
        }}>
        <TextCustom text="--- Ended ---" color="#000" fontSize={20} />
      </View>
      // <ActivityIndicator
      //   size="large"
      //   color="#1363bc"
      //   animating={props.loading}
      // />
    );
  };

  return (
    <>
      {props.loading ? (
        <ActivityIndicator size="large" color="#1363bc" style={styles.loader} />
      ) : (
        <>
          <FlatList
            data={props.products.reverse()}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item: {title, description}}) => (
              <Product title={title} description={description} />
            )}
            ListHeaderComponent={getHeader}
            ListFooterComponent={getFooter}
          />
          <RoundButtonWithIcon
            text="Add"
            icon="plus"
            position="absolute"
            border
            onPress={() =>
              props.navigation.navigate('Add', {
                onAddProduct: addProductInApi,
              })
            }
          />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#1363bc',
    backgroundColor: '#fff',
    padding: 30,
    alignItems: 'center',
    paddingBottom: 0,
  },

  screenTitle: {
    fontSize: 30,
  },

  icon: {},

  input: {},

  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'rgba(0,0,0,.4)',
  },
});

const mapStateToProps = (state) => ({
  products: state.products.products,
  loading: state.products.loading,
});

const mapDispatchToProps = {
  getProducts,
  addProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
