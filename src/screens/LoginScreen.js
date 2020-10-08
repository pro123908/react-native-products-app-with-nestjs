import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import InputWithIcon from '../components/InputWithIcon';
import {AntIcon} from 'react-native-vector-icons/AntDesign';
import TextCustom from '../components/TextCustom';
import ButtonWithIcon from '../components/ButtonWithIcon';
import {ScrollView} from 'react-native-gesture-handler';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {clearRegistrationError, loginUser} from '../actions/AuthActions';

const LoginScreen = (props) => {
  useEffect(() => {
    console.log('Access token in loginScreen => ', props.accessToken);
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

  return (
    <>
      {props.loading ? (
        <ActivityIndicator
          size="large"
          color="#1363bc"
          animating={props.loading}
          // style={styles.loader}
        />
      ) : (
        <View style={styles.aboveView}>
          <ScrollView>
            <View style={styles.container}>
              <TextCustom
                fontSize={40}
                textTransform="uppercase"
                text="Login"
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
                  email: 'pro123908@gmail.com',
                  password: 'home123',
                }}
                validate={(values) => {
                  const errors = {};

                  if (!values.email) {
                    errors.email = 'Email is Required';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email,
                    )
                  ) {
                    errors.email = 'Invalid email address';
                  }

                  if (!values.password)
                    errors.password = 'Password is Required';
                  else if (values.password.length < 6)
                    errors.password = 'Minimum 6 characters long';
                  return errors;
                }}
                onSubmit={({email, password}, {setSubmitting}) => {
                  console.log('email & password => ', email, password);
                  props.loginUser(email, password);
                  setSubmitting(false);
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
                      error={
                        errors.password && touched.password && errors.password
                      }
                      marginBottom={30}
                      password
                    />
                    <ButtonWithIcon
                      onPress={handleSubmit}
                      text="Continue"
                      marginBottom={20}
                    />
                  </>
                )}
              </Formik>
              <View>
                <TextCustom
                  text="New User? Sign up"
                  fontWeight={'500'}
                  cursor
                  onClick={() => props.navigation.navigate('SignUp')}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  aboveView: {
    flex: 1,
    backgroundColor: '#1363bc',
  },

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
});

const mapStateToProps = (state) => ({
  user: state.auth.user,
  accessToken: state.auth.accessToken,
  loading: state.auth.loading,
  error: state.auth.error,
});

const mapDispatchToProps = {
  loginUser,
  clearRegistrationError,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
