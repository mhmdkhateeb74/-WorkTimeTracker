//npm install react-router  @mui/material @emotion/react @emotion/styled @mui/icons-material   stylis-plugin-rtl @emotion/cache material-ui-confirm @tanstack/react-query
import './App.css'

import { RouterProvider} from 'react-router';
import router from "./Router/main_R.jsx";

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';

import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { theme } from './theme_params.jsx';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});


function App() {

  return (
    <QueryClientProvider client={queryClient}>
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <CssBaseline /> {/* This normalizes the styles */}
                <RouterProvider router={router} />
            </ThemeProvider>
        </CacheProvider>
    </QueryClientProvider>
  )
}

export default App