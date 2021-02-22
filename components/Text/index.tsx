import styled, { css } from 'styled-components';

//TODO: add bold style
const Text = styled.p<{
  weight?: 'light' | 'regular' | 'bold';
  margin?: string;
  padding?: string;
}>`
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  font-size: ${({ theme }) => theme.fontSizes.default};
  line-height: 20px;

  ${(props) =>
    props.weight === 'light' &&
    css`
      font-weight: ${({ theme }) => theme.fontWeights.light};
      color: ${({ theme }) => theme.colors.gray[600]};
    `}
  ${(props) =>
    props.weight === 'regular' &&
    css`
      font-weight: ${({ theme }) => theme.fontWeights.regular};
      color: ${({ theme }) => theme.colors.black};
    `}
`;

Text.defaultProps = {
  weight: 'regular',
};

export default Text;
