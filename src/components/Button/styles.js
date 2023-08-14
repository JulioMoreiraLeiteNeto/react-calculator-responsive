import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding:10px;
    border: none;  
    cursor: pointer;
    background-color: #fff;
    color: #000;
    font-size: 65px;
    font-weight: 700;
    flex: 1;
    border-radius: 15px;
    margin: 12px 6px;

    &:hover{
        opacity: 0.6;
    }

    @media screen and (max-width: 490px) {
        
        width:100%;
        font-size: 50px;
        padding:8px;
        
    }
`