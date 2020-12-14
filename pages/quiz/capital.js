import { useState } from "react"
import Layout from "../../components/Layout/Layout"
import Button from "../../components/Button/Button"

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

const Capital = ({ countries }) => {
  const choosedCountries = chooseCountries(countries)
  const correctCountry = chooseRandom(choosedCountries)

  const [selectedCountry, setSelectedCountry] = useState()

  console.log("correct", correctCountry)
  console.log("selected", selectedCountry)

  const checkAnswer = (country) => {
    setSelectedCountry(country.capital)
  }

  return (
    <Layout>
      {/* Question */}
      <h2 className="font-pop font-bold text-2xl text-blue-c2F527B">
        {correctCountry.capital} is the capital of
      </h2>
      {/* Answers */}
      {choosedCountries.map((country) => (
        <Button
          key={country.name}
          onClick={() => {
            checkAnswer(country)
          }}
          letter="A"
        >
          {country.capital}
        </Button>
      ))}
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://restcountries.eu/rest/v2/all`)

  const countries = await res.json()

  console.log(countries)

  return { props: { countries } }
}

export default Capital
