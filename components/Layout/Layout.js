import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <div className="w-screen h-screen flex flex-col justify-between bg-background bg-cover">
      <Head>
        <title>Country Quiz</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Icons"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="w-1/3 h-full mx-auto flex flex-col items-center justify-center">
        <div className="relative top-12 flex justify-between">
          <h1 className="relative top-4 font-pop font-bold text-4xl text-gray-cF2F2F2">
            COUNTRY QUIZ
          </h1>
          <img src="../../undraw_adventure.svg" alt="adventure" />
        </div>
        <div className="w-full px-8 py-20 flex flex-col gap-8 rounded-2xl bg-white">
          {children}
        </div>
      </main>

      <footer className="text-center">
        <p className="mb-4 font-mon text-gray-cF2F2F2 text-sm font-semibold">
          <a href="https://github.com/durashere">durashere</a> @{" "}
          <a href="https://devchallenges.io">DevChallenges.io</a>
        </p>
      </footer>
    </div>
  )
}

export default Layout
