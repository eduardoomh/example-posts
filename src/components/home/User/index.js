import React from "react";
import ImgCircle from "components/reusableStyles/ImgCircle";
import {Container, Text} from "./styles";

export default function User(){
    return(
        <Container>
        <ImgCircle 
            src="https://jesusmh.s3.us-east-2.amazonaws.com/avatares/jesusmh.jpg" 
            alt="jesus mh"
            width={60}
            height={60}
        />
        <Text>Jesus MH presents</Text>
    </Container>
    )
}