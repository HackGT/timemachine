import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'

import { BrowserRouter } from 'react-router';
import { ChakraProvider } from '@chakra-ui/react';
import { defaultSystem } from "@chakra-ui/react"

import "@fontsource-variable/dm-sans";
import "@fontsource-variable/roboto-mono";
import '@fontsource/russo-one';
import '@fontsource/fugaz-one';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
)
