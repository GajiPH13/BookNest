import CategoryClient from "../CategoryClient/CategoryClient";

const Category = async () => {
  const res = await fetch("https://book-nest-self.vercel.app/category.json");
  const categories = await res.json();

  return <CategoryClient categories={categories} />;
};

export default Category;
