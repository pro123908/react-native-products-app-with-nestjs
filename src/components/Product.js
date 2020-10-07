import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import TextCustom from './TextCustom';

const Product = ({title, description}) => {
  return (
    <View style={styles.mainContainer}>
      <Image
        style={{height: 100, width: 100, marginRight: 20}}
        source={{
          uri:
            'content://com.google.android.apps.photos.contentprovider/-1/1/content%3A%2F%2Fmedia%2Fexternal%2Fimages%2Fmedia%2F20/ORIGINAL/NONE/image%2Fjpeg/156725367',
        }}
      />
      <View style={styles.container}>
        <TextCustom text={title} fontSize={20} marginBottom={10} />
        <TextCustom
          text={description ? description : 'No Description'}
          fontSize={16}
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
});

export default Product;
