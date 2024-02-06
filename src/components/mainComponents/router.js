import App from '../../pages/mainLayout/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../../pages/home'
import Logement from '../../pages/logement'
import Propos from '../../pages/propos'
import ErrorPage from '../../pages/errorPage'

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
