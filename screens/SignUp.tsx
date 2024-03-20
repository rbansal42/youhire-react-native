import {StyleSheet, Text, View, Image, Keyboard} from 'react-native';
import React, {useState} from 'react';
import {Button, Input} from '@rneui/themed';

// Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {loginCredentials} from '../src/constants';

type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export default function SignUp({navigation}: SignUpProps) {
  const [isLoading, setIsLoading] = React.useState(false);

  const [username, setUsername] = useState('student');
  const [password, setPassword] = useState('student');

  const onSignupPress = (username: string, password: string) => {
    if (
      username == loginCredentials.username &&
      password == loginCredentials.password
    ) {
      navigation.replace('Home');
    } else {
      Keyboard.dismiss();
    }
  };

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
        {/* Username Input Starts*/}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Username</Text>
          <Input
            key="username"
            focusable
            style={styles.inputField}
            placeholderTextColor={'#00000080'}
            cursorColor={'#00000090'}
            onChangeText={setUsername}></Input>
        </View>
        {/* Username Input Ends*/}

        {/* Password Input Starts*/}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <Input
            key="password"
            focusable
            secureTextEntry
            style={styles.inputField}
            placeholderTextColor={'#00000080'}
            cursorColor={'#00000090'}
            onChangeText={setPassword}></Input>
        </View>
        {/* Password Input Ends*/}

        <Button
          title={'Sign Up'}
          size="lg"
          radius={'sm'}
          loading={isLoading}
          onPress={() => {
            setIsLoading(true);
            setTimeout(() => {
              onSignupPress(username, password);
              setIsLoading(false);
            }, 700);
          }}
        />
        <Text
          style={{textDecorationLine: 'underline', marginTop: 8, fontSize: 18}}
          onPress={() => navigation.navigate('Login')}>
          Already have an account? Login
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 12,
  },
  headingText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',

    marginBottom: 32,
  },
  inputContainer: {
    flexDirection: 'column',
    height: 100,
    gap: 0,
  },
  inputLabel: {
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    margin: 0,
  },
  inputField: {
    backgroundColor: 'white',
    padding: 10,

    borderWidth: 1,
    borderColor: 'black',

    borderRadius: 5,

    color: 'black',
  },
});
