import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const SpinLoader = ({isLoading}) => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator animating={isLoading} size={50} color="#00ff00" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default SpinLoader;
