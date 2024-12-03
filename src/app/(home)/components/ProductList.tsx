import { Todo } from "@/types";
import BookCard from "./BookCard";

export default function ProductList({ todos }: { todos: Todo[] }) {
  return (
    // Indent this line
    <div className="grid grid-cols-3 gap-8 md:grid-cols-3 max-w-7xl mx-auto">
      {todos.map((todo) => (
        <BookCard key={todo.id} todo={todo} />
        
      ))}
    </div>
  );
}
