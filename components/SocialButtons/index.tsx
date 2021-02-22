import FacebookIcon from 'public/svg/facebook-icon';
import TwitterIcon from 'public/svg/twitter-icon';
import GithubIcon from 'public/svg/github-icon';
import Button from 'components/Button';
import { Container } from './styles';

// TODO: Add support for different social media and onClick functions for each
const SocialButtons = () => (
  <Container>
    <Button variant="secondary" aria-label="Facebook signup">
      <FacebookIcon />
    </Button>
    <Button variant="secondary" aria-label="Twitter signup">
      <TwitterIcon />
    </Button>
    <Button variant="secondary" aria-label="Github signup">
      <GithubIcon />
    </Button>
  </Container>
);

export default SocialButtons;
