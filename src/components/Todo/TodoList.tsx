import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import TodoItem from './TodoItem';

import type { Todo } from 'src/types/todos';

interface TodoListProps {
  todoList: Todo[];
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
  onToggle: (id: string) => void;
}

const TodoList = ({ todoList, onDelete, onEdit, onToggle }: TodoListProps) => {
  return (
    <View style={styles.container}>
      <FlatList<Todo>
        data={todoList}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onDelete={onDelete}
            onEdit={onEdit}
            onToggle={onToggle}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
