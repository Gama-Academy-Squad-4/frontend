import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 90%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    font-family: Helvetica, Sans-Serif;
    background-color: #7d38db;
    padding: 2%;
    

    @media(max-width: 820px) {       
        height: auto;
        margin-bottom:  5%;        
    }
`

export const FormContainer = styled.div `
    border: solid #68de5a 3px;
    border-radius: 5px;
    width: 70%;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 3%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media(max-width: 800px) {
        width: 80%;    
        flex-direction: column;
        justify-content: space-evenly;
        height: 300px;
        margin-bottom: 5%;    
    }
`


export const FormGroup = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`