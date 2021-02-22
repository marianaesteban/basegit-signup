import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import GlobalStyle from 'styles/globalStyle';
import { themes } from 'styles/theme';
import { ThemeProvider } from 'styled-components';

function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);
  return (
    <ThemeProvider theme={themes.main}>
      <GlobalStyle />
      <>{loading ? <h1>Loading...</h1> : <Component {...pageProps} />}</>
    </ThemeProvider>
  );
}

export default App;
