import 'styled-components'
import { Colors } from '@/presentation/styles/themes'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: Colors
  }
}
