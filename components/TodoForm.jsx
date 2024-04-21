"use client";

import React, { useState } from "react";
import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";

const TodoForm = () => {
  const [todo, setTodo] = useState({
    task: "",
    detail: "",
  });

  async function addTodo() {
    await addDoc(collection(db, "todos"), todo);

    setTodo({
      task: "",
      detail: "",
    });
  }

  return (
    <form>
      <label>Task</label>
      <input
        type="text"
        onChange={(event) =>
          setTodo((prevTodo) => ({ ...prevTodo, task: event.target.value }))
        }
        value={todo.task}
      />
      <br />
      <label>Detail</label>
      <input
        type="text"
        onChange={(event) =>
          setTodo((prevTodo) => ({ ...prevTodo, detail: event.target.value }))
        }
        value={todo.detail}
      />
      <br />
      <button type="button" onClick={() => addTodo()}>
        Add Todo
      </button>
      <p>{JSON.stringify(todo)}</p>
    </form>
  );
};

export default TodoForm;
