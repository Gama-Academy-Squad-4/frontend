import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  transition: 0.8s;
  width: 200px;
  height: 200px;
  position: fixed;
  top: 75px;
  right: ${(props) => (props.toggle ? '0' : '-250px')};
  background-color: #7d38db;
  border: solid 1px #68de5a;
  opacity: 0.95;
  z-index: 999;
`;

export const UL = styled.ul`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const LI = styled.li``;

export const StyledLink = styled(Link)`
  transition: 0.6s;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 700;
  color: #68de5a;
  font-family: 'roboto';

  &:hover {
    transition: 0.6s;
    color: #fafafa;
  }
`;
