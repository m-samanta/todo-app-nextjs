import React from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/firebase";

const fetchTodo = async (id) => {
  const docRef = doc(db, "todos", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

const Page = async ({ params }) => {
  const { id } = params;
  const todo = await fetchTodo(id);

  return (
    <div>
      <h1>Todo Task: {todo.task}</h1>
      <h2>Todo Detail: {todo.detail}</h2>
    </div>
  );
};

export default Page;
