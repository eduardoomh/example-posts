import styled from "styled-components";

export const ItemContainer = styled.li`
    display: grid;
    grid-template-columns: 1fr 4rem;
    grid-template-rows: 1fr;
    margin-bottom: 1rem;
    background-color: white;
    border: 1px solid var(--fourth);
    border-radius: 6px;
    padding-left: 1rem;
    padding-bottom: 0;

    .div{
        grid-row: 1/ span 2;
        margin: 0;
    }

    @media (min-width: 1000px){
        grid-template-columns: 1fr 6rem;
        grid-template-rows: 5rem;
        min-width: 900px;
        height: 6rem;
        margin: auto;
        margin-bottom: 2rem;

        &:hover{
            cursor: pointer;
            border: 1px solid var(--third);
            background-color: #ececec;
        }
    }
`;

export const CreatedBy = styled.p`
    display: flex;
    justify-content: flex-start;
    color: var(--third);
    margin: 0;
    padding: 0;

`;

export const Title = styled.p`
    display: flex;
    justify-content: flex-start;
    font-size: 1.2rem;
`;

export const IconDiv = styled.div`
    grid-column:2/3;
    margin: auto;
    padding: 0;
    color: var(--third);

    @media (min-width: 1000px){
        margin-top: 2rem;

        &:hover{
            color: red;
        }
    }
    
`;