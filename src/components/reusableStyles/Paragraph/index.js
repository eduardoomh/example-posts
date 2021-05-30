import styled from "styled-components";

const Paragraph = styled.p`
    font-size: 1.3rem;
    text-align: ${props => props.justify ? props.justify : "center"};
    padding: 1rem;
    color: ${props => props.color ? props.color : "black"};

    @media (min-width: 1000px){
        font-size: 1.5rem;
        padding: 2rem;
    }

`;
export default Paragraph;