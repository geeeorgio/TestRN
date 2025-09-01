import type { RootState } from 'src/types/redux';

export const selectTodoList = (state: RootState) => state.todos.list;
