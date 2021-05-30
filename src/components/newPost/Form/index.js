import React, {useState,useEffect} from "react";
import {useHistory} from "react-router-dom";
import { useId } from "react-id-generator";
import Button from "components/reusableStyles/Button";
import usePosts from "hooks/usePosts";
import usePostsContext from "hooks/usePostsContext";
import {FormContainer} from "./styles";

export default function Form() {
    const {getUsers, users} = usePosts();
    const {addPost, updateListPosts} = usePostsContext();
    const history = useHistory();
    const [htmlId] = useId();

    const [formData, setFormData] = useState({
        id: htmlId,
        title: "",
        body: "",
        userId: 1
    });

    const createPost = (e)=>{
        e.preventDefault()
        let array = addPost(formData);
        updateListPosts(array);
        history.push("/posts");
    }

    useEffect(() => {
        getUsers();
// eslint-disable-next-line
    }, [])

    return (
        <FormContainer onSubmit={(e) => createPost(e)}>
            <div>
                <label>User</label>
                <select 
                    selected={formData.id} 
                    onChange={(e) => setFormData({...formData, userId: parseInt(e.target.value)})}>
                    {
                        users?.map(user => (
                            <option key={user.id} value={user.id}>{user.username}</option>
                        ))
                    }
                    
                </select>
            </div>
            <div>
                <label>Title</label>
                <input 
                    type="text" 
                    value={formData.title} 
                    onChange={(e) => setFormData({...formData, title: e.target.value})}/>
            </div>
            <div>
                <label>Body</label>
                <textarea 
                    value={formData.body} 
                    onChange={(e) => setFormData({...formData, body: e.target.value})} />
            </div>
            <Button>Create Post</Button>
        </FormContainer>
    )
}