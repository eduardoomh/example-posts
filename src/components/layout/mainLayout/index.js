import React from 'react';
import Footer from "components/reusableStyles/Footer";
import Paragraph from "components/reusableStyles/Paragraph";
import Link from "components/reusableStyles/Link";
import {Main} from "./styles"; 

export default function MainLayout({children}){
    return(
        <Main>
            {children}
            <Footer>
                <Paragraph color="white">Development by</Paragraph>
                <Paragraph color="white">
                    <Link href="http://jesusmh.com" target="_blank" color="white">JesusMH.com</Link>
                </Paragraph>
            </Footer>
            
        </Main>
    )
}