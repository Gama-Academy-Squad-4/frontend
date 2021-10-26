import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #68de5a;
  width: 300px;
  padding: 5px;
  margin: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 800px) {
    width: 200px;
  }
`;

export const Logo1 = styled.p`
  font-size: 3rem;
  font-weight: 600;
  color: #131313;
  font-family: Helvetica, Sans-Serif;

  @media (max-width: 800px) {
    font-size: 2rem;
  }
`;

export const Logo2 = styled.p`
  font-size: 3rem;
  font-weight: 700;
  color: #7d38db;
  font-family: Helvetica, Sans-Serif;
  text-shadow: 2px 2px #131313;

  @media (max-width: 800px) {
    font-size: 2rem;
  }
`;
