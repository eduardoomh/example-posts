import React from "react";
import ImgCircle from "components/reusableStyles/ImgCircle";
import { motion } from "framer-motion";
import { Container, Text } from "./styles";

export default function User() {
    return (
        <Container>
            <motion.div
                animate={{ scale: 0.8 }}
                transition={{ duration: 0.5 }}
            >
                <ImgCircle
                    src="https://jesusmh.s3.us-east-2.amazonaws.com/avatares/jesusmh.jpg"
                    alt="jesus mh"
                    width={70}
                    height={70}
                />        </motion.div>
            <Text>Jesus MH presents</Text>
        </Container>

    )
}