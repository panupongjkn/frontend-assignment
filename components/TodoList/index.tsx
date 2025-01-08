'use client'

import TodoListView from "./TodoListView";
import useTodoList from "./useTodoList";

const TodoList = () => {
  const todoList = useTodoList();
  return <TodoListView {...todoList} />;
};

export default TodoList;
