import React from "react" ;
import { Todo } from "@/types";
import Image from "next/image";
import photo2 from "../../../app/photo2.jpg";
import Link from "next/link";

export default async function BookCard({ todo }: { todo: Todo }) {
  return (
<div className="flex gap-5 border p-5 shadow-md rounded">
<Image src={photo2} width={200} height={300} />
<div>
<h2 className="text-blue-900">{todo.title}</h2>
<p className="text-red-900">{todo.title}</p>
<Link href={`/todos/${todo.id}`}></Link>
</div>
</div>
  );
}
