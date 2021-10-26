import styled from 'styled-components';

export const Container = styled.div`
  border: solid #68de5a 3px;
  border-radius: 5px;

  min-width: 600px;
  height: 70%;
  width: 40%;
  background-color: #7d38db;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 800px) {
    min-width: 300px;
    justify-content: start;
    padding-top: 10%;
  }
`;

export const FormContainer = styled.div`
  border: solid #68de5a 3px;
  border-radius: 5px;
  width: 70%;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
