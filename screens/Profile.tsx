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
        <View style={{gap: 4}}>
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
  },
  sectionsContainer: {
    marginTop: 8,
    gap: 4,
  },
});
