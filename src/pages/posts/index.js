import React, {useEffect} from 'react';
import {animateScroll as scroll } from "react-scroll";
import {useHistory} from "react-router-dom";
import TitleHeader from "components/reusable/TitleHeader";
import Title from "components/reusableStyles/Title";
import Paragraph from "components/reusableStyles/Paragraph";
import ListPosts from "components/posts/ListPosts";
import Button from "components/reusableStyles/Button";
import Space from "components/reusableStyles/Space";
import {motion } from "framer-motion";
import {Container} from "./styles";

export default function Posts(props){
    const history = useHistory();

    const navigate = () =>{
        history.push("/new-post");
    }

    useEffect(() =>{
        scroll.scrollToTop();
    },[]);

    return(
        <Container>
            <TitleHeader path="/">
                <motion.div animate={{ scale: 0.9 }} transition={{ ease: "easeOut" }}>
                   <Title size="5.5rem" justify="start">ALL POSTS</Title> 
                </motion.div>
                <Paragraph justify="start">
                    A list for fake posts for fake people with fake information.
                    you can create new fake posts or delete.
                </Paragraph>
                <Button onClick={() => navigate()}>New Post</Button>   
            </TitleHeader>
            <Space />
            <ListPosts />
            <Space />
        </Container>
    )
}