import Head from 'next/head'
import Image from 'next/image'
import { Inter, Nunito_Sans } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const nunito = Nunito_Sans({ subsets: ['latin'], weight: ['300', '600', '800'] },);

export default function Home() {
  return (
    <>
      <Head>
        <title>Countries Application</title>
        <meta name="description" content="Here you cand find all countries in the world" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={nunito.className}>Countries Nunito</h1>
      </main>
    </>
  )
}
