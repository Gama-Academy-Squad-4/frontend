import styled from 'styled-components';

export const Container = styled.div`
    background-color: #7d38db;    
    width: 250px;
    height: 200px;
    border: solid 3px #68de5a;
    border-radius: 5px;
    margin: 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0 4px 8px 0 #68de5a, 0 6px 10px 0 rgba(0, 0, 0, 0.19);
    font-family: Helvetica, Sans-Serif;    

    @media(max-width: 800px) {
        margin-bottom: 5%;
    }
    
`


export const Title = styled.p`
   color: #f0f0f0;
   font-size: 1.8rem;
   font-weight: 600;
`

export const TitleContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   width: 90%;
   
`

export const ValueContainer = styled.div`
   display: grid;
   grid-template-columns: 50% 50%;
   width: 90%;

`

export const Label = styled.p`
    color: #f0f0f0;
    font-size: 1.0rem;
    font-weight: 600;
    margin-right: 5%;
`

export const Value = styled.p`
    color: #f0f0f0;
`

