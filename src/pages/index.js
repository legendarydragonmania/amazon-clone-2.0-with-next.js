import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon.com. Spend less. Smile more</title>
        <meta
          name='description'
          content='A very Amazon clone made by Yoqubboy with Next.js. Hope you will enjoy it.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
    </div>
  )
}
