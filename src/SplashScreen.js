import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 300, height: 300}}
          source={require('./assets/splash.png')}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
