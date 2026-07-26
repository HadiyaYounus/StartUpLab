function CategoryCard({ category }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 transition">
      <div className="text-4xl">
        {category.icon}
      </div>

      <h3 className="mt-4 text-xl font-semibold">
        {category.name}
      </h3>
    </div>
  );
}

export default CategoryCard;