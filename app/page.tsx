'use client'

// данная страница является аналогом файла pageServerSide лежащщего в той же директории
// разница только в том что pageServerSide реализует логику сервер-сайда в Nextjs а текущая страница использует директиву use-client

import Image from "next/image";
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "./components";
import { fetchCars } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";
import { searchParamsProps } from "@/types";
import { useEffect, useState } from "react";
import { unstable_after } from "next/server";


export default function Home() {
  const [allCars, setAllCars] = useState([])
  const [loading, setLoading] = useState(false)

  // состояние для формы поиска
  const [model, setModel] = useState('')
  const [manufacturer, setManufacturer] = useState('')

  // состояние для выпадающих списков филььтрации
  const [fuel, setFuel] = useState('')
  const [year, setYear] = useState(2002)

  // состояние для пагинации
  const [limit, setLimit] = useState(10)

  const getCars = async () => {
    setLoading(true)
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || '',
        year: year || 2002,
        limit: limit || 10,
        fuel: fuel || '',
        model: model || '',
      });

      setAllCars(result)
    } catch (error) {
      console.log(error)
    }

    finally {
      setLoading(false)
    }

  }

  useEffect(() => {
    console.log(fuel, year, limit, manufacturer, model)
    getCars();
  }, [fuel, year, limit, manufacturer, model])


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
            <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
            <CustomFilter title='fuel' options={fuels} setFilter={setFuel} />
            <CustomFilter title='year' options={yearsOfProduction} setFilter={setYear} />
          </div>

          {allCars.length > 0
            ? (
              <section>
                <div className="home__cars-wrapper">
                  {allCars?.map((item, index) => (
                    <CarCard key={index} car={item} />
                  ))}
                </div>

                {loading && (
                  <div className="mt-10">ЗАГРУЖАЕТСЯ ...</div>
                )}

                <ShowMore
                  pageNumber={limit / 10}
                  isNext={limit > allCars.length}
                  setLimit={setLimit}
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