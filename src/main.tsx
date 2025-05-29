import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RecoilRoot } from 'recoil'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import ConfigurationPage from './pages/configuration.tsx'

import './index.css'
import SortitionPage from './pages/sortition.tsx';

let router = createBrowserRouter([
  {
    path: "/",
    Component: ConfigurationPage,
  },
  {
    path: "/sorteio",
    Component: SortitionPage,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </StrictMode>,
)
