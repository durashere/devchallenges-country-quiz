import React, { useState } from "react"

const Button = ({ letter, children, status, ...props }) => {
  const [hover, setHover] = useState(false)
  console.log(children, hover)

  const chooseStatus = {
    correct: `border border-green-c60BF88 text-white bg-green-c60BF88`,
    incorrect: `border border-red-cEA8282 text-white bg-red-cEA8282`,
  }

  return (
    <button
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
      <div className={`flex items-center ${!letter && "justify-center"}`}>
        {letter && (
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
        )}
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
    </button>
  )
}

export default Button
