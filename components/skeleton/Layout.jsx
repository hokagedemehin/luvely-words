/* eslint-disable react/prop-types */
// import React from 'react'
import Head from 'next/head';
import Header from './Header';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';

function ScrollTop() {
  // const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    // target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role='presentation'
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        <Fab size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Fade>
  );
}

const Layout = ({ children, name, desc }) => {
  return (
    <div>
      <Head>
        <title>Luvely Words - {name}</title>
        <meta name='description' content={desc} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Toolbar id='back-to-top-anchor' />
      <main className='min-h-screen px-5 flex flex-col justify-center items-center'>
        {children}
      </main>
      <ScrollTop />

      {/* </ScrollTop> */}
    </div>
  );
};

export default Layout;
