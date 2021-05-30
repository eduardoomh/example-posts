import styled from "styled-components";

export const Container = styled.div`
    border-left: 15px solid var(--secondary);

    @media (min-width: 1000px){
        max-width: 1000px;
        margin: auto;
    }
`;