import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

import {
  ProfileHeader,
  EducationSection,
  KeySkillsSection,
  InternshipSection,
  ExperienceSection,
} from '../components';

export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      <ProfileHeader />
      <ScrollView style={styles.sectionsContainer}>
        <View style={{gap: 8}}>
          <EducationSection />
          <KeySkillsSection />
          <InternshipSection />
          <ExperienceSection />
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 12,
  },
  sectionsContainer: {
    marginTop: 8,
    gap: 4,
  },
});
