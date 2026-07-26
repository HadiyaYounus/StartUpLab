import { useEffect, useState } from "react";
import StartUpCard from "../components/StartUpCard";

function Favourites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(saved);
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-8">
          Favorite Startups
        </h1>

        {favorites.length === 0 ? (
          <p className="text-gray-400">
            No favorite startups yet.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {favorites.map((startup) => (
              <StartUpCard
                key={startup.id}
                startup={startup}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default Favourites;