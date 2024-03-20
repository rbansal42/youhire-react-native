import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

import {userDetails} from '../../src/constants';

export default function KeySkillsSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>Key Skills</Text>
      <ScrollView style={styles.list} horizontal>
        {userDetails.technicalSkills.map(skill => {
          return (
            <View style={styles.listItem} key={skill}>
              <Text style={styles.listItemTitle}>{skill}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderRadius: 18,
    backgroundColor: '#111111',
  },

  sectionHeader: {fontSize: 21, fontWeight: 'bold'},

  list: {
    flexDirection: 'row',
    marginVertical: 16,
  },

  listItem: {
    alignItems: 'center',
    justifyContent: 'center',

    padding: 4,
    paddingHorizontal: 8,

    marginHorizontal: 2,

    backgroundColor: 'black',

    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'white',
  },
  listItemTitle: {
    fontSize: 18,
    fontWeight: '400',
  },
});
