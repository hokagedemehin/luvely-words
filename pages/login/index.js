import { Button, Divider, TextField, Typography } from '@mui/material';
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

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const LoginPage = ({ providers, csrfToken }) => {
  const router = useRouter();
  const { data: session } = useSession();
  // console.log('router =>', router);
  // const [inputEmail, setInputEmail] = useState('');
  // const [isLoading, setIsLoading] = useState(false);

  // const handleChange = (e) => {
  //   setInputEmail(e.target.value);
  // };

  // const handleSubmit = () => {
  //   setIsLoading(true);
  // };
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

  const errorName = Object.keys(errors).filter((key) => key.includes(getError));

  // console.log('errorName :>> ', errorName);

  // let finalError;
  // if (errorName?.length !== 0) {
  //   finalError = errorName.reduce((obj, key) => {
  //     return Object.assign(obj, { [key]: errors[key] });
  //   });
  // }

  // const handleOpen = () => {
  //   setOpen(true);
  // };

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
      <Typography className='py-10 text-4xl font-bold'>Sign In Page</Typography>
      <div className='flex w-fit flex-col items-center justify-center space-y-4 rounded-xl border border-solid border-gray-200 px-8 py-6 shadow-md'>
        {providers?.email && (
          <div>
            <form
              method='post'
              action='/api/auth/signin/email'
              className='flex flex-col space-y-3'
            >
              <input name='csrfToken' type='hidden' defaultValue={csrfToken} />

              <TextField
                id='email'
                type='email'
                name='email'
                label='Email Address'
                variant='outlined'
                size='small'
                // value={inputEmail}
                // onChange={handleChange}
              />

              <LoadingButton
                // loading={isLoading}
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
          <div className='w-full'>
            <Button
              variant='outlined'
              onClick={() => signIn(providers?.github?.id)}
              className=' w-full border border-solid border-black capitalize text-black'
              startIcon={<GitHubIcon />}
            >
              Sign in with {providers?.github?.id}
            </Button>
          </div>
        )}
        {providers?.google && (
          <div className='w-full'>
            <Button
              variant='outlined'
              onClick={() => signIn(providers?.google?.id)}
              className=' w-full border border-solid border-[#d62d20] capitalize text-[#d62d20]'
              startIcon={<GoogleIcon />}
            >
              Sign in with {providers?.google?.id}
            </Button>
          </div>
        )}
        {providers?.facebook && (
          <div className='w-full'>
            <Button
              variant='outlined'
              onClick={() => signIn(providers?.facebook?.id)}
              className=' w-full border border-solid border-[#3b5998] capitalize text-[#3b5998] '
              startIcon={<FacebookIcon />}
            >
              Sign in with {providers?.facebook?.id}
            </Button>
          </div>
        )}
        {providers?.twitter && (
          <div className='w-full'>
            <Button
              variant='outlined'
              onClick={() => signIn(providers?.twitter?.id)}
              className=' w-full border border-solid border-[#1D9BF0] capitalize text-[#1D9BF0] '
              startIcon={<TwitterIcon />}
            >
              Sign in with {providers?.twitter?.id}
            </Button>
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
