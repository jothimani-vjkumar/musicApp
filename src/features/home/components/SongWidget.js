import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import { colors } from '../../../core/theme/colors';
import Icon from 'react-native-vector-icons/Feather';
import { secondsToMinutes } from '../../../shared/utils';
import { fontSizes } from '../../../core/theme/fonts';
import { Platform } from 'react-native';

const SongWidget = ({ song, onSongPress, onDownloadPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSongPress}>
      <View style={styles.songContainer}>
        <FastImage
          source={{
            uri: song?.image,
            priority: FastImage.priority.normal,
          }}
          style={styles.albumCover}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.songInfo}>
          <Text ellipsizeMode="tail" style={styles.songTitle} numberOfLines={1}>
            {song?.name || ''}
          </Text>
          <Text style={styles.artistName} numberOfLines={1}>
            {song?.artist_name || ''}
          </Text>
          <Text style={styles.artistName}>
            {secondsToMinutes(song?.duration || 0)}
          </Text>
        </View>
      </View>
      {Platform.OS === 'android' && (
        <View style={styles.downloadButton}>
          <TouchableOpacity style={styles.iconButton} onPress={onDownloadPress}>
            <Icon name="download" size={25} color={colors.black} />
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
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
    shadowColor: colors.black,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  songContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
  },
  albumCover: {
    width: 65,
    height: 65,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
  },
  songTitle: {
    fontSize: fontSizes.medium,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  artistName: {
    fontSize: fontSizes.medium,
    color: colors.textSecondary,
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
    height: '100%',
  },
  songInfo: {
    flex: 1,
    marginLeft: 8,
  },
  iconButton: {
    padding: 5,
  },
});
