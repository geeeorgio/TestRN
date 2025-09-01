import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { addTodo } from 'src/store/slices/appSlice/slice';

const TodoInput = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (!text.trim()) return;

    dispatch(addTodo(text.trim()));
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
        style={({ pressed }) => [styles.addBtn, pressed && styles.btnPressed]}
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
    fontSize: 22,
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
