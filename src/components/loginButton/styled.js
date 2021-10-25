import styled from 'styled-components';

export const Container = styled.div`
    transition: 0.8s;
    width: 60%;
    max-width: 300px;
    padding: 5px;
    background-color: #68de5a;
    
    border-radius: 5px;

    &:hover {
        transition: 0.8s;
        background-color: #499b3f;
        border: solid 1px #fff;
    }

    &:disabled {
        background-color: #7d38db;
        border: solid 1px #fff;
    }
`


export const Button = styled.button`    
    transition: 0.8s;
    background-color: #68de5a;
    width: 100%;
    height: 35px;
    border-radius: 5px;
    border: solid 1px #fff;

    box-shadow: none;

    color: #181e23;
    font-size: 16px;
    font-weight: 600;
    font-family: 'roboto';

    cursor: pointer;

    &:hover {
        transition: 0.8s;
        background-color: #499b3f;
        color: #ffff;
    }

    &:disabled {
        background-color: #7d38db;
        color: #ffff;
    }

`