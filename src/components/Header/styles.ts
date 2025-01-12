import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
`;

export const ContentTitle = styled.div`
  display: flex;
  width: 80%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary.purple[300]};
  align-items: center;
  gap: 1rem;
  height: 100px;
`;
