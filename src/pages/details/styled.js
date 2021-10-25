import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background-color: #131313;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
`

export const Section1 = styled.section`
    background-color: #2e2f2e;
    min-height: 200px;
    height: 90%;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    padding: 2%;
    margin-bottom: 2%;

    @media(max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 2%;
    }
`

export const Title = styled.p`
    transition: 0.6s;    
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 700;    
    color: #68de5a;
    font-family: 'roboto';  
    margin-bottom: 3%;  

    
`