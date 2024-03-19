import {Image, Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';

// Component imports
import {CustomButton, Input} from '../components';
import {Link} from '@react-navigation/native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://youhire.netlify.app/assets/logo-6461ef1e.png'}}
        progressiveRenderingEnabled
        resizeMethod="resize"
        resizeMode="contain"
        height={150}
        width={120}
      />
      <Text style={styles.headingText}>Login</Text>
      <View>
        <Input key="username" inputLabel="Username"></Input>
        <Input key="password" inputLabel="Password"></Input>
        <CustomButton buttonLabel="Login"></CustomButton>
        <Link to="/SignUp" style={{textDecorationLine: 'underline'}}>
          Don't have an account? Sign up
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',

    marginBottom: 32,
  },
});
