import Image from "next/image";
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "./components";
import { fetchCars } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";
import { searchParamsProps } from "@/types";


export default async function Home({ searchParams }: searchParamsProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2002,
    limit: searchParams.limit || 10,
    fuel: searchParams.fuel || '',
    model: searchParams.model || '',
  });
  const isEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  // console.log('Pyfx' + allCars)


  return (

    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 max-w-[1440px] mx-auto" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Lorem, ipsum.</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="home__filters">
          <div className="home__filters-container flex gap-3">
            <SearchBar />
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>

          {!isEmpty
            ? (
              <section>
                <div className="home__cars-wrapper">
                  {allCars?.map((item, index) => (
                    <CarCard key={index} car={item} />
                  ))}
                </div>

                <ShowMore
                  pageNumber={(searchParams.pageNumber || 10) / 10}
                  isNext={(searchParams.limit || 10) > allCars.length}
                />
              </section>
            )
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