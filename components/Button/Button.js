import React, { useState } from "react"

const Button = ({ letter, children }) => {
  const [hover, setHover] = useState(false)

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`p-4 w-full rounded-2xl focus:outline-none ${
        hover ? "bg-orange-cF9A826" : "bg-white"
      }`}
    >
      <div className="flex items-center">
        <p
          className={`font-pop font-medium text-2xl ${
            hover ? "text-white" : "text-purple-c6066D0"
          }`}
        >
          {letter}
        </p>
        <p
          className={`ml-12 font-pop font-medium text-lg ${
            hover ? "text-white" : "text-purple-c6066D0"
          }`}
        >
          {children}
        </p>
      </div>
    </button>
  )
}

export default Button
