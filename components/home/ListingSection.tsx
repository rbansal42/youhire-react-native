import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {listings} from '../../src/constants';

export default function ListingSection({}) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>Available Jobs</Text>
      <View style={styles.list}>
        {listings.map(
          ({
            ListingID,
            company_name,
            job_title,
            location,
            requirements,
            salary,
          }) => {
            return (
              <View style={styles.listItem} key={ListingID}>
                <Text
                  style={
                    styles.listItemTitle
                  }>{`${company_name} - ${job_title}`}</Text>

                <View style={{flexDirection: 'row', gap: 6}}>
                  <Text style={styles.listItemSubtitle}>{`${location}`}</Text>
                  {/* <Text style={styles.listItemSubtitle}>{` | `}</Text>
                  <Text style={styles.listItemSubtitle}>{`${cgpa} CGPA`}</Text>
                  <Text style={styles.listItemSubtitle}>{` | `}</Text>
                  <Text style={styles.listItemSubtitle}>{`${courseType}`}</Text> */}
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
    backgroundColor: '#222222',
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
