import '../styles/globals.css';
import { StyledEngineProvider } from '@mui/material/styles';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import Router from 'next/router';
import { useState } from 'react';
import TopBarProgress from 'react-topbar-progress-indicator';
import { SessionProvider } from 'next-auth/react';
import GlobalProvider from '../lib/context/GlobalData';
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [progress, setProgress] = useState(false);

  Router.events.on('routeChangeStart', () => {
    setProgress(true);
    //function will fired when route change started
  });

  Router.events.on('routeChangeComplete', () => {
    setProgress(false);
    //function will fired when route change ended
  });

  return (
    <>
      {progress && <TopBarProgress />}
      <StyledEngineProvider injectFirst>
        <DefaultSeo {...SEO} />
        <SessionProvider session={session}>
          <GlobalProvider>
            <Component {...pageProps} />
          </GlobalProvider>
        </SessionProvider>
      </StyledEngineProvider>
    </>
  );
}

export default MyApp;
