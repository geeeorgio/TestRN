import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';

import { selectTodoList } from 'src/store/slices/appSlice/selectors';
import type { Todo } from 'src/types/todos';

const TodoList = () => {
  const todos = useSelector(selectTodoList);

  return (
    <View style={styles.container}>
      {todos.length > 0 ? (
        <FlatList<Todo>
          data={todos}
          renderItem={({ item }) => <TodoItem todo={item} />}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.text}>No todos yet</Text>
      )}
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    color: 'grey',
    textAlign: 'center',
  },
});
