import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import Layout from './layout/Layout';
import Contact from './Contact';
import ContactReview from './ContactReview';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/contact",
		element: <Contact />,
	},
	{
		path: "/contact/review",
		element: <ContactReview />,
	},
	{
		path: "/test-layout",
		element: <Layout />,
	},
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
	<RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
