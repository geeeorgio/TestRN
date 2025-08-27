import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

interface TodoInputProps {
  addTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (!text.trim()) return;
    console.log('text', text);
    addTodo(text.trim());
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Type something ..."
        placeholderTextColor="grey"
      />
      <Pressable
        onPress={handleAddTodo}
        style={({ pressed }) =>
          pressed ? { ...styles.addBtn, ...styles.btnPressed } : styles.addBtn
        }
      >
        <Text style={styles.text}>Add</Text>
      </Pressable>
    </View>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: 'white',
  },
  addBtn: {
    backgroundColor: 'blue',
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
  },
  btnPressed: {
    backgroundColor: 'rgba(7, 118, 253, 0.71)',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
