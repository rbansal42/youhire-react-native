import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {userDetails} from '../../src/constants';

export default function ExperienceSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>Experience</Text>
      <View style={styles.list}>
        {userDetails.experience.map(
          ({
            companyName,
            description,
            timeline,
            keySkills,
            kra,
            profile,
            location,
          }) => {
            return (
              <View style={styles.listItem} key={companyName}>
                <Text
                  style={
                    styles.listItemTitle
                  }>{`${profile} at ${companyName}`}</Text>

                <View style={{flexDirection: 'row', gap: 6}}>
                  <Text
                    style={
                      styles.listItemSubtitle
                    }>{`${timeline.startMonth}, ${timeline.startYear} - ${timeline.endMonth}, ${timeline.endYear}`}</Text>
                  <Text style={styles.listItemSubtitle}>{` | `}</Text>
                  <Text style={styles.listItemSubtitle}>{`${location}`}</Text>
                </View>
                <Text style={styles.listItemDescription}>{description}</Text>
                <View style={{marginTop: 12}}>
                  <Text
                    style={{marginBottom: 4, fontWeight: '600', fontSize: 16}}>
                    KRAs
                  </Text>
                  {kra.map(item => {
                    return <Text>{`- ${item}`}</Text>;
                  })}
                </View>
                <View style={{marginTop: 12}}>
                  <Text
                    style={{marginBottom: 4, fontWeight: '600', fontSize: 16}}>
                    Skills
                  </Text>
                  <View style={{flexDirection: 'row', gap: 8}}>
                    {keySkills.map(skill => {
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

  list: {flexDirection: 'column', gap: 28, marginVertical: 16},

  listItem: {},
  listItemTitle: {
    fontSize: 18,
    fontWeight: '400',
  },
  listItemSubtitle: {
    fontSize: 16,
    fontWeight: '300',
  },
  listItemDescription: {
    marginTop: 12,
    fontSize: 15,
  },
});
