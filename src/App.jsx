import React from 'react'

import Layout from "./Layout"
import Home from "./pages/Home"

import { createBrowserRouter, RouterProvider } from "react-router"
import Remove from './pages/Remove'
import { useUser } from '@clerk/clerk-react'

const App = () => {
    const {isSignedIn,user}=useUser();

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/remove',
                    element: (isSignedIn?<Remove/>:<Home/>)
                }
            ]
        }
    ])



    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App