import Head from 'next/head'
import Logo from 'public/svg/logo'
import rocket from 'public/img/rocket.png';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Signup</title>
      </Head>

      <main >
        <Logo />
        <h1 >
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
<img src={rocket} />
      </main>

      <footer>
     
      </footer>
    </div>
  )
}
