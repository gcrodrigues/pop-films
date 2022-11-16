import { GlobalStyle } from '@/presentation/styles'
import { light } from '@/presentation/styles/themes/light'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './router'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <RouterProvider router={Router} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
