import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

type IAPIResponse = string;
 
export const getServerSideProps: GetServerSideProps<{
  apiResponse: IAPIResponse
}> = async ({ req }) => {
  const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost:3000'
  const protocol = (req.headers['x-forwarded-proto'] as string) || 'http'
  const res = await fetch(`${protocol}://${host}/api/counter-text`)
  const apiResponse = await res.text();
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
