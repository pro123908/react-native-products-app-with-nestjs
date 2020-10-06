import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import InputWithIcon from '../components/InputWithIcon';
import {AntIcon} from 'react-native-vector-icons/AntDesign';
import TextCustom from '../components/TextCustom';
import ButtonWithIcon from '../components/ButtonWithIcon';
import Product from '../components/Product';
import {ScrollView} from 'react-native-gesture-handler';

const HomeScreen = () => {
  const productsArr = [];
  const getHeader = () => {
    return (
      <View style={styles.container}>
        <TextCustom
          text="Products"
          color="#000"
          fontSize={30}
          marginBottom={20}
        />
        <TextCustom
          text="Add products to your list"
          color="#000"
          fontSize={20}
          marginBottom={20}
        />
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
          backgroundColor: '#1363bc',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 10,
          marginLeft: 10,
          borderRadius: 10,
        }}>
        <TextCustom text="Loading..." fontSize={20} />
      </View>
    );
  };

  return (
    <FlatList
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      keyExtractor={(item, index) => index.toString()}
      renderItem={() => <Product />}
      ListHeaderComponent={getHeader}
      ListFooterComponent={getFooter}
    />
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
});
export default HomeScreen;
