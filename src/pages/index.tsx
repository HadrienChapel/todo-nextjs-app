import { GetStaticProps } from "next";
import TodoList from "@/components/TodoList";

export const getStaticProps: GetStaticProps = async () => {
  return { props: { todos: [] } };
};

export default function Home({ todos }: { todos: any[] }) {
  return <TodoList initialTodos={todos} />;
}
