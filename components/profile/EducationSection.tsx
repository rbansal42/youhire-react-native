import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {userDetails} from '../../src/constants';

export default function EducationSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>Education</Text>
      <View style={styles.list}>
        {userDetails.education.map(
          ({
            course,
            specialisation,
            college,
            cgpa,
            courseStart,
            courseEnd,
            courseType,
          }) => {
            return (
              <View style={styles.listItem} key={course}>
                <Text
                  style={
                    styles.listItemTitle
                  }>{`${course} ${specialisation} from ${college}`}</Text>

                <View style={{flexDirection: 'row', gap: 6}}>
                  <Text
                    style={
                      styles.listItemSubtitle
                    }>{`${courseStart}-${courseEnd}`}</Text>
                  <Text style={styles.listItemSubtitle}>{` | `}</Text>
                  <Text style={styles.listItemSubtitle}>{`${cgpa} CGPA`}</Text>
                  <Text style={styles.listItemSubtitle}>{` | `}</Text>
                  <Text style={styles.listItemSubtitle}>{`${courseType}`}</Text>
                </View>
              </View>
            );
          },
        )}
      </View>
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

  list: {flexDirection: 'column', gap: 8, marginVertical: 16},

  listItem: {},
  listItemTitle: {
    fontSize: 18,
    fontWeight: '400',
  },
  listItemSubtitle: {
    fontSize: 16,
    fontWeight: '300',
  },
});
