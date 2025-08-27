import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import TodoItem from './TodoItem';

import type { Todo } from 'src/types/todos';

interface TodoListProps {
  todoList: Todo[];
  deleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todoList, deleteTodo }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={todoList}
        renderItem={({ item }) => (
          <TodoItem todo={item} deleteTodo={deleteTodo} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'olive',
  },
});
