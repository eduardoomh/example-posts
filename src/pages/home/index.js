import React from 'react';
import Title from "components/reusableStyles/Title";
import User from "components/home/User";

export default function Home(props){
    return(
        <div>
            <User />
            <Title>EXAMPLE POSTS</Title>
        </div>
        
    )
}