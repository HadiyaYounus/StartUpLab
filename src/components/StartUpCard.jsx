import { useState } from "react";

function StartUpCard({ startup }) {
  const [isFavorite, setIsFavorite] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    return saved.some((item) => item.id === startup.id);
  });

  const toggleFavorite = () => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];

    let updated;

    if (isFavorite) {
      updated = saved.filter(
        (item) => item.id !== startup.id
      );
    } else {
      updated = [...saved, startup];
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );

    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

      <div className="flex justify-between items-start">
        <h3 className="text-2xl font-semibold">
          {startup.name}
        </h3>

        <button
          onClick={toggleFavorite}
          className="text-gray-300"
        >
          {isFavorite ? "★" : "☆"}
        </button>
      </div>

      <p className="text-gray-400 mt-3">
        {startup.description}
      </p>

      <div className="mt-5 text-sm text-gray-300 space-y-2">
        <p>
          Category: {startup.category}
        </p>

        <p>
          Founder: {startup.founder}
        </p>

        <p>
          Location: {startup.location}
        </p>
      </div>

    </div>
  );
}

export default StartUpCard;