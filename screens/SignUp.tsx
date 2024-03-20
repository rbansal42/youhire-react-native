import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Input, CustomButton} from '../components';
import {Button} from '@rneui/themed';

// Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export default function SignUp({navigation}: SignUpProps) {
  const [isLoading, setIsLoading] = React.useState(false);
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
        <Button
          title={'Sign Up'}
          size="lg"
          radius={'sm'}
          loading={isLoading}
          onPress={() => {
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
              navigation.replace('Home');
            }, 700);
          }}
        />
        <Text
          style={{textDecorationLine: 'underline'}}
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
  },
  headingText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',

    marginBottom: 32,
  },
});
