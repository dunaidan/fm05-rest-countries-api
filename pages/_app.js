import '@/styles/globals.css'
import { CssBaseline } from '@mui/material'
import Layout from '@/components/layout'
import { ToggleColorModeProvider } from '@/context/color-mode-context'

export default function App({ Component, pageProps }) {
  return (
    <ToggleColorModeProvider>
      <Layout>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
    </ToggleColorModeProvider>
  )
}
