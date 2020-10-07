import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Text, View, Image} from 'react-native';
import InputWithIcon from '../components/InputWithIcon';
import {AntIcon} from 'react-native-vector-icons/AntDesign';
import TextCustom from '../components/TextCustom';
import ButtonWithIcon from '../components/ButtonWithIcon';
import RoundButtonWithIcon from '../components/RoundButtonWithIcon';
import {OpenImagePicker} from '../components/ImagePicker';
import {ScrollView} from 'react-native-gesture-handler';
import {Formik} from 'formik';
import {clearRegistrationError, registerUser} from '../actions/AuthActions';
import {connect} from 'react-redux';

const SignUpScreen = (props) => {
  const [image, setImage] = useState(null);
  const [imageError, setImageError] = useState('');
  const [imageResponse, setImageResponse] = useState(null);

  useEffect(() => {
    if (props.accessToken) {
      props.navigation.navigate('Home');
    }
  }, [props.accessToken]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('beforeRemove', () => {
      props.clearRegistrationError();
    });

    return unsubscribe;
  }, [props.navigation]);

  console.log('Imag rard = ', imageResponse);
  return (
    <View style={styles.aboveView}>
      <ScrollView>
        <View style={styles.container}>
          <TextCustom
            fontSize={40}
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

          {props.error?.message && (
            <TextCustom
              fontSize={16}
              textTransform="uppercase"
              text={props.error.message}
              marginBottom={5}
              color="yellow"
            />
          )}
          <Formik
            initialValues={{
              name: 'Bilal Ahmad',
              email: 'pro123908@gmail.com',
              password: 'home123',

              // name: '',
              // email: '',
              // password: '',
            }}
            validate={(values) => {
              const errors = {};

              if (!values.name) errors.name = 'Name is required';
              if (!values.email) {
                errors.email = 'Email is Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }

              if (!values.password) errors.password = 'Password is Required';
              else if (values.password.length < 6)
                errors.password = 'Minimum 6 characters long';
              return errors;
            }}
            onSubmit={({name, email, password}, {setSubmitting}) => {
              if (!image && !imageResponse) {
                setImageError('Picture Required');
              } else {
                props.registerUser(
                  name,
                  email,
                  password,
                  image.uri,
                  props.navigation,
                );
                setSubmitting(false);
              }
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              touched,
              errors,
            }) => (
              <>
                <InputWithIcon
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  placeholder="Name"
                  icon="book"
                  value={values.name}
                  error={errors.name && touched.name && errors.name}
                />
                <InputWithIcon
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  placeholder="Email Address"
                  icon="user"
                  value={values.email}
                  error={errors.email && touched.email && errors.email}
                />
                <InputWithIcon
                  placeholder="Password"
                  icon="key"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  error={errors.password && touched.password && errors.password}
                  marginBottom={30}
                  password
                />
                <View style={styles.uploadImage}>
                  <RoundButtonWithIcon
                    icon="plus"
                    size={50}
                    marginRight={10}
                    onPress={() => {
                      OpenImagePicker(setImage);
                    }}
                  />
                  {!imageError && !image ? (
                    <TextCustom
                      text="Upload your profile picture"
                      fontSize={18}
                    />
                  ) : image ? (
                    <TextCustom
                      text="Profile Picture uploaded"
                      fontSize={18}
                      color="#fff"
                    />
                  ) : (
                    <TextCustom
                      text="Profile Picture is required"
                      fontSize={18}
                      color="yellow"
                    />
                  )}
                </View>
                {image && <Image source={image} style={styles.image} />}

                <ButtonWithIcon
                  onPress={handleSubmit}
                  text="Continue"
                  marginBottom={20}
                />
              </>
            )}
          </Formik>

          <TextCustom
            text="Already a user? Sign in"
            fontWeight={'500'}
            cursor
            onClick={() => props.navigation.navigate('Login')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  aboveView: {
    flex: 1,
    backgroundColor: '#1363bc',
  },

  container: {
    padding: 30,
    alignItems: 'center',
    height: '100%',
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
    marginBottom: 30,

    overflow: 'hidden',
  },
  image: {
    flex: 1,

    width: '100%',
    height: 200,
    marginBottom: 30,
  },
});

const mapStateToProps = (state) => ({
  user: state.auth.user,
  accessToken: state.auth.accessToken,
  loading: state.auth.loading,
  error: state.auth.error,
});

const mapDispatchToProps = {
  registerUser,
  clearRegistrationError,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
