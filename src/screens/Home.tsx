import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import type { HomeScreenNavigationProp } from 'src/types/stack';

const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button onPress={() => navigation.navigate('Todos')} title="Todo App" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333',
    gap: 10,
  },
  text: { fontSize: 24, fontWeight: '600', color: 'white' },
});
