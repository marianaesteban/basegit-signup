import styled from 'styled-components';
import Button from 'components/Button';
import Input from 'components/Input';

export const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 24px;
`;

export const FormInput = styled(Input)`
  &::not(:first-child) {
    margin-top: 24px;
  }
`;
