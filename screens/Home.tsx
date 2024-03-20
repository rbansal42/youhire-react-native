import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import {ApplicationSection, CustomButton, ListingSection} from '../components';
import {userDetails} from '../src/constants';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: HomeProps) {
  return (
    <View style={styles.container}>
      {/* Header Starts */}
      <View style={styles.headerContainer}>
        {/* User Overview Starts*/}
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}>
            <Image
              source={{uri: userDetails.imgUrl}}
              style={styles.profileImage}
              progressiveRenderingEnabled
              resizeMethod="resize"
              resizeMode="contain"
            />
            <Text style={styles.username}>{userDetails.firstName}</Text>
          </View>
        </TouchableOpacity>
        {/* User Overview Ends*/}
        <Image
          source={{
            uri: `https://youhire.netlify.app/assets/logo-6461ef1e.png`,
          }}
          progressiveRenderingEnabled
          resizeMethod="resize"
          resizeMode="contain"
          style={styles.logo}
        />
      </View>
      {/* Header Ends */}

      <ScrollView style={styles.homeContainer}>
        <View style={{gap: 10, flexDirection: 'column'}}>
          <ListingSection />
          <ApplicationSection />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000000',
    // width: '100%',
    height: 70,

    paddingHorizontal: 10,
    // paddingVertical: 10,
    marginBottom: 24,
    marginTop: 12,
  },
  profileImage: {
    borderRadius: 50,
    height: 60,
    width: 60,
  },
  username: {
    fontSize: 24,
    fontWeight: '500',
  },
  logo: {
    width: 90,
    height: 40,
  },
  homeContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 4,
  },
});
