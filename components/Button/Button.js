import React, { useState } from "react"

const Button = ({ letter, children, gameData, ...props }) => {
  const [hover, setHover] = useState(false)
  // console.log(children, hover)

  const { answered, correctCountry, selectedAnswer } = gameData

  let status

  const chooseStatus = {
    correct: `border border-green-c60BF88 text-white bg-green-c60BF88`,
    incorrect: `border border-red-cEA8282 text-white bg-red-cEA8282`,
  }

  if (answered) {
    if (children === correctCountry.capital) {
      status = "correct"
    } else if (children === selectedAnswer.capital) {
      status = "incorrect"
    }
  }

  return (
    <button
      disabled={answered}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`p-4 w-full rounded-2xl focus:outline-none transition-all duration-300 ${
        status
          ? chooseStatus[status]
          : hover
          ? "border border-orange-cF9A826 bg-orange-cF9A826"
          : "border border-purple-c6066D0 bg-white"
      }`}
      {...props}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <p
            className={`font-pop font-medium text-2xl transition-all duration-300 ${
              status
                ? chooseStatus[status]
                : hover
                ? "text-white bg-orange-cF9A826"
                : "text-purple-c6066D0 bg-white"
            }`}
          >
            {letter}
          </p>
          <p
            className={`font-pop font-medium text-lg transition-all duration-300 ${
              letter && "ml-12"
            } ${
              status
                ? chooseStatus[status]
                : hover
                ? "text-white border-orange-cF9A826 bg-orange-cF9A826"
                : "text-purple-c6066D0 border-purple-c6066D0 bg-white"
            }`}
          >
            {children}
          </p>
        </div>
        {answered && status === "correct" && (
          <span className="material-icons-outlined">check_circle</span>
        )}
        {answered && status === "incorrect" && (
          <span className="material-icons-outlined">cancel</span>
        )}
      </div>
    </button>
  )
}

export default Button
