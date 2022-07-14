import { Divider, TextField, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  getCsrfToken,
  getProviders,
  signIn,
  useSession,
} from 'next-auth/react';
import { useRouter } from 'next/router';
import { forwardRef, useEffect, useState } from 'react';
import { authOptions } from '../api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth/next';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Image from 'next/image';
import luvely_words_2 from '../../public/home/luvely_words_2.png';
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const LoginPage = ({ providers, csrfToken }) => {
  const router = useRouter();
  const { data: session } = useSession();
  // console.log('router =>', router);
  // const [inputEmail, setInputEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [gitHubLoading, setGitHubLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [facebookLoading, setFacebookLoading] = useState(false);
  const [twitterLoading, setTwitterLoading] = useState(false);

  const handleSignIn = (provider) => {
    signIn(provider);
    if (provider === 'google') {
      setGoogleLoading(true);
    } else if (provider === 'facebook') {
      setFacebookLoading(true);
    } else if (provider === 'twitter') {
      setTwitterLoading(true);
    } else {
      setGitHubLoading(true);
    }
  };

  const handleSubmit = () => {
    setIsLoading(true);
  };
  const [open, setOpen] = useState(false);

  const errors = {
    // Signin: 'Try signing with a different account.',
    OAuthSignin: 'Try again with a different account.',
    OAuthCallback: 'Issues with this provider. Try another one',
    OAuthCreateAccount: 'Error create a new account. Try another one',
    EmailCreateAccount: 'Error verifying a new account. Try another one',
    Callback: 'Please try again',
    OAuthAccountNotLinked: 'Account already linked to a different provider',
    EmailSignin: 'Error with the Email account',
    CredentialsSignin:
      'Sign in failed. Check the details you provided are correct.',
    SessionRequired: 'No Session is found',
    Default: 'Unable to sign in.',
  };

  const getError = router?.query?.error;

  useEffect(() => {
    if (router?.query?.error) {
      setOpen(true);
    }
  }, [router]);

  const errorName = Object.keys(errors).filter((key) => key == getError);

  // console.log('errorName :>> ', errorName);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  // console.log('session', session);
  // console.log('providers', providers);

  useEffect(() => {
    if (session) {
      router.push('/');
    }
  }, [session]);

  return (
    <div className='flex flex-col items-center justify-center gap-6'>
      {errorName && (
        <Snackbar
          open={open}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
            {errors[errorName]}
          </Alert>
        </Snackbar>
      )}
      <Typography
        data-aos='fade-down'
        data-aos-duration='1500'
        className='bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text py-10 text-4xl font-black text-transparent'
      >
        Sign In Page
      </Typography>
      <div className='flex w-fit flex-col items-center justify-center space-y-4 rounded-xl border border-solid border-gray-200 px-8 py-6 shadow-md'>
        <div
          data-aos='fade-up'
          data-aos-duration='1500'
          data-aos-delay='100'
          className='relative h-14 w-60 md:h-20 md:w-80'
        >
          <Image
            src={luvely_words_2}
            alt='Lovely Words Logo'
            layout='fill'
            placeholder='blur'
          />
        </div>
        {providers?.email && (
          <div data-aos='zoom-in' data-aos-duration='1500' className='w-full'>
            <form
              method='post'
              action='/api/auth/signin/email'
              className='flex flex-col space-y-3'
              onSubmit={handleSubmit}
            >
              <input name='csrfToken' type='hidden' defaultValue={csrfToken} />

              <TextField
                id='email'
                type='email'
                name='email'
                label='Email Address'
                variant='outlined'
                size='small'
                required
                // value={inputEmail}
                // onChange={handleChange}
              />

              <LoadingButton
                loading={isLoading}
                loadingIndicator='loading...'
                type='submit'
                // onClick={handleSubmit}
                variant='contained'
                startIcon={<AlternateEmailIcon />}
                className='capitalize'
              >
                Sign in with Email
              </LoadingButton>
            </form>
            <Divider className='pt-4'>
              <Typography className='font-bold text-gray-400'>Or</Typography>
            </Divider>
          </div>
        )}
        {providers?.github && (
          <div
            data-aos='zoom-in'
            data-aos-duration='1500'
            data-aos-delay='100'
            className='w-full'
          >
            <LoadingButton
              variant='outlined'
              onClick={() => handleSignIn(providers?.github?.id)}
              loading={gitHubLoading}
              loadingPosition='start'
              className=' w-full border border-solid border-black capitalize text-black'
              startIcon={<GitHubIcon />}
            >
              Sign in with {providers?.github?.id}
            </LoadingButton>
          </div>
        )}
        {providers?.google && (
          <div
            data-aos='zoom-in'
            data-aos-duration='1500'
            data-aos-delay='150'
            className='w-full'
          >
            <LoadingButton
              variant='outlined'
              onClick={() => handleSignIn(providers?.google?.id)}
              loading={googleLoading}
              loadingPosition='start'
              className=' w-full border border-solid border-[#d62d20] capitalize text-[#d62d20]'
              startIcon={<GoogleIcon />}
            >
              Sign in with {providers?.google?.id}
            </LoadingButton>
          </div>
        )}
        {providers?.facebook && (
          <div
            data-aos='zoom-in'
            data-aos-duration='1500'
            data-aos-delay='200'
            className='w-full'
          >
            <LoadingButton
              variant='outlined'
              onClick={() => handleSignIn(providers?.facebook?.id)}
              loading={facebookLoading}
              loadingPosition='start'
              className=' w-full border border-solid border-[#3b5998] capitalize text-[#3b5998] '
              startIcon={<FacebookIcon />}
            >
              Sign in with {providers?.facebook?.id}
            </LoadingButton>
          </div>
        )}
        {providers?.twitter && (
          <div
            data-aos='zoom-in'
            data-aos-duration='1500'
            data-aos-delay='250'
            className='w-full'
          >
            <LoadingButton
              variant='outlined'
              onClick={() => handleSignIn(providers?.twitter?.id)}
              className=' w-full border border-solid border-[#1D9BF0] capitalize text-[#1D9BF0] '
              loading={twitterLoading}
              loadingPosition='start'
              startIcon={<TwitterIcon />}
            >
              Sign in with {providers?.twitter?.id}
            </LoadingButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: { providers, session, csrfToken },
  };
}

/**
 * {Object.values(providers).map((provider) => {
          if (provider?.name == 'Email') {
            return (
              <div key={provider.name}>
                <form
                  method='post'
                  action='/api/auth/signin/email'
                  className='flex flex-col space-y-3'
                >
                  <input
                    name='csrfToken'
                    type='hidden'
                    defaultValue={csrfToken}
                  />

                  <TextField
                    id='email'
                    type='email'
                    label='Email Address'
                    variant='outlined'
                    size='small'
                    value={inputEmail}
                    onChange={handleChange}
                  />

                  <LoadingButton
                    loading={isLoading}
                    loadingIndicator='loading...'
                    type='submit'
                    onClick={handleSubmit}
                    variant='contained'
                  >
                    Sign in with Email
                  </LoadingButton>
                </form>
                
              </div>
            );
          } else {
            return (
              <div key={provider.name}>
                <Button variant='outlined' onClick={() => signIn(provider.id)}>
                  Sign in with {provider.name}
                </Button>
                <Divider className='pt-4'>
                  <Typography className='font-bold text-gray-400'>
                    Or
                  </Typography>
                </Divider>
              </div>
            );
          }
        })}
 */
