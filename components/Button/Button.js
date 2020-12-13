import React, { useState } from "react"

const Button = ({ letter, children, ...props }) => {
  const [hover, setHover] = useState(false)

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`p-4 w-full rounded-2xl focus:outline-none transition-all duration-300 ${
        hover
          ? "border border-orange-cF9A826 bg-orange-cF9A826"
          : "border border-purple-c6066D0 bg-white"
      }`}
      {...props}
    >
      <div className="flex items-center">
        <p
          className={`font-pop font-medium text-2xl transition-all duration-300 ${
            hover ? "text-white" : "text-purple-c6066D0"
          }`}
        >
          {letter}
        </p>
        <p
          id="text"
          className={`ml-12 font-pop font-medium text-lg transition-all duration-300 ${
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
