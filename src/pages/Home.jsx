import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Categories from "../components/Categories";
import FeaturedStartups from "../components/FeaturedStartups";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Categories />
      <FeaturedStartups />
    </>
  );
}

export default Home;