import 'rsuite/dist/rsuite.min.css'
import './styles/globals.scss'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CustomProvider } from 'rsuite';
import { ptBR } from 'rsuite/esm/locales/index'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomProvider theme='dark' locale={ptBR}>
      <App />
    </CustomProvider>
  </StrictMode>,
)
