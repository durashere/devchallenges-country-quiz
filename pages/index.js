import { useState, useEffect } from "react"
import Layout from "../components/Layout/Layout"
import Button from "../components/Button/Button"

const chooseRandom = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}

export default function Home({ choosedCountries, correctCountry }) {
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(undefined)

  const handleAnswerClick = (answer, index) => {
    setAnswered(true)
    setSelectedAnswer(answer)
  }

  console.log("answered", answered)
  console.log("selectedAnswer", selectedAnswer)
  console.log("---------------")

  return (
    <Layout>
      {/* Question */}
      <h2 className="font-pop font-bold text-2xl text-blue-c2F527B">
        {correctCountry.capital} is the capital of
      </h2>

      {/* Answers */}
      {choosedCountries.map((country, index) => (
        <Button
          gameData={{ answered, correctCountry, selectedAnswer }}
          key={country.name}
          onClick={() => handleAnswerClick(country, index)}
          letter={(index + 10).toString(36).toUpperCase()}
        >
          {country.capital}
        </Button>
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://restcountries.eu/rest/v2/all`)
  const data = await res.json()

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

  const choosedCountries = chooseCountries(data)
  const correctCountry = chooseRandom(choosedCountries)

  return {
    props: { choosedCountries, correctCountry },
  }
}
