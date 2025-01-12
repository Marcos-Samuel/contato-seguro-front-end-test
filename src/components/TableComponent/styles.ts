import styled from 'styled-components';

interface ITable {
  action?: boolean;
}

export const Conteiner = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  margin-top: 48px;
  border-radius: 12px;
`;

export const Body = styled.tbody`
  display: block;
  max-height: 70vh;
  overflow-y: auto;
  width: 100%;
`;

export const TableRow = styled.tr`
  display: table;
  width: 100%;
  table-layout: fixed;
`;

export const TableWrapper = styled.div`
  max-height: 400px;
  overflow-y: auto;
  border-radius: 12px;
`;

export const TableHead = styled.th`
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.primary.purple[300]};
  color: ${({ theme }) => theme.colors.system.black[50]};
  text-align: center;
  padding: 12px;
  font-size: 1rem;

  &:last-child {
    text-align: left;
  }
`;

export const THeader = styled.thead``;

export const TableDescriptions = styled.td<ITable>`
  background-color: ${({ theme, action }) =>
    action ? theme.colors.primary.purple[100] : theme.colors.system.black[50]};
  font-size: 1rem;
  text-align: center;
  padding: 14px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.system.black[100]};
  border-right: 1px solid ${({ theme }) => theme.colors.system.black[100]};
  border-left: 1px solid ${({ theme }) => theme.colors.system.black[100]};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 540px;

  @media (max-width: 768px) {
    max-width: 100px;
  }
`;

export const TableAction = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

export const ButtonDelete = styled.button`
  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.system.error[500]};
  border-radius: 12px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.system.error[500]};
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.colors.system.black[50]};
    color: ${({ theme }) => theme.colors.system.error[500]};
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.system.error[500]};
    cursor: pointer;
  }
  svg {
    margin: 0;
  }
`;

export const ButtonEdit = styled.button`
  padding: 8px 16px;
  margin-right: 8px;
  background: ${({ theme }) => theme.colors.secondary.yellow[400]};
  border-radius: 12px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.secondary.yellow[400]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.system.black[50]};
    color: ${({ theme }) => theme.colors.system.success[400]};
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.secondary.yellow[300]};
    cursor: pointer;
  }
  svg {
    margin: 0;
  }
`;

export const TablePagination = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: ${({ theme }) => theme.colors.system.black[200]};
  border: 1px solid ${({ theme }) => theme.colors.system.black[400]};
  color: ${({ theme }) => theme.colors.system.black[500]};
  strong {
    font-size: 14px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
`;

export const Page = styled.div`
  display: block;
  padding: 5px 15px;
  font-weight: bold;
`;

export const ButtonNavigation = styled.button`
  font-size: 18px;
  border: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  justify-content: center;
  background: none;
  align-items: center;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  svg {
    margin: 0;
  }
`;

export const LinkExternal = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary.purple[300]};
  font-weight: bold;
`;

export const ContentModal = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  row-gap: 10px;
`;
