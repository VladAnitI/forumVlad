import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Homepage from './pages/Homepage/Homepage';
import { Error } from './pages/Error/Error';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Homepage />
	},
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '/signup',
		element: <SignUp />
	},
	{
		path: '/*',
		element: <Error />
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
