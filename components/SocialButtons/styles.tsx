import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  > button {
    flex: 1;
    &:not(:last-child) {
      margin-right: 12px;
    }
  }
`;
