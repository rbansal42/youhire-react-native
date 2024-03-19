import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Input, CustomButton} from '../components';
import {Link} from '@react-navigation/native';

export default function SignUp() {
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
      <Text style={styles.headingText}>Sign Up</Text>
      <View>
        <Input key="username" inputLabel="Username"></Input>
        <Input key="password" inputLabel="Password"></Input>
        <CustomButton buttonLabel="Sign Up"></CustomButton>
        <Link to="/Login" style={{textDecorationLine: 'underline'}}>
          Already have an account? Login
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
