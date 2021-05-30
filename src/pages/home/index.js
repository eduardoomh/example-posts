import React, {useEffect} from 'react';
import Title from "components/reusableStyles/Title";
import User from "components/home/User";
import Description from "components/home/Description";
import Paragraph from "components/reusableStyles/Paragraph";
import Link from "components/reusableStyles/Link";
import Space from "components/reusableStyles/Space";
import Development from "components/home/Development";
import {motion } from "framer-motion";
import useDevice from "hooks/useDevice";
import {animateScroll as scroll } from "react-scroll";
import {DivContainer} from "./styles";

export default function Home() {
    const {desktop} = useDevice();

    useEffect(() =>{
        scroll.scrollToTop();
    },[]);
    
    return (
        <div>
            <User />
            <DivContainer>
                <motion.div animate={{ scale: 0.9 }} transition={{ ease: "easeOut" }}>
                    <Title size={!desktop ? "5.2rem" : "7rem"} justify="start">EXAMPLE POSTS</Title>
                </motion.div>
                <Description /> 
            </DivContainer>
            <Space />
            <Title>WHAT IS THIS?</Title>
            <Paragraph>
                A simple CRUD application that works with
                <Link
                    href="https://jsonplaceholder.typicode.com/"
                    target="_blank"
                >
                    {" "}Jsonplaceholder API
                </Link>
            </Paragraph>
            <Space />
            <Title>DEVELOPMENT STACK</Title>
           <Development /> 

            <Space />
        </div>

    )
}