import React from 'react'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './Components/page/RootLayout';
import Home from './Components/page/Home';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout/>}
      >
        <Route index element={<Home/>} ></Route>

      </Route>
    )
  );

  return (
   <>
    <RouterProvider router={router} />
   </>
  )
}

export default App
