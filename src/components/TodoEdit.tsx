import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import type { Todo } from 'src/types/todos';

interface TodoEditProps {
  onCancel: () => void;
  onEdit: (id: string, newText: string) => void;
  todo: Todo;
}

const TodoEdit = ({ onCancel, onEdit, todo }: TodoEditProps) => {
  const [text, setText] = useState(todo?.text);

  const handleSave = () => {
    if (text.trim()) {
      onEdit(todo.id, text.trim());
    }

    onCancel();
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={text} onChangeText={setText} />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.text}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelBtn} onPress={onCancel}>
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoEdit;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#444',
    borderRadius: 6,
    gap: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 10,
  },
  saveBtn: {
    backgroundColor: '#239d33ff',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelBtn: {
    backgroundColor: '#d31919ff',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { color: 'white', fontWeight: 'bold' },
});
