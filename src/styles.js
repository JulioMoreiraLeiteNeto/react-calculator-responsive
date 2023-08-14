import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100vh;
    background-color: #fff4;

    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const Content = styled.div`
    background-color: #FFFFFF;
    width:70%;
    border: 70px solid black;
    border-radius: 20px;
    
    
    @media screen and (max-width: 450px) {
        
        width:100%;

    }


    `

    
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

