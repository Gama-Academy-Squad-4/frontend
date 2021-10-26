import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 90%;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-family: Helvetica, Sans-Serif;
  background-color: #7d38db;
  padding: 2%;

  @media (max-width: 820px) {
    height: auto;
    margin-bottom: 5%;
  }
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Table = styled.table`
  margin-top: 20px;
  width: 95%;
  border: solid 3px #fafafa;
  overflow-x: auto;
`;

export const Thead = styled.thead`
  border: solid 1px #fafafa;
  background-color: #68de5a;
  opacity: 0.95;
  color: #fafafa;
`;

export const Tbody = styled.tbody``;

export const TR = styled.tr`
  height: 50px;
  border-collapse: collapse;

  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TH = styled.th`
  min-width: 50px;
  vertical-align: middle;
`;

export const TD = styled.td`
  width: fit-content;
  text-align: center;
  align-items: center;
  justify-content: center;

  vertical-align: middle;
`;
