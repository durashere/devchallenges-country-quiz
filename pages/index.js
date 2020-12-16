import { useState, useEffect } from "react"
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

export default function Home({
  data,
  initialChoosedCountries,
  initialCorrectCountry,
}) {
  const [points, setPoints] = useState(0)
  const [questionType, setQuestionType] = useState(Math.random() >= 0.5)
  const [gameOverScreen, setGameOverScreen] = useState(false)
  const [choosedCountries, setChoosedCountries] = useState(
    initialChoosedCountries
  )
  const [correctCountry, setCorrectCountry] = useState(initialCorrectCountry)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState()

  const handleAnswerClick = (answer) => {
    setAnswered(true)
    setSelectedAnswer(answer)
  }

  const handleNextClick = () => {
    if (selectedAnswer.name !== correctCountry.name) {
      setGameOverScreen(true)
    } else {
      setPoints(points + 1)
      setAnswered(false)
      setSelectedAnswer(undefined)
      const choosedCountries = chooseCountries(data)
      setChoosedCountries(choosedCountries)
      setCorrectCountry(chooseRandom(choosedCountries))
      setQuestionType(Math.random() >= 0.5)
    }
  }

  const handleTryAgainClick = () => {
    setPoints(0)
    setGameOverScreen(false)
    setAnswered(false)
    setSelectedAnswer(undefined)
    const choosedCountries = chooseCountries(data)
    setChoosedCountries(choosedCountries)
    setCorrectCountry(chooseRandom(choosedCountries))
    setQuestionType(Math.random() >= 0.5)
  }

  return (
    <Layout>
      {gameOverScreen ? (
        <div className="w-full">
          <h1 className="relative pb-4 font-pop font-bold text-4xl text-gray-cF2F2F2">
            COUNTRY QUIZ
          </h1>
          <div className="px-8 pt-10 pb-10 flex flex-col items-center gap-8 rounded-2xl bg-white">
            <img src="../../undraw_winners.svg" alt="adventure" />
            <h2 className="font-pop font-bold text-5xl text-blue-c1D355D">
              Results
            </h2>
            <p className="text-center font-pop font-normal text-2xl text-blue-c1D355D">
              You got
              <b className="font-pop font-bold text-5xl text-green-c60BF88">
                {` ${points} `}
              </b>
              correct answers
            </p>
            <button
              onClick={() => handleTryAgainClick()}
              className="px-16 py-4 rounded-2xl border-2 border-blue-c1D355D focus:outline-none font-pop font-semibold text-lg text-blue-c1D355D"
            >
              Try again
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <div className="relative top-12 flex justify-between">
            <h1 className="relative top-4 font-pop font-bold text-4xl text-gray-cF2F2F2">
              COUNTRY QUIZ
            </h1>
            <img src="../../undraw_adventure.svg" alt="adventure" />
          </div>
          <div className="w-full px-8 pt-20 pb-10 flex flex-col gap-8 rounded-2xl bg-white">
            {/* Question */}

            {questionType ? (
              <div>
                <h2 className="font-pop font-bold text-2xl text-blue-c2F527B">
                  {correctCountry.capital} is the capital of
                </h2>
              </div>
            ) : (
              <div className="flex flex-col gap-8">
                <img
                  className="w-1/3 shadow-lg"
                  src={correctCountry.flag}
                  alt="country_flag"
                />
                <h2 className="font-pop font-bold text-2xl text-blue-c2F527B">
                  Which country does this flag belong to?
                </h2>
              </div>
            )}

            {/* Answers */}
            {choosedCountries.map((country, index) => (
              <Button
                gameData={{ answered, correctCountry, selectedAnswer }}
                key={country.name}
                onClick={() => handleAnswerClick(country)}
                letter={(index + 10).toString(36).toUpperCase()}
              >
                {country.name}
              </Button>
            ))}
            {answered && (
              <button
                onClick={() => handleNextClick()}
                className="px-8 py-4 self-end rounded-2xl focus:outline-none bg-orange-cF9A826 font-pop font-bold text-lg text-white"
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://restcountries.eu/rest/v2/all`)
  const data = await res.json()
  const initialChoosedCountries = chooseCountries(data)
  const initialCorrectCountry = chooseRandom(initialChoosedCountries)
  return {
    props: { data, initialChoosedCountries, initialCorrectCountry },
  }
}
