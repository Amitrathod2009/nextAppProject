import Banner from "@/app/(home)/components/Banner";
import ProductList from "./components/ProductList";

export default async function Home() {
  const response = await fetch(`${process.env.BACKEND_URL}/todos`);
  if (!response.ok) {
    throw new Error("An error occured while fetching the todos");
  }
  const todos = await response.json();
  console.log("todos", todos);

  return (
    <main>
      <Banner />
      <ProductList todos={todos} />
    </main>
  );
}
