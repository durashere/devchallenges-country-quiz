import { useState } from "react"
import Layout from "../components/Layout/Layout"
import Button from "../components/Button/Button"

const chooseRandom = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}

const chooseCountries = (providedCountries) => {
  let countriesPool = providedCountries
  const choosedCountries = []

  for (let i = 0; i < 5; i++) {
    if (choosedCountries.length === 4) {
      return choosedCountries
    }

    const choosedCountry = chooseRandom(countriesPool)

    countriesPool = countriesPool.filter(
      (country) => country.name !== choosedCountry.name
    )

    choosedCountries.push(choosedCountry)
  }
}

export default function Home({ countries }) {
  const choosedCountries = chooseCountries(countries)
  const correctCountry = chooseRandom(choosedCountries)

  const [selectedAnswer, setSelectedAnswer] = useState()

  console.log(correctCountry)

  const handleClick = (e) => {
    e.preventDefault()
    console.log(e.currentTarget.text)
  }

  return (
    <Layout>
      <div className="w-full">
        {/* Header */}
        <div className="relative top-12 flex justify-between">
          <h1 className="relative top-4 font-pop font-bold text-4xl text-gray-cF2F2F2">
            COUNTRY QUIZ
          </h1>
          <img src="undraw_adventure.svg" alt="adventure" />
        </div>

        {/* Container */}
        <div className="px-8 py-20 flex flex-col gap-8 rounded-2xl bg-white">
          {/* Question */}
          <h2 className="font-pop font-bold text-2xl text-blue-c2F527B">
            {correctCountry.capital} is the capital of
          </h2>
          {/* Answers */}
          <Button onClick={(e) => handleClick(e)} letter="A">
            {choosedCountries[0].capital}
          </Button>
          <Button letter="B">{choosedCountries[1].capital}</Button>
          <Button letter="C">{choosedCountries[2].capital}</Button>
          <Button letter="D">{choosedCountries[3].capital}</Button>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://restcountries.eu/rest/v2/all`)

  const countries = await res.json()

  return { props: { countries } }
}
