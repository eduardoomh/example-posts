import React,{useEffect} from "react";
import ItemPost from "components/posts/ItemPost";
import Title from "components/reusableStyles/Title";
import Paragraph from "components/reusableStyles/Paragraph";
import usePosts from "hooks/usePosts";
import usePostsContext from "hooks/usePostsContext";

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

       if(!listPosts?.length > 0 ){
            getAllPosts();  
            updateListPosts(posts);
       }

        return () => {
            console.log("finish");
        }
    }, [listPosts]);

    return(
        <div>
            <Title>posts</Title>
            <ul>
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
            </ul>
        </div>
    )
}