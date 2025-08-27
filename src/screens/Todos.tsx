import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TodoInput from 'src/components/TodoInput';
import TodoList from 'src/components/TodoList';
import type { Todo } from 'src/types/todos';

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodos = (text: string) => {
    setTodos([
      ...todos,
      { id: Date.now().toString(), text, isComplited: false },
    ]);
  };

  const deleteTodo = (id: string) => {
    const updatedList = todos.filter((el) => el.id !== id);
    setTodos(updatedList);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things to do</Text>
      <TodoInput addTodo={addTodos} />
      <TodoList todoList={todos} deleteTodo={deleteTodo} />
    </View>
  );
};

export default Todos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
