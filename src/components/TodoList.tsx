export default function TodoList({ initialTodos }: { initialTodos: any[] }) {
  return (
    <div className="container mx-auto p-4">
      <ul className="space-y-2">
        {initialTodos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-2 bg-gray-100 rounded shadow"
          >
            <span>{todo.title}</span>
            <input type="checkbox" defaultChecked={todo.completed} />
          </li>
        ))}
      </ul>
    </div>
  );
}
