import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import type { Drawer2Prop } from 'src/types/drawer';

const Drawer2 = ({ navigation }: Drawer2Prop) => {
  return (
    <View style={styles.container}>
      <Text>Drawer2</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

export default Drawer2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
