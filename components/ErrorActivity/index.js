import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
// import {Icon} from 'react-native-elements';

const index = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <Image
        style={styles.imageWrapper}
        source={require('./images/no-wifi.png')}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  imageWrapper: {
    width: 100,
    height: 100,
  },
});
