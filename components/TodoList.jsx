"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/firebase";
import { onSnapshot, collection } from "firebase/firestore";
import Link from "next/link";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
      const todoData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodos(todoData)
    });
    return unsubscribe;
  }, []);

  return (
    <div className="todo">
      <h1>Todo App</h1>
      <ul className="todo__list">
        {todos.map((todo) => {
          return (
            <Link key={todo.id} href={"/" + todo.id}>
              <li className="todo__item">{todo.task}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
