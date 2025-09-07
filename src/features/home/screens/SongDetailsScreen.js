import { Platform, StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../../core/theme/colors';
import Playback from '../components/Playback';
import SongDetailContainer from '../components/SongDetailContainer';
import DownloadButton from '../components/DownloadButton';
import { fontSizes } from '../../../core/theme/fonts';
import { fontWeights } from '../../../core/theme/fonts';
import { strings } from '../../../core/localization/strings';
import { downloadSong } from '../../../shared/utils/downloadHelper';
import { removeSpaceFromName } from '../../../shared/utils';

const SongDetailsScreen = ({ route }) => {
  const { song } = route?.params || {};

  const handleDownload = useCallback(() => {
    downloadSong(song?.audiodownload, removeSpaceFromName(song?.name));
  }, [song]);

  if (!song) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{strings.songNotFound}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <SongDetailContainer song={song} />
      {Platform.OS === 'android' && (
        <DownloadButton handleDownload={handleDownload} />
      )}
      {/* dummy Playback, functionality not implemented */}
      <Playback />
    </SafeAreaView>
  );
};

export default SongDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  errorText: {
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.bold,
    color: colors.error,
  },
});
