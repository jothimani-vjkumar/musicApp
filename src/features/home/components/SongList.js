import { FlatList, StyleSheet } from 'react-native';
import React from 'react';
import SongWidget from './SongWidget';

const data = [
  { id: 1, title: 'Song 1' },
  { id: 2, title: 'Song 2' },
  { id: 3, title: 'Song 3' },
];

const SongList = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <SongWidget />}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

export default SongList;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
