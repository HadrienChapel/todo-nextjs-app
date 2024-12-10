import { NextApiRequest, NextApiResponse } from "next";

let todos = [
  { id: 1, title: "Learn Next.js", completed: false },
  { id: 2, title: "Build a cool app", completed: true },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(todos);
  } else if (req.method === "POST") {
    const newTodo = { id: Date.now(), ...req.body, completed: false };
    todos.push(newTodo);
    res.status(201).json(newTodo);
  } else if (req.method === "DELETE") {
    const { id } = req.body;
    todos = todos.filter((todo) => todo.id !== id);
    res.status(200).json({ message: "Deleted" });
  } else {
    res.status(405).end();
  }
}
