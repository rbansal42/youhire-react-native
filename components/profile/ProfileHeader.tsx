import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {userDetails} from '../../src/constants';

export default function ProfileHeader() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://i.ibb.co/VVbGN5x/Pro-Photo.png',
        }}
        style={styles.userImage}></Image>
      <View style={styles.userOverview}>
        <Text style={styles.userName}>{userDetails.name}</Text>
        <Text>{userDetails.email}</Text>
        <Text>{userDetails.address}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    // flex: 1,
    flexDirection: 'row',

    padding: 24,
    borderRadius: 18,
    backgroundColor: '#000000',

    alignItems: 'center',
  },
  userImage: {
    width: 140,
    height: 140,
    borderRadius: 80,
  },
  userOverview: {
    flexDirection: 'column',

    gap: 8,

    marginLeft: 18,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
