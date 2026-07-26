function Stats() {
  const stats = [
    {
      number: "500+",
      title: "Startups Listed",
    },
    {
      number: "50+",
      title: "Categories",
    },
    {
      number: "1000+",
      title: "Ideas Shared",
    },
    {
      number: "200+",
      title: "Founders",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center"
          >
            <h2 className="text-4xl font-bold text-blue-500">
              {item.number}
            </h2>

            <p className="mt-2 text-gray-400">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;