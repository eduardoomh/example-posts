import styled from "styled-components";

const Title = styled.h1`
    color: var(--third);
    font-size: ${props => props.size ? props.size : "2rem"};
    justify-content: ${props => props.justify ? `flex-${props.justify}` : "center"};
    text-align: ${props => props.justify ? props.justify : "center"};
    margin: 1rem;
`;

export default Title;