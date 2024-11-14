import Image from "next/image";
import { CustomFilter, Hero, SearchBar } from "./components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 max-w-[1440px] mx-auto" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Lorem, ipsum.</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filters-container">
            <CustomFilter title='fuel' />
            <CustomFilter title='fuel' />
          </div>

        </div>
      </div>
    </main>
  );
}
