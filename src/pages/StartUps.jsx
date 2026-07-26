import { useState } from "react";
import startups from "../data/StartUps.json";
import StartUpCard from "../components/StartUpCard";
import Searchbar from "../components/Searchbar";

function StartUps() {
  const [search, setSearch] = useState("");

  const filteredStartups = startups.filter((startup) =>
    startup.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-8">
          All StartUps
        </h1>

        <Searchbar
          search={search}
          setSearch={setSearch}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {filteredStartups.map((startup) => (
            <StartUpCard
              key={startup.id}
              startup={startup}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default StartUps;