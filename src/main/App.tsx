import { GlobalStyle } from '@/presentation/styles'
import { RouterProvider } from 'react-router-dom'
import { Router } from './router'

export const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={Router} />
      <GlobalStyle />
    </>
  )
}
