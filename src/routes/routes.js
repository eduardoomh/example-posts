import Home from "pages/home";
import Posts from "pages/posts";
import NewPost from "pages/newPost";
import ErrorComponent from "pages/error";
import MainLayout from "components/layout/mainLayout";

export const rutas = [
    {
        path: "/",
        layout: MainLayout,
        component: Home,
        exact: true
    },
    {
        path: "/posts",
        layout: MainLayout,
        component: Posts,
        exact: true
    },
    {
        path: "/new-post",
        layout: MainLayout,
        component: NewPost,
        exact: true
    },
    {
        path: "*",
        layout: MainLayout,
        component: ErrorComponent,
        exact: true
    }

]