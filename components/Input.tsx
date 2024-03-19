import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {TextInput} from 'react-native';

export default function Input({inputLabel}: {inputLabel: string}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{inputLabel}</Text>
      <TextInput
        focusable
        placeholder={inputLabel}
        style={styles.inputField}
        placeholderTextColor={'#00000080'}
        cursorColor={'#00000090'}
        secureTextEntry={inputLabel === 'Password'} // secureTextEntry will be enabled if the inputLabel is 'Password'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    height: 100,
    gap: 0,
  },

  inputLabel: {
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
