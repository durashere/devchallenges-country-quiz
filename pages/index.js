import { useState } from "react"
import Link from "next/link"
import Layout from "../components/Layout/Layout"
import Button from "../components/Button/Button"

export default function Home() {
  return (
    <Layout>
      <Link href="/quiz/capital">
        <Button>Guess Capital</Button>
      </Link>
    </Layout>
  )
}
