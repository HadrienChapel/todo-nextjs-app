import { GetServerSideProps } from "next";
import TodoList from "@/components/TodoList";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`);
  const todos = await res.json();
  return { props: { todos } };
};

export default function SSRPage({ todos }: { todos: any[] }) {
  return <TodoList initialTodos={todos} />;
}
