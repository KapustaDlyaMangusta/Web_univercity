import HomePage from "./pages/Home/HomePage";
import React from 'react';
import { createBrowserRouter, Navigate, Route, RouterProvider, Routes } from 'react-router-dom';
import CatalogPage from './pages/Catalog/CatalogPage';
import { CatalogContextProvider } from './store/catalog-context';
import { RootLayout } from './pages/Root';
import CatalogItemPage from './pages/CatalogItem/CatalogItemPage';
import ErrorPage from './pages/Other/ErrorPage';
import NotFoundPage from './pages/Other/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage/> },
      {
        path: 'catalog',
        children: [
          {
            index: true,
            element:
              <CatalogContextProvider>
                <CatalogPage/>
              </CatalogContextProvider>
          },
          { path: ':catalogItemId', element: <CatalogItemPage/> }
        ]
      },
    ]
  },
  { path: '*', element: <NotFoundPage/> },
])

export const App = () => {
  return <RouterProvider router={ router }/>
}
