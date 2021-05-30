import React,{useEffect} from "react";
import ItemPost from "components/posts/ItemPost";
import Title from "components/reusableStyles/Title";
import Paragraph from "components/reusableStyles/Paragraph";
import usePosts from "hooks/usePosts";
import usePostsContext from "hooks/usePostsContext";
import {UlStyle} from "./styles";

export default function ListPosts(){
    const {getPosts, getUsers, users, posts} = usePosts();
    const {listPosts, updateListPosts} = usePostsContext();

    const getUser = (id) =>{
        let user = users?.find(item => item.id === id);
        return user?.username;
    }

    useEffect(() => {
        getUsers();

       const getAllPosts = async () =>{
            try{
                await getUsers();
                await getPosts();

            }catch(error){
                console.log(error);
            }
       }

       if(!posts?.length > 0){
            getAllPosts(); 
       }

       if(posts?.length > 0 && listPosts?.length === 0){
            updateListPosts(posts);
       }

        return () => {
            console.log("finish");
        }
        // eslint-disable-next-line
    }, [listPosts, posts]);

    return(
        <div>
            <Title>posts</Title>
            <UlStyle>
                {
                    listPosts?.length > 0 ? 
                            listPosts?.map((item, index) => (
                                <ItemPost 
                                    key={item.id} 
                                    title={item.title} 
                                    index={index}
                                    id={item.id}
                                    username={`created by: ${getUser(item.userId)}`} 
                                />
                            )).reverse()
                        
                     : (
                        <Paragraph>loading the posts...</Paragraph>
                    )
           
                }
            </UlStyle>
        </div>
    )
}