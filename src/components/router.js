import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './home'
import Logement from './logement'
import Propos from './propos'
import ErrorPage from './errorPage'

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (
      <App>
        <ErrorPage />
      </App>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
      {
        path: 'Fiche-Logement/:id',
        element: <Logement />,
      },
      {
        path: 'A-Propos',
        element: <Propos />,
      },
    ],
  },
])

function Router() {
  return <RouterProvider router={browserRouter} />
}

export default Router
