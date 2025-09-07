import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import React, { useCallback } from 'react';
import SongWidget from './SongWidget';
import useFetchSongs from '../hooks/fetchSongs';
import { useNavigation } from '@react-navigation/native';
import { screens } from '../../../shared/constants/screens';
import { strings } from '../../../core/localization/strings';
import { removeSpaceFromName } from '../../../shared/utils';
import { downloadSong } from '../../../shared/utils/downloadHelper';

const SongList = () => {
  const {
    songs = [],
    loading,
    error,
    loadingMore,
    fetchMoreData,
  } = useFetchSongs();
  const navigation = useNavigation();

  const handleSongPress = useCallback(
    song => {
      navigation.navigate(screens.SONG_DETAIL_SCREEN, { song });
    },
    [navigation],
  );

  const handleDownloadPress = useCallback(song => {
    downloadSong(song.audiodownload, removeSpaceFromName(song.name));
  }, []);

  const renderItem = useCallback(
    ({ item }) => (
      <SongWidget
        song={item}
        onSongPress={handleSongPress.bind(this, item)}
        onDownloadPress={handleDownloadPress.bind(this, item)}
      />
    ),
    [handleSongPress, handleDownloadPress],
  );

  const keyExtractor = useCallback(item => item.id?.toString(), []);

  const LoadMore = useCallback(() => {
    if (loadingMore) {
      return <ActivityIndicator size="small" color="#007AFF" />;
    }
    return null;
  }, [loadingMore]);

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text>{strings.loading}</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{strings.somethingWentWrong}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={songs}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      onEndReached={fetchMoreData}
      onEndReachedThreshold={0.5}
      ListFooterComponent={LoadMore}
      initialNumToRender={20}
      maxToRenderPerBatch={10}
      updateCellsBatchingPeriod={50}
      windowSize={5}
    />
  );
};

export default SongList;

const styles = StyleSheet.create({
  container: { felx: 1, padding: 15, paddingBottom: 60 },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
});
