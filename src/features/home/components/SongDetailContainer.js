import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import { getYear } from '../../../shared/utils';
import { colors } from '../../../core/theme/colors';
import { fontSizes } from '../../../core/theme/fonts';
import { fontWeights } from '../../../core/theme/fonts';

const SongDetailContainer = ({ song }) => {
  return (
    <View style={styles.content}>
      <FastImage
        source={{ uri: song?.image }}
        resizeMode={FastImage.resizeMode.stretch}
        style={styles.image}
      />
      <Text style={styles.title}>{song?.name}</Text>
      <Text style={styles.album}>{song?.album_name}</Text>
      <Text style={styles.artist}>
        {song?.artist_name} - {getYear(song?.releasedate) || ''}
      </Text>
    </View>
  );
};

export default SongDetailContainer;

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: '85%',
    height: 300,
    borderRadius: 25,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    marginVertical: 20,
  },
  title: {
    fontSize: fontSizes.xLarge,
    fontWeight: fontWeights.bold,
    color: colors.text,
    marginVertical: 2,
  },
  album: {
    fontSize: fontSizes.large,
    fontWeight: fontWeights.regular,
    color: colors.textSecondary,
    marginVertical: 2,
  },
  artist: {
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.regular,
    color: colors.textSecondary,
    marginVertical: 2,
  },
});
