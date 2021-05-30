import React, {useEffect} from 'react';
import {animateScroll as scroll } from "react-scroll";
import { useHistory } from "react-router-dom";
import TitleHeader from "components/reusable/TitleHeader";
import Title from "components/reusableStyles/Title";
import Paragraph from "components/reusableStyles/Paragraph";
import Button from "components/reusableStyles/Button";
import Space from "components/reusableStyles/Space";
import Form from "components/newPost/Form";
import { motion } from "framer-motion";
import { Container } from "./styles";

export default function NewPost(props) {

    const history = useHistory();

    const navigate = () => {
        history.push("/posts");
    }

    useEffect(() =>{
        scroll.scrollToTop();
    },[]);

    return (
        <Container>
            <TitleHeader path="/">
                <motion.div animate={{ scale: 0.9 }} transition={{ ease: "easeOut" }}>
                    <Title size="5.5rem" justify="start">CREATE <br />POST</Title>
                </motion.div>
                <Paragraph justify="start">
                    You can create many post if your want.
                    lets do it.
                </Paragraph>
                <Button onClick={() => navigate()}>All Posts</Button>

            </TitleHeader>
            <Space />
            <Form />
            <Space />
        </Container>
    )
}