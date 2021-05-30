import { useState } from "react";
import usePostsContext from "hooks/usePostsContext";

export default function usePosts() {
    const [posts, setPosts] = useState(null);
    const [users, setUsers] = useState();
    const {listPosts} = usePostsContext();

    const getPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                setPosts(json);
                return json;
            });

    }

    const getUsers = () =>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => response.json())
        .then((json) =>{
            setUsers(json);
            return json;
        })
    }

    const getPostById = (id) =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((json) =>{
            setUsers(json);
            return json;
        })
    }

    const findPostById = (id) =>{
        let result = listPosts.find(item => (item.id)?.toString() === id);
        return result;
    }


    return { getPosts, posts, getUsers, users, getPostById, findPostById }
};


