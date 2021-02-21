import Head from 'next/head';
import Logo from 'public/svg/logo';
import SocialButtons from 'components/SocialButtons';
import SignupForm from 'components/SignupForm';
import Heading from 'components/Heading';

export default function Home() {
  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <main>
        <Logo width="50px" height="50px" />
        <Heading>Sign Up to BaseGit</Heading>
        <span>BaseGit is the best way to store information.</span>
        <span>Continue with a provider</span>
        <SocialButtons />
        <SignupForm />
        <img src={require('public/img/rocket.png')} />
      </main>

      <footer></footer>
    </>
  );
}
