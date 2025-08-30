import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TodoInput from 'src/components/TodoInput';
import TodoList from 'src/components/TodoList';
import type { Todo } from 'src/types/todos';

const Todos = () => {
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
      <Text style={styles.title}>Things to do</Text>
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
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
