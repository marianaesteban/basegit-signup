import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px;
  border-radius: 6px;
  font-size: ${({ theme }) => theme.fontSizes.default};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 22px;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: all 0.2s ease;

  &:disabled {
    opacity: 0.4;
  }

  svg {
    width: 20px;
    max-height: 20px;
  }

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      background: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};

      &:hover {
        opacity: 0.9;
        box-shadow: ${({ theme }) => theme.shadows.md};
      }

      svg {
        color: ${({ theme }) => theme.colors.white};
      }
    `}

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.gray[500]};
      border: 1px solid ${({ theme }) => theme.colors.gray[300]};

      &:hover {
        border: 1px solid ${({ theme }) => theme.colors.gray[500]};
      }

      svg {
        fill: ${({ theme }) => theme.colors.gray[500]};
      }
    `}
`;
