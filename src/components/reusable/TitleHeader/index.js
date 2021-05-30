import React from "react";
import {useHistory} from "react-router-dom";
import StrongText from "components/reusableStyles/StrongText";
import {Container} from "./styles";

export default function TitleHeader(props){
    const {children, path} = props;
    const history = useHistory();

    const navigate = () =>{
        history.push(path);
    }

    return(
        <Container>
            <StrongText justify="start" onClick={() => navigate()}>Back to Main Page</StrongText>
            {children}
        </Container>
    )
}