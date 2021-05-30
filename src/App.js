import {useState, useMemo} from "react";
import './App.css';
import Router from "routes/router";
import PostsContext from "context/PostsContext";

export default function App() {
  const [listPosts, setListPosts] = useState([]);

  const deletePost = (index) => {
    let newArray = [...listPosts];
    newArray.splice(index, 1)
    return newArray;
  }

  const addPost = (data) => {
    let newArray = [...listPosts];
    newArray.push(data);
    return newArray;
  }

  const updateListPosts = (data) => {
    setListPosts(data);
  }

  const postsContextValue = useMemo(
    () => ({
      listPosts,
      addPost,
      deletePost,
      updateListPosts
  
    }),
    [listPosts]);

  return (
    <div className="App">
       <PostsContext.Provider value={postsContextValue}>
         <Router />
       </PostsContext.Provider>
      
    </div>
  );
}
