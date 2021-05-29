import React from 'react';
import {Main} from "./styles"; 

export default function MainLayout({children}){
    return(
        <Main>
            {children}
        </Main>
    )
}