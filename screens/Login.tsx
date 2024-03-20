import {
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

// Component imports
import {Input} from '../components';

// Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {Button} from '@rneui/themed';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = ({navigation}: LoginProps) => {
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
      <Text style={styles.headingText}>Login</Text>
      <View>
        <Input key="username" inputLabel="Username"></Input>
        <Input key="password" inputLabel="Password"></Input>

        <Button
          title={'Login'}
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
          onPress={() => navigation.navigate('SignUp')}>
          Don't have an account? Sign up
        </Text>
      </View>
    </View>
  );
};

export default Login;

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
