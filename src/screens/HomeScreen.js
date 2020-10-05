import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation, route}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Update Count"
          onPress={() => setCount((count) => count + 1)}
        />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text>Home ScreenX</Text>
      <Text>{route.params.itemId}</Text>
      <Text>{route.params.desc}</Text>
      <Text>Count : {count}</Text>
      <TouchableOpacity
        style={styles.navBtn}
        onPress={
          () =>
            navigation.navigate('About', {
              itemId: 255,
              desc: 'Item 255',
              title: 'About through Home',
            })
          // navigation.push("About")
          // navigation.popToTop();
          // navigation.goBack()
          //navigation.navigate("Home")
        }>
        <Text style={{color: '#fff', fontSize: 20}}>About Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navBtn}
        onPress={
          () => navigation.navigate('Modal')
          // navigation.push("About")
          // navigation.popToTop();
          // navigation.goBack()
          //navigation.navigate("Home")
        }>
        <Text style={{color: '#fff', fontSize: 20}}>Open Modal</Text>
      </TouchableOpacity>
    </View>
  );
};

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

export default HomeScreen;
