import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { UserLayout } from "./layouts/UserLayout/UserLayout";
import { TestPage } from "./pages/TestPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { DescriptionChatBotPage } from "./pages/DescriptionChatBotPage/DescriptionChatBotPage";
import { DescriptionLayout } from "./layouts/DescriptionLayout/DescriptionLayout";
import LandingPage from "./pages/LandingPage/LandingPage";
import MainPage from "./pages/MainPage/MainPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout/>,
        children: [
            {index: true, element: <LandingPage/>},
            {path: '*', element: <NotFoundPage/>},
            {path: 'main', element: <MainPage/>},
            {path: 'detail', element: <TestPage/>},
         
        ]
    },
    {
        path: '/description',
        element: <DescriptionLayout/>,
        children:[
            {index: true, element: <TestPage/>},
            {path: '*', element: <NotFoundPage/>},
            {path: 'chatbot', element:<DescriptionChatBotPage/>}
        ]
    }
])

export default router;