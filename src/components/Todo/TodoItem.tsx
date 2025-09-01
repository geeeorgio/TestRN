import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';

import TodoEdit from './TodoEdit';

import { deleteTodo, toggleTodo } from 'src/store/slices/appSlice/slice';
import type { Todo } from 'src/types/todos';

interface TodoProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoProps) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleCancel = () => {
    setIsEditing(false);
  };

  if (isEditing) return <TodoEdit onCancel={handleCancel} todo={todo} />;

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => dispatch(toggleTodo(todo.id))}>
        <Text
          style={[styles.itemText, todo?.isCompleted && styles.todoCompleted]}
        >
          {todo.text}
        </Text>
      </TouchableOpacity>
      <View style={styles.buttons}>
        <Pressable
          onPress={() => setIsEditing(true)}
          disabled={todo.isCompleted && true}
          style={({ pressed }) => [
            styles.editBtn,
            todo.isCompleted && styles.editDisabled,
            pressed && styles.editPressed,
          ]}
        >
          <Text style={styles.text}>Edit</Text>
        </Pressable>
        <Pressable
          onPress={() => dispatch(deleteTodo(todo.id))}
          style={({ pressed }) => [
            styles.deleteBtn,
            pressed && styles.btnPressed,
          ]}
        >
          <Text style={styles.text}>Delete</Text>
        </Pressable>
      </View>
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
  itemText: { color: 'white', fontSize: 22, fontWeight: 'bold' },
  todoCompleted: {
    textDecorationLine: 'line-through',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 10,
  },
  deleteBtn: {
    backgroundColor: '#d11414ff',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnPressed: { backgroundColor: 'rgba(255, 43, 43, 0.6)' },
  text: { color: 'white', fontWeight: 'bold' },
  editBtn: {
    backgroundColor: '#2343f8ff',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editPressed: { backgroundColor: 'rgba(49, 135, 255, 0.6)' },
  editDisabled: { backgroundColor: 'rgba(128, 174, 255, 0.6)' },
});
