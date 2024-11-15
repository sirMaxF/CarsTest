'use client'

import Image from "next/image";
import { CustomFilter, Hero, SearchBar } from "./components";
import { fetchCars } from "@/utils";

export default function Home() {
  const allCars = fetchCars();
  const isEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

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

          {!isEmpty
            ? (<section>WE HAVE CARS</section>)
            : (
              <div>
                <h2>Нет результатов!</h2>
              </div>
            )
          }

        </div>
      </div>
    </main>
  );
}
