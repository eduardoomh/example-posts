import {useContext} from 'react'
import PostsContext from "context/PostsContext";

export default function useListContext() {
    const {listPosts, addPost, deletePost, updateListPosts} = useContext(PostsContext);

    return {listPosts, addPost, deletePost, updateListPosts}
}