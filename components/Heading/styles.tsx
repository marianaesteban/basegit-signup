import styled, { css } from 'styled-components';
import { IHeading } from '.';

export const StyledHeading = styled.h1.attrs(({ level }: IHeading) => ({
  as: `h${level}`,
}))<IHeading>`
  margin: 0;

  ${({ level }) =>
    level === 1 &&
    css`
      font-size: 30px;
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      line-height: 36px;
      color: ${({ theme }) => theme.colors.black};
    `}
`;

//TODO: add styles for other heading levels
