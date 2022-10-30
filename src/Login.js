import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';
import Colors from './common/Colors';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 300, height: 300}}
          source={require('./assets/splash.png')}
        />
        <ScrollView style={styles.scrollViewContainer}>
          <View style={styles.header}>
            <Text style={styles.loginText2}>Login to Account</Text>
          </View>
          <View style={styles.textInputContainer}>
            <Image
              source={require('./assets/email.png')}
              style={styles.emailIcon}
            />
            <TextInput
              placeholder="Enter your email Id"
              style={styles.textInput}
            />
          </View>

          <View style={styles.textInputContainer}>
            <Image
              source={require('./assets/password.png')}
              style={styles.passwordIcon}
            />
            <TextInput
              placeholder="Enter password"
              secureTextEntry={true}
              style={styles.passwordInput}
            />
          </View>
          <TouchableOpacity style={styles.continueButtonContainer}>
            <Text style={styles.continueText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.text}>
            Don't have an account?{' '}
            <Text style={styles.signUpText}>Sign Up!</Text>
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BLUE_LIGHT,
  },
  scrollViewContainer: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    width: '100%',
    marginTop: -30,
  },
  loginImage: {width: 230, height: 150, marginTop: 40, alignSelf: 'center'},
  header: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  loginText2: {
    fontSize: 28,
    color: Colors.BLACK_200,
    fontWeight: 'bold',
  },
  textInputContainer: {flexDirection: 'row'},
  emailIcon: {
    width: 27,
    height: 18,
    marginStart: 10,
    position: 'absolute',
    left: 10,
    zIndex: 4,
    top: 20,
  },
  passwordIcon: {
    width: 30,
    height: 15,
    marginStart: 10,
    position: 'absolute',
    left: 10,
    zIndex: 4,
    top: 42,
  },
  textInput: {
    width: '100%',
    height: 60,
    backgroundColor: Colors.WHITE,
    borderRadius: 50,
    paddingStart: 60,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 4,
    shadowOpacity: 0.06,
  },
  passwordInput: {
    width: '100%',
    height: 60,
    backgroundColor: Colors.WHITE,
    borderRadius: 50,
    paddingStart: 60,
    marginTop: 20,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 4,
    shadowOpacity: 0.06,
  },
  continueButtonContainer: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.YELLOW,
    borderRadius: 50,
    zIndex: 2,
    marginTop: 50,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 4,
    shadowOpacity: 0.06,
  },
  continueText: {
    color: Colors.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    alignSelf: 'center',
    color: Colors.BLACK,
    marginTop: 30,
  },
  signUpText: {fontWeight: 'bold', color: Colors.YELLOW},
});
