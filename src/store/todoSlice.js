import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [{ id: 1, text: "hello world", completed: false }],
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todoList.push(todo);
    },

    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    completedTodo: (state, action) => {
      state.todoList = state.todoList.find((todo) => {
        todo.id === action.payload.id;
        state.todoList.completed = true 
      });
 
    },
  },
});

export const { addTodo, deleteTodo, completedTodo } = todoSlice.actions;

export default todoSlice.reducer;
