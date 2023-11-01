import * as React from "react"
import Layout from "../components/layout"

const indexPage = () => {
  return (
    <Layout>
      <h1>Olá mundo gatsby</h1>
      <div>
        <p>Esse é o primeiro parágrafo</p>
        <p>Esse é o segundo parágrafo</p>
      </div>
    </Layout>
  )
}

export default indexPage

export const Head = () => <title>Início</title>
