
import styled from 'styled-components';

const Button  = styled.button`
    width: 8rem;
    height: 3rem;
    background-color: transparent;
    margin: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    border: 1px solid var(--third); 
    border-radius: 6px; 

    &:hover{
        transition: .1s;
        cursor: pointer;
        background-color: var(--third);
        color: white;
    }

    @media (min-width: 1000px){
        margin: 2rem;
        width:10rem;
        height: 3.5rem;
        font-size: 1.3rem;
    }

`;

export default Button;