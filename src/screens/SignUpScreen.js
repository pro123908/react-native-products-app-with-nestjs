import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View, Image} from 'react-native';
import InputWithIcon from '../components/InputWithIcon';
import {AntIcon} from 'react-native-vector-icons/AntDesign';
import TextCustom from '../components/TextCustom';
import ButtonWithIcon from '../components/ButtonWithIcon';
import RoundButtonWithIcon from '../components/RoundButtonWithIcon';
import {OpenImagePicker} from '../components/ImagePicker';
import {ScrollView} from 'react-native-gesture-handler';

const SignUpScreen = () => {
  const [image, setImage] = useState(null);

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <TextCustom
            fontSize={30}
            textTransform="uppercase"
            text="Sign Up"
            marginBottom={20}
          />
          <TextCustom
            fontSize={16}
            textTransform="uppercase"
            text="Hey, let's get started"
            marginBottom={30}
          />
          <InputWithIcon placeholder="Name" icon="book" />
          <InputWithIcon placeholder="Email Address" icon="user" />
          <InputWithIcon placeholder="Password" icon="key" />
          <View style={styles.uploadImage}>
            <RoundButtonWithIcon
              icon="plus"
              size={50}
              marginRight={10}
              onPress={() => {
                OpenImagePicker(setImage);
              }}
            />
            <TextCustom text="Upload your profile picture" fontSize={18} />
          </View>
          {image && <Image source={image} style={styles.image} />}
          <ButtonWithIcon text="Continue" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1363bc',
    padding: 30,
    alignItems: 'center',
  },

  screenTitle: {
    fontSize: 30,
  },

  icon: {},

  input: {},

  uploadImage: {
    width: '100%',
    flexDirection: 'row',
    // width: Dimensions.get('window').width - 30,

    alignItems: 'center',
    marginBottom: 20,

    overflow: 'hidden',
  },
  image: {
    flex: 1,
    backgroundColor: 'red',
    width: '100%',
    height: 200,
    marginBottom: 30,
  },
});
export default SignUpScreen;
