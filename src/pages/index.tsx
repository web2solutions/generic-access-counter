import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

type IAPIResponse = string;
 
export const getServerSideProps: GetServerSideProps<{
  apiResponse: IAPIResponse
}> = async () => {
  const res = await fetch('https://generic-access-counter.vercel.app/api/counter-text')
  console.log(res)
  const apiResponse = await res.text();
  console.log(apiResponse)
  return { props: { apiResponse } }
} 

export default function Home({
  apiResponse,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Generic counter</title>
        <meta name="description" content="Generic counter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
        <div dangerouslySetInnerHTML={{__html: apiResponse}} />
        </div>
      </main>
    </>
  )
}
