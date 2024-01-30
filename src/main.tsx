import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme} from '@chakra-ui/react'
import App from './App.tsx'
import './index.css'

const theme = extendTheme({
  colors: {
    why: {
      primary: '#2062A9',
      secondary: '#F2F7FD',
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
