import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Welcome from '../pages/Welcome';
import AppLayout from '../layout/AppLayout';
import QuestionTracker from '../pages/QuestionTracker';
import Dashboard from '../pages/Dashboard';

const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Welcome/>,
        },
        {
            path: '/',
            element: <AppLayout />,
            children: [
                {
                    path: 'dashboard',
                    element: <Dashboard />,
                },
                {
                    path: 'question-tracker',
                    element: <QuestionTracker />,
                }
            ]
        }
    ])

    return <RouterProvider router={router} />;
}

export default AppRoutes