import styled from 'styled-components';
import Head from 'next/head';
import Logo from 'public/svg/logo';
import Text from 'components/Text';
import Divider from 'components/Divider';
import SocialButtons from 'components/SocialButtons';
import SignupForm from 'components/SignupForm';
import Heading from 'components/Heading';

export default function Home() {
  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <Layout>
        <SignupContainer>
          <SignupHeader>
            <Logo className="logo" />
            <Heading>Sign Up to BaseGit</Heading>
            <Text weight="light" margin="8px 0 0 0">
              BaseGit is the best way to store information.
            </Text>
          </SignupHeader>
          <Text margin="0 0 4px 0">Continue with a provider</Text>
          <SocialButtons />
          <Divider>Or with your work email</Divider>
          <SignupForm />
        </SignupContainer>
        <CoverImg className="cover-img">
          {/* Would be ideal to have different image sizes to use srcset + sizes */}
          <img src={require('public/img/rocket.png')} alt="" width="100%" height="100%" />
        </CoverImg>
      </Layout>
    </>
  );
}

//TODO: might be cool to make the image follow the cursor on hover
const CoverImg = styled.div`
  overflow: hidden;
  min-height: 100vh;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease;
  }
`;

const Layout = styled.main`
  display: grid;
  justify-items: center;
  grid-gap: 20px;
  @media (min-width: ${({ theme }) => theme.device.lg}) {
    /* prettier-ignore */
    grid-template-columns: repeat(2,calc(50vw - 18px)); //10px from the gap (half and half) + 8px from the wrapper padding
  }
  ${CoverImg} {
    display: none;
    @media (min-width: ${({ theme }) => theme.device.lg}) {
      display: block;
    }
  }
`;

const SignupHeader = styled.header`
  padding-bottom: 32px;

  .logo {
    width: 50px;
    height: 50px;
    margin-bottom: 25px;
  }
`;

const SignupContainer = styled.section`
  width: 100%;
  max-width: 400px;
  padding-top: 50px;
  padding-bottom: 50px;
`;
