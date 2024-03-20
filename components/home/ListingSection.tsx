import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

import {listings} from '../../src/constants';
import {Image} from '@rneui/themed';

export default function ListingSection() {
  return (
    // Listing Section Starts
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>Available Jobs</Text>
      {/* Listing Cards Scrollable*/}
      <ScrollView style={styles.listingCardContainer} horizontal>
        {/* Listing Card Starts */}
        <View style={{flexDirection: 'row', gap: 10}}>
          {/* Mapping */}
          {listings.map(
            ({
              ListingID,
              company_name,
              job_title,
              location,
              logo_url,
              required_skills,
              salary,
            }) => {
              return (
                <View style={styles.listingCard} key={ListingID}>
                  {/* Listing Header */}
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 12,
                      alignItems: 'center',
                    }}>
                    <Image
                      src={
                        logo_url
                          ? logo_url
                          : 'https://img.naukimg.com/logo_images/groups/v1/4592915.gif'
                      }
                      style={{width: 60, height: 60, borderRadius: 10}}
                      progressiveRenderingEnabled
                      resizeMethod="resize"
                      resizeMode="contain"
                    />
                    <View>
                      <Text style={styles.listItemTitle}>{job_title}</Text>
                      <Text style={styles.listItemSubtitle}>
                        {company_name}
                      </Text>
                    </View>
                  </View>
                  {/* Listing Details */}
                  <View>
                    <Text>{`${salary} • ${location}`}</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 8,
                        marginTop: 8,
                        flexWrap: 'wrap',
                        width: 300,
                      }}>
                      {required_skills.map(skill => {
                        return (
                          <Text
                            style={{
                              padding: 4,
                              paddingHorizontal: 8,
                              borderWidth: 0.5,
                              borderRadius: 3,
                              borderColor: 'white',
                            }}>{`${skill}`}</Text>
                        );
                      })}
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
    minWidth: 250,
    maxWidth: 350,
    height: 200,

    gap: 6,
    padding: 14,

    backgroundColor: '#111111',

    // borderWidth: 2,
    borderRadius: 22,
    // borderColor: '#000000',
  },
});
