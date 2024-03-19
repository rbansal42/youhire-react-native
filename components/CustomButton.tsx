import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Button} from '@rneui/themed';
import React from 'react';

export function CustomButton({buttonLabel}: {buttonLabel: string}) {
  // useStates
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <View key={`${buttonLabel}Button`} style={styles.button}>
      <Button
        size="lg"
        radius={'sm'}
        title={buttonLabel}
        loading={isLoading}
        onPress={() => {
          setIsLoading(true);

          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        }}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 4,
  },
});
