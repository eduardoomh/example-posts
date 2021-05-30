import React, {useState, useEffect} from 'react';
import {useLocation, useHistory} from "react-router-dom";
import {animateScroll as scroll } from "react-scroll";
import Title from "components/reusableStyles/Title";
import Paragraph from "components/reusableStyles/Paragraph";
import Button from "components/reusableStyles/Button";
import Space from "components/reusableStyles/Space";
import usePosts from "hooks/usePosts";
import {Container} from "./styles";

export default function Post(props){
    const [id, setId] = useState(0);
    const [postData, setPostData] = useState({});
    const history = useHistory();
    const location = useLocation();
    const {findPostById, getUsers, users} = usePosts();

    const navigate = () =>{
        history.push("/posts");
    }

    
    const getUser = (id) =>{
        let user = users?.find(item => (item?.id)?.toString() === id?.toString());
        return user?.username;
    }

    useEffect(() =>{
        scroll.scrollToTop();
        setId(location.pathname.substring(6));
        getUsers();
        
        if(id){
            let data = findPostById(id);
            setPostData(data);
        }
        
     // eslint-disable-next-line
    },[id]);

    return(
        <Container>
            <Title>{postData?.title}</Title>
            <Paragraph>{postData?.body}</Paragraph>
            <Paragraph>{`created by: ${getUser(postData?.userId)}`}</Paragraph>
            <Button onClick={() => navigate()}>go to Posts</Button>
            <Space />
        </Container>
    )
}