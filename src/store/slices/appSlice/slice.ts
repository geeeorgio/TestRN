import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Todo } from 'src/types/todos';

const initialState = {
  list: [] as Todo[],
  total: null as number | null,
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<string>) => {
      state.list.push({
        id: Date.now().toString(),
        text: payload,
        isCompleted: false,
      });
    },
    deleteTodo: (state, { payload }: PayloadAction<string>) => {
      state.list = state.list.filter((item) => item.id !== payload);
    },
    updateTodo: (
      state,
      { payload }: PayloadAction<{ id: string; text: string }>,
    ) => {
      state.list = state.list.map((item) =>
        item.id !== payload.id ? item : { ...item, text: payload.text },
      );
    },
    toggleTodo: (state, { payload }: PayloadAction<string>) => {
      state.list = state.list.map((item) =>
        item.id === payload
          ? { ...item, isCompleted: !item.isCompleted }
          : item,
      );
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, toggleTodo } = slice.actions;
export const todosReducer = slice.reducer;
