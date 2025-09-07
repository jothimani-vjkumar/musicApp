import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Search from './Search';
import { fontSizes, fontWeights } from '../../../core/theme/fonts';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>Good Morning, James</Text>
      </View>
      <Search />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingTop: 16,
    paddingBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    zIndex: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  greetingContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  greeting: {
    fontSize: fontSizes.large,
    fontWeight: fontWeights.regular,
    color: '#6B7280',
    marginBottom: 4,
  },
});
