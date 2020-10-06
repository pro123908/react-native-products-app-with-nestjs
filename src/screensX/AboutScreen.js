import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const AboutScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text>About Screen</Text>
      <Text>{route.params.itemId}</Text>
      <Text>{route.params.desc}</Text>
      <TouchableOpacity
        style={styles.navBtn}
        onPress={
          // () => navigation.navigate('Home', {itemId: 125, desc: 'Item 125'})
          () => navigation.setParams({itemId: 1999, desc: 'Item 1999'})
          // navigation.push("About")
          // navigation.popToTop();
          // navigation.goBack()
          //navigation.navigate("Home")
        }>
        <Text style={{color: '#fff', fontSize: 20}}>Update Params</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navBtn}
        onPress={
          () => navigation.setOptions({title: 'Updated inside now!'})

          // navigation.push("About")
          // navigation.popToTop();
          // navigation.goBack()
          //navigation.navigate("Home")
        }>
        <Text style={{color: '#fff', fontSize: 20}}>Update the title</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navBtn}
        onPress={
          () => navigation.navigate('Home', {itemId: 125, desc: 'Item 125'})

          // navigation.push("About")
          // navigation.popToTop();
          // navigation.goBack()
          //navigation.navigate("Home")
        }>
        <Text style={{color: '#fff', fontSize: 20}}>Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  navBtn: {
    marginVertical: 10,
    backgroundColor: 'rgb(0,0,0)',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
