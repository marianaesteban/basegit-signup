import styled from 'styled-components';

export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.default};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 20px;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const StyledInput = styled.input<{ state: 'default' | 'error' }>`
  border-radius: 6px;
  border: 1px solid
    ${(props) =>
      props.state === 'error' ? props.theme.colors.error : props.theme.colors.gray[300]};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  font-size: 16px;
  line-height: 24px;
  padding: 9px 13px; // I'd prefer to change this to just 10px 12px but this was the mock's specification
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border: 1px solid
      ${(props) =>
        props.state === 'error'
          ? props.theme.colors.error
          : props.theme.colors.gray[500]};
  }

  ${StyledLabel} > & {
    margin-top: 4px;
  }

  @media (max-width: ${({ theme }) => theme.device.md}) {
    font-size: 16px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  form &:not(:first-child),
  & + & {
    margin-top: 24px;
  }
`;

export const ErrorMsg = styled.div`
  padding-top: 8px;
  font-size: ${({ theme }) => theme.fontSizes.default};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 20px;
  color: ${({ theme }) => theme.colors.error};
`;
