import styled, { css } from 'styled-components';

interface IFlex {
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'stretch';
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  display?: 'inline-flex' | 'flex';
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexFlow?: string | null;
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  width?: string;
  height?: string;
}

const Flex = styled.div<IFlex>`
  align-content: ${({ alignContent }) => alignContent || 'stretch'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  display: ${({ display }) => display || 'flex'};
  ${({ flexFlow }) =>
    !flexFlow &&
    css<IFlex>`
      flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
      flex-wrap: ${({ flexWrap }) => flexWrap || 'wrap'};
    `}
  ${({ flexFlow }) =>
    flexFlow &&
    css<IFlex>`
      flex-flow: ${flexFlow};
    `}
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
`;

export default Flex;
