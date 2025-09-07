import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../../../core/theme/colors';
import Icons from 'react-native-vector-icons/Ionicons';

const Playback = () => {
  return (
    <View style={styles.playbackContainer}>
      <TouchableOpacity style={styles.button}>
        <Icons name={'play-back'} size={30} color={colors.black} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.playbutton}>
        <Icons name="play" size={50} color={colors.black} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icons name={'play-forward'} size={30} color={colors.black} />
      </TouchableOpacity>
    </View>
  );
};

export default Playback;

const styles = StyleSheet.create({
  playbutton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 40,
    padding: 10,
  },
  button: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 40,
    padding: 10,
    flexDirection: 'row',
  },
  playbackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingVertical: 30,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: colors.white,
    elevation: 1,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
});
