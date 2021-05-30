import styled from "styled-components";

const StrongText = styled.strong`
    color: var(--third);
    text-align: ${props => props.justify ? props.justify : "center"};

    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }

`;
export default StrongText;