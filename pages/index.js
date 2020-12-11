import Layout from "../components/Layout/Layout"
import Button from "../components/Button/Button"

export default function Home() {
  return (
    <Layout>
      <div>
        <h1 className="font-pop font-bold text-4xl text-gray-cF2F2F2">
          COUNTRY QUIZ
        </h1>
        <div className="w-80 h-40">
          <Button letter="A">Poland</Button>
        </div>
      </div>
    </Layout>
  )
}
