import '../styles/globals.css';
import { StyledEngineProvider } from '@mui/material/styles';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import TopBarProgress from 'react-topbar-progress-indicator';
import { SessionProvider } from 'next-auth/react';
import GlobalProvider from '../lib/context/GlobalData';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

  useEffect(() => {
    // gsap.to(boxRef.current, { rotation: '360' });
    AOS.init({
      easing: 'ease-out-back',
    });
  }, []);

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
