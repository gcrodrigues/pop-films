import { createBrowserRouter } from 'react-router-dom'
import { MakeHome } from '../factories/pages'

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <MakeHome />,
  },
])
