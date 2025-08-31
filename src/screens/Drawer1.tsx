import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import type { Drawer1Prop } from 'src/types/drawer';

const Drawer1 = ({ navigation }: Drawer1Prop) => {
  return (
    <View style={styles.container}>
      <Text>Drawer1</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

export default Drawer1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
