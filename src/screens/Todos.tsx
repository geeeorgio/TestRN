import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import TodoInput from 'src/components/Todo/TodoInput';
import TodoList from 'src/components/Todo/TodoList';

const Todos = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <TodoInput />
      <TodoList />
    </View>
  );
};

export default Todos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: '#333333',
    padding: 10,
  },
});
