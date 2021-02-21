import { StyledButton } from './styles';

interface IButton extends React.ComponentPropsWithRef<'button'> {
  variant?: 'primary' | 'secondary';
}
const Button = ({ variant = 'primary', children, ...props }: IButton) => (
  <StyledButton variant={variant} {...props}>
    {children}
  </StyledButton>
);

export default Button;
