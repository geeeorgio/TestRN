import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Tab1 = () => {
  return (
    <View style={styles.container}>
      <Text>Tab1</Text>
    </View>
  );
};

export default Tab1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
