import { StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../../core/theme/colors';
import { fontSizes } from '../../../core/theme/fonts';
import { icons } from '../../../shared/constants/icon';

const Search = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon
          name={icons.search}
          size={20}
          color={colors.iconSearch}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Search songs, artists, albums..."
          placeholderTextColor={colors.iconSearch}
          value={searchText}
          onChangeText={setSearchText}
          returnKeyType="search"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.searchInputBackground,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  searchIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: fontSizes.medium,
    color: colors.inputText,
    padding: 0, // Remove default padding
  },
  clearIcon: {
    marginLeft: 8,
    padding: 4, // Add touch area
  },
});
