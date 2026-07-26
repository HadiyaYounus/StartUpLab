import startups from "../data/startups.json";
import StartupCard from "./StartupCard";

function FeaturedStartups() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-8">
          Featured Startups
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {startups.map((startup) => (
            <StartupCard
              key={startup.id}
              startup={startup}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedStartups;