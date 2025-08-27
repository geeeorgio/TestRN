import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { Todo } from 'src/types/todos';

interface TodoProps {
  todo: Todo;
  deleteTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoProps> = ({ todo, deleteTodo }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{todo.text}</Text>
      <Pressable
        onPress={() => deleteTodo(todo.id)}
        style={({ pressed }) =>
          pressed
            ? { ...styles.deleteBtn, ...styles.btnPressed }
            : styles.deleteBtn
        }
      >
        <Text style={styles.deleteText}>Delete</Text>
      </Pressable>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#444',
    borderRadius: 6,
  },
  itemText: { color: 'white', fontSize: 16 },
  deleteBtn: {
    backgroundColor: '#d11414ff',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnPressed: { backgroundColor: 'rgba(255, 43, 43, 0.6)' },
  deleteText: { color: 'white', fontWeight: 'bold' },
});
