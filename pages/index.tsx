// import Image from 'next/image'
import { getCode } from 'app/services/fethers'
import Head from 'next/head'
import { useEffect } from 'react'

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_GITHUB_TOKEN)
  useEffect(()=>{
    getCode({
      q: 'React'
    }).then((data)=>{
      console.log('data', data)
    })
  })
  return (
    <div className="container">
      <Head>
        <title>GitHub repositories Search App</title>
        <meta name="description" content="an app to search GitHub repositories." />
        <meta
          name="viewport"
          content="minimum-scale=1.0, initial-scale=1.0, maximum-scale=1.0, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        search
      </main>
    </div>
  )
}
