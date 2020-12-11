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

      <main className="h-full flex items-center justify-center">
        {children}
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
