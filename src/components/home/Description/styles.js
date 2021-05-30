import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 4rem;
    border-left: 15px solid var(--secondary);
    margin: 1rem;

    @media (min-width: 1000px){
        grid-template-rows: 1fr 8rem;
    }

`;

export default Container;