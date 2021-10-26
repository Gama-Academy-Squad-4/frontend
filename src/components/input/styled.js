import styled from 'styled-components';

export const Input = styled.input`
  width: 85%;
  height: ${(props) => (props.height ? props.height : '50px')};
  background-color: #fafafa;
  color: rgba(0, 0, 0, 1);
  font-family: 'roboto';
  font-size: 0.9rem;
  font-weight: 600;
  padding-left: 2%;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : '5%')};
  font-family: Helvetica, Sans-Serif;

  border: 2px solid #68de5a;

  ::placeholder {
    //opacity: 1;
  }

  &:focus {
    transition: 0.5s;
    outline: none;
    border: 2px solid #ffffff;
    background-color: #68de5a;
    color: #ffffff;

    font-weight: 700;
  }
`;
