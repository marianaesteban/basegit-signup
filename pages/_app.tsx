import type { AppProps } from 'next/app'
import GlobalStyle from 'styles/globalStyle'
import { themes } from 'styles/theme'
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes.main}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
