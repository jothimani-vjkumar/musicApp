import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { colors } from '../../../core/theme/colors';
import { fontSizes } from '../../../core/theme/fonts';
import { fontWeights } from '../../../core/theme/fonts';

const DownloadButton = ({ handleDownload }) => {
  return (
    <View style={styles.downloadContainer}>
      <TouchableOpacity style={styles.downloadButton} onPress={handleDownload}>
        <Fontisto name="download" size={18} color={colors.white} />
        <Text style={styles.downloadButtonText}>Download</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DownloadButton;

const styles = StyleSheet.create({
  buttonText: {
    color: colors.white,
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.bold,
  },
  downloadContainer: {
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  downloadButtonText: {
    color: colors.white,
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.semibold,
    marginLeft: 8,
  },
});
