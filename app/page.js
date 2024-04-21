import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <>
      <div className="row">
        <TodoList />
        <TodoForm />
      </div>
    </>
  );
}
