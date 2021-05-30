import styled from "styled-components";

const Link = styled.a`
    color: ${props => props.color ? props.color : "var(--third)"};

`;
export default Link;