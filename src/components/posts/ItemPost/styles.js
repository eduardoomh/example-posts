import styled from "styled-components";

export const ItemContainer = styled.li`
    display: grid;
    grid-template-columns: 1fr 4rem;
    grid-template-rows: 1fr 1fr;
    margin-bottom: 1rem;
    background-color: white;
    border: 1px solid var(--fourth);
    border-radius: 6px;
    padding-left: 1rem;

    @media (min-width: 1000px){
        max-width: 1000px;
        margin-bottom: 2rem;
        margin: auto;
    }
`;

export const CreatedBy = styled.p`
    grid-row: 2/3;
    grid-column:1/2;
    display: flex;
    justify-content: flex-start;
    color: var(--third);
`;

export const Title = styled.p`
    display: flex;
    justify-content: flex-start;
    font-size: 1.2rem;
`;

export const IconDiv = styled.div`
    grid-row: 1/span 2;
    grid-column:2/3;
    margin: auto;
    color: var(--third);
`;