import React from "react";
import { useHistory } from "react-router-dom";
import { GoTrashcan } from "react-icons/go";
import usePostsContext from "hooks/usePostsContext";
import { ItemContainer, CreatedBy, IconDiv, Title } from "./styles";

export default function ItemPost(props) {
    const { title, username, index, id } = props;
    const { deletePost, updateListPosts } = usePostsContext();
    const history = useHistory();

    const deleteItem = () => {
        let data = deletePost(index);
        updateListPosts(data);
    }

    const gotoPost = () => {
        history.push(`/post/${id}`);
    }

    return (
        <ItemContainer>
            <div className="div" onClick={() => gotoPost()}>
                <Title>{title.substring(0, 15)}...</Title>
                <CreatedBy >{username}</CreatedBy>
            </div>
            <IconDiv onClick={() => deleteItem()}>
                <GoTrashcan size={30} />
            </IconDiv>
        </ItemContainer>
    )
}