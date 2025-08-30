import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';

import TodoInput from 'src/components/Todo/TodoInput';
import TodoList from 'src/components/Todo/TodoList';
import type { Todo } from 'src/types/todos';

const Todos = () => {
  const navigation = useNavigation();

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodos = (text: string) => {
    setTodos([
      ...todos,
      { id: Date.now().toString(), text, isCompleted: false },
    ]);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((el) => el.id !== id));
  };

  const editTodo = (id: string, newText: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo,
      ),
    );
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <TodoInput addTodo={addTodos} />
      <TodoList
        todoList={todos}
        onDelete={deleteTodo}
        onEdit={editTodo}
        onToggle={toggleTodo}
      />
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
