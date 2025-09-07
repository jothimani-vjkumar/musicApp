import { Alert, Linking } from 'react-native';
import { Platform } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import FileSystem from 'react-native-fs';

export const downloadSong = async (url, songName) => {
  const hasPermission = await requestStoragePermission();
  console.log('hasPermission', hasPermission);
  if (hasPermission) {
    startDownload(url, songName);
  }
};

const requestStoragePermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );
      if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        Alert.alert(
          'Permission Required',
          'You have permanently denied storage permission. Please enable it in Settings to download files.',
          [
            { text: 'Cancel', style: 'cancel' },
            {
              text: 'Open Settings',
              onPress: () => Linking.openSettings(),
            },
          ],
        );
        return false;
      }
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      }
      if (granted === PermissionsAndroid.RESULTS.DENIED) {
        Alert.alert(
          'Permission not granted',
          'Please grant storage permission to download files',
        );
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  }
  return true; // iOS doesn't need permission
};

const startDownload = async (url, songName) => {
  try {
    const filePath = `${FileSystem.documentDirectory}${songName}.mp3`;
    const download = FileSystem.downloadFile({
      fromUrl: url,
      toFile: filePath,
    });
    const result = await download.promise;
    if (result.statusCode === 200) {
      Alert.alert('File downloaded to:', filePath);
    } else {
      Alert.alert('Download failed:', result);
    }
  } catch (error) {
    console.log('error', error);
  }
};
