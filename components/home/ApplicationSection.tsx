import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

import {companiesAppliedTo} from '../../src/constants';
import {Image} from '@rneui/themed';

export default function ApplicationSection() {
  return (
    // Listing Section Starts
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>Past Applications</Text>
      {/* Listing Cards Scrollable*/}
      <ScrollView style={styles.listingCardContainer} horizontal>
        {/* Listing Card Starts */}
        <View style={{flexDirection: 'row', gap: 10}}>
          {/* Mapping */}
          {companiesAppliedTo.map(
            ({companyName, jobTitle, location, status}) => {
              return (
                <View style={styles.listingCard} key={companyName}>
                  {/* Listing Header */}
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 12,
                      alignItems: 'center',
                    }}>
                    <View>
                      <Text style={styles.listItemTitle}>{jobTitle}</Text>
                      <Text style={styles.listItemSubtitle}>{companyName}</Text>
                    </View>
                  </View>
                  {/* Listing Details */}
                  <View>
                    <Text>{location}</Text>
                    <View style={{flexDirection: 'row', gap: 8, marginTop: 8}}>
                      <Text
                        style={{
                          padding: 4,
                          paddingHorizontal: 8,
                          borderWidth: 0.5,
                          borderRadius: 3,
                          borderColor: 'white',
                        }}>
                        {status}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            },
          )}

          {/* Listing Card Ends */}
        </View>
      </ScrollView>
    </View>
    // Listing Section Ends
  );
}

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    borderRadius: 12,
    backgroundColor: '#222222',
  },

  sectionHeader: {fontSize: 21, fontWeight: 'bold'},

  list: {flexDirection: 'column', gap: 8, marginVertical: 16},

  listItem: {},
  listItemTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  listItemSubtitle: {
    fontSize: 16,
    fontWeight: '300',
  },
  listingCardContainer: {
    marginTop: 8,
    gap: 15,
    flexDirection: 'row',
    flex: 1,
  },
  listingCard: {
    minWidth: 150,
    maxWidth: 250,
    minHeight: 150,

    gap: 6,
    padding: 24,

    backgroundColor: '#111111',

    // borderWidth: 2,
    borderRadius: 22,
    // borderColor: '#000000',
  },
});
