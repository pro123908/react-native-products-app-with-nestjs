import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
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

import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from '../actions/ProductsActions';
import {connect} from 'react-redux';
import {logoutUser} from '../actions/AuthActions';

const HomeScreen = (props) => {
  useEffect(() => {
    if (!props.accessToken) {
      props.navigation.navigate('Login');
    } else {
      props.getProducts();
    }
  }, [props.accessToken]);

  useEffect(() => {
    console.log(props.products);
  }, [props.products]);

  const addProductInApi = (title, desc) => {
    props.addProduct(props.email, title, desc);
    props.navigation.navigate('Home');
  };
  const productsArr = [];
  const getHeader = () => {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: props.image}}
          style={{height: 100, width: 100, marginRight: 10}}
        />
        <View style={{paddingRight: 10}}>
          <TextCustom
            text={`${props.name}`}
            // color="#000"
            fontSize={30}
            // textAlign="center"
            marginBottom={-5}
          />
          <TextCustom
            text={props.email}
            // color="#000"
            fontSize={14}
            // textAlign="center"

            fontWeight="500"
          />
        </View>
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
          marginTop: 100,
        }}>
        <TextCustom text="--- Ended ---" color="#000" fontSize={20} />
      </View>
    );
  };

  const getListEmptyComponent = () => {
    return (
      <TextCustom
        text="No Products Found"
        // color="#000"
        fontSize={20}
        textAlign="center"
      />
    );
  };

  return (
    <>
      {props.loading ? (
        <ActivityIndicator size="large" color="#1363bc" style={styles.loader} />
      ) : (
        <>
          <FlatList
            data={props.products}
            ListEmptyComponent={getListEmptyComponent()}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <Product
                navigation={props.navigation}
                product={item}
                currentUser={props.email}
                deleteProduct={props.deleteProduct}
                updateProduct={props.updateProduct}
              />
            )}
            ListHeaderComponent={getHeader}
            ListFooterComponent={props.products.length > 0 && getFooter()}
            // onEndReachedThreshold={1} // so when you are at 5 pixel from the bottom react run onEndReached function
            // onEndReached={() => {
            //   alert('On end');
            // }}
          />
          <RoundButtonWithIcon
            text="Add"
            icon="plus"
            position="absolute"
            size={70}
            border
            bottom={90}
            right={1}
            onPress={() =>
              props.navigation.navigate('Add', {
                onAddProduct: addProductInApi,
              })
            }
          />
          <RoundButtonWithIcon
            text="Logout"
            icon="logout"
            position="absolute"
            size={70}
            border
            onPress={() => props.logoutUser()}
          />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1363bc',

    paddingHorizontal: 10,
    // paddingVertical: 30,
    minHeight: 150,

    paddingVertical: 10,
    paddingBottom: 0,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'flex-start',
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
  accessToken: state.auth.accessToken,
  email: state.auth.email,
  image: state.auth.image,
  name: state.auth.name,
});

const mapDispatchToProps = {
  getProducts,
  addProduct,
  logoutUser,
  deleteProduct,
  updateProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
