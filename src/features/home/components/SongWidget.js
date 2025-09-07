import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import FastImage from 'react-native-fast-image';
import { colors } from '../../../core/theme/colors';
import Icon from 'react-native-vector-icons/Feather';

const SongWidget = () => {
  return (
    <View style={styles.container}>
      <View style={styles.songContainer}>
        <FastImage
          source={{
            uri: 'https://picsum.photos/150/150?random=1',
            priority: FastImage.priority.normal,
          }}
          style={styles.albumCover}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.songInfo}>
          <Text style={styles.songTitle}>Song 1</Text>
          <Text style={styles.artistName}>Artist 1</Text>
          <Text style={styles.artistName}>Artist 1</Text>
        </View>
      </View>
      <View style={styles.playButton}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="download" size={25} color={colors.black} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SongWidget;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: colors.white,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  songContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  albumCover: {
    width: 65,
    height: 65,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
  },
  songTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  artistName: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },
  songInfo: {
    marginHorizontal: 5,
  },
  iconButton: {
    padding: 5,
  },
});
