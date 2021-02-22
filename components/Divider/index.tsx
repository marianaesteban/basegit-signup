import styled from 'styled-components';

const Divider = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 24px 0;
  font-size: ${({ theme }) => theme.fontSizes.default};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 20px;
  color: ${({ theme }) => theme.colors.gray[500]};

  &::before {
    content: '';
    display: flex;
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.colors.gray[500]};
    margin-right: 8px;
  }

  &::after {
    content: '';
    display: flex;
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.colors.gray[500]};
    margin-left: 8px;
  }
`;

export default Divider;
