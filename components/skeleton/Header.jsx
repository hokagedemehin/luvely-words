import { cloneElement, useEffect, useState } from 'react';
// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import CssBaseline from '@mui/material/CssBaseline';
import Image from 'next/image';
import luvely_words_2 from '../../public/home/luvely_words_2.png';
import { useRouter } from 'next/router';
import { signIn, signOut } from 'next-auth/react';
import { useGlobal } from '../../lib/context/GlobalData';

// const pages = ['Products', 'Pricing', 'Blog'];
const pages = [
  { id: 0, name: 'Process', link: '/#cardWorks' },
  { id: 1, name: 'Samples', link: '/#cardSamples' },
  { id: 2, name: 'Sponsor', link: '/#contribute' },
];
// const settings = ['Profile', 'Account', 'Dashboard'];
const settings = [
  {
    id: 0,
    name: 'Profile',
    link: '/profile',
  },
  {
    id: 1,
    name: 'Dashboard',
    link: '/dashboard',
  },
];

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = (props) => {
  const router = useRouter();
  const { globalSession, setGlobalSession } = useGlobal();

  // const { data: session } = useSession();
  // console.log('session :>> ', session);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    // router.push('/blog');
  };
  const handleNavLinks = (href) => {
    setAnchorElNav(null);
    router.push(href);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handeSignOut = () => {
    setGlobalSession();
    signOut();
    handleCloseUserMenu();
  };

  const handleUserMenu = (href) => {
    setAnchorElUser(null);
    router.push(href);
  };

  const [headerColor, setHeaderColor] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      if (!headerColor) setHeaderColor(true);
    } else {
      setHeaderColor(false);
    }
  };

  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          className={`${
            !headerColor
              ? 'bg-transparent'
              : 'bg-white bg-opacity-60 backdrop-blur-lg backdrop-filter'
          } text-black `}
        >
          <Container maxWidth='xl'>
            <Toolbar disableGutters>
              <div
                className='hidden cursor-pointer md:flex'
                onClick={() => router.push('/')}
              >
                <Image
                  src={luvely_words_2}
                  alt='website logo'
                  width={240}
                  height={50}
                  placeholder='blur'
                />
              </div>
              {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
              {/* <Typography
                variant='h6'
                noWrap
                component='a'
                href='/'
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography> */}

              <Box className='flex grow md:hidden'>
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleOpenNavMenu}
                  color='inherit'
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  // sx={{
                  //   display: { xs: 'block', md: 'none' },
                  // }}
                  className='block md:hidden'
                >
                  {pages.map((page) => (
                    <MenuItem
                      key={page?.id}
                      onClick={() => handleNavLinks(page?.link)}
                    >
                      <Typography textAlign='center'>{page?.name}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <div
                className='flex grow cursor-pointer md:hidden'
                onClick={() => router.push('/')}
              >
                <Image
                  src={luvely_words_2}
                  alt='website logo'
                  width={180}
                  height={40}
                  placeholder='blur'
                />
              </div>
              {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Typography
                variant='h5'
                noWrap
                component='a'
                href=''
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography> */}
              <Box
                className='hidden grow md:flex'
                // sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
              >
                {pages.map((page) => (
                  <Button
                    key={page?.id}
                    onClick={() => handleNavLinks(page?.link)}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                  >
                    {page?.name}
                  </Button>
                ))}
              </Box>
              {globalSession ? (
                <Box
                  // sx={{ flexGrow: 0 }}
                  className='grow-0'
                >
                  <Tooltip title='Open Dashboard'>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt={globalSession?.email?.split()[0]}
                        // src='/static/images/avatar/2.jpg'
                        // src={session?.user?.image}
                        src={globalSession?.imageURL}
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id='menu-appbar'
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem
                        key={setting?.id}
                        onClick={() => handleUserMenu(setting?.link)}
                      >
                        <Typography textAlign='center'>
                          {setting?.name}
                        </Typography>
                      </MenuItem>
                    ))}
                    <MenuItem
                      onClick={() => {
                        handeSignOut();
                      }}
                    >
                      <Typography textAlign='center'>Log Out</Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              ) : (
                <Button onClick={() => signIn()}>Login</Button>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Header;
