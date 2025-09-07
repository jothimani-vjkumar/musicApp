import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import SongList from '../components/SongList';
import { colors } from '../../../core/theme/colors';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SongList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingBottom: 90, // Add padding for floating tab bar
  },
});

export default HomeScreen;
