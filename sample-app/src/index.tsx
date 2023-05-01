import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

import Page1 from './Page1';
import Page2 from './Page2';
import SampleArray from './SampleArray';
import SampleCustomer from './SampleCustomers';

const router = createBrowserRouter([
	{
	  path: "/",
	  element: <App />,
	},
	{
		path: "/page1",
		element: <Page1 />,
	},
	{
		path: "/page2",
		element: <Page2 />,
	},
	{
		path: "/sample-array",
		element: <SampleArray />,
	},
	{
		path: "/sample-customer",
		element: <SampleCustomer />,
	},
 ]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
	{/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
