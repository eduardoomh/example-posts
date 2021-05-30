import React from "react";
import {useHistory} from "react-router-dom";
import Paragraph from "components/reusableStyles/Paragraph";
import Button from "components/reusableStyles/Button";
import Container from "./styles";

export default function Description(){
    const history = useHistory();
    
    const navigate = () =>{
        history.push("/posts");
    }

    return(
        <Container>
            <Paragraph justify="start">
                See a list of example posts, only read, or create new posts, or maybe you something want to delete.
            </Paragraph>
            <Button onClick={() => navigate()}>See Posts</Button>
        </Container>
    )
}