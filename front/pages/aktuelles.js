import Head from 'next/head'
import Blog from '../components/blog'
import NavBar from '../components/navbar'
import Hero from '../components/hero'
import Footer from '../components/footer'
import { getAktuellesPage, getAktuellesAll } from '../lib/api'

export default function Index(props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <Blog props={props} />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const aktuellesPage = await getAktuellesPage()
  const aktuelles = await getAktuellesAll()
  return {
    props: { aktuellesPage, aktuelles },
  }
}