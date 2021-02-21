import { forwardRef } from 'react';
import { StyledLabel, StyledInput, ErrorMsg, Container } from './styles';

interface IInput extends React.ComponentPropsWithoutRef<'input'> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, IInput>(
  ({ label, id, error, ...props }, ref) => (
    <Container>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput id={id} ref={ref} state={error ? 'error' : 'default'} {...props} />
      {error && error.length > 0 && <ErrorMsg>{error}</ErrorMsg>}
    </Container>
  )
);

export default Input;
