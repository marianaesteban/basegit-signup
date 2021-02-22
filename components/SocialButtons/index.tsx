import Image from 'next/image';
import Button from 'components/Button';
import { Container } from './styles';

// TODO: Add support for different social media and onClick functions for each
const SocialButtons = () => (
  <Container>
    <Button variant="secondary" aria-label="Facebook signup">
      <Image src="/svg/facebook-icon.svg" alt="Facebook" width="20px" height="20px" />
    </Button>
    <Button variant="secondary" aria-label="Twitter signup">
      <Image src="/svg/twitter-icon.svg" alt="Twitter" width="20px" height="20px" />
    </Button>
    <Button variant="secondary" aria-label="Github signup">
      <Image src="/svg/github-icon.svg" alt="Github" width="20px" height="20px" />
    </Button>
  </Container>
);

export default SocialButtons;
