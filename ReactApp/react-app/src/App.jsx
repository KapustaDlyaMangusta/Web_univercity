import HomePage from "./pages/Home/HomePage";
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CatalogPage from './pages/Catalog/CatalogPage';
import { CatalogContextProvider } from './context/catalog-context';
import { RootLayout } from './pages/Root';
import CatalogItemDetailPage, { loader as catalogItemDetailsLoader } from './pages/CatalogItem/CatalogItemDetailPage';
import ErrorPage from './pages/Other/ErrorPage';
import NotFoundPage from './pages/Other/NotFoundPage';
import CartPage from './pages/Cart/CartPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
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
          {
            path: ':catalogItemId',
            element: <CatalogItemDetailPage />,
            loader: catalogItemDetailsLoader
          }
        ]
      },
      {
        path: 'cart',
        children: [
          {
            index: true,
            element: <CartPage />
          }
        ]
      }
    ]
  },
  { path: '*', element: <NotFoundPage/> },
])

export const App = () => {
  return <RouterProvider router={ router }/>
}
