// import React from 'react'

import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import error_1 from '../../public/error/error_1.png';
const ErrorPage = () => {
  const possibleErrors = [
    {
      id: 0,
      name: 'Configuration',

      heading: 'Something is Wrong',
      desc: 'There seem to be some malfunction somewhere, please try again later',
      link: '/',
      btnName: 'Homepage',
    },
    {
      id: 1,
      name: 'AccessDenied',

      heading: 'No Permission Granted',
      desc: "You can't have access to this page. Please go back to the homepage",
      link: '/',
      btnName: 'Homepage',
    },
    {
      id: 2,
      name: 'Verification',

      heading: 'Unable to Sign In',
      desc: 'The link is no longer valid. It may have been used already or it may have expired.',
      link: '/login',
      btnName: 'Sign In',
    },
    {
      id: 3,
      name: 'Default',

      heading: 'Something is Broken',
      desc: 'If you are seeing this, then something is broken. Please go back to the homepage',
      link: '/',
      btnName: 'Homepage',
    },
  ];
  const router = useRouter();
  console.log('router :>> ', router);
  const getErrorName = router?.query?.error;
  const foundError = possibleErrors.filter(
    (object) => object.name == getErrorName
  );
  console.log('foundError', foundError);
  return (
    <div className='mx-4'>
      {foundError && (
        <div className='mx-2 flex h-screen flex-col items-center justify-center'>
          {/* image */}
          <div
            data-aos='flip-up'
            data-aos-duration='1500'
            className='relative h-44 w-44 md:h-80 md:w-80'
          >
            <Image
              src={error_1}
              objectFit='cover'
              layout='fill'
              alt={foundError[0]?.name}
              placeholder='blur'
            />
          </div>
          {/* content */}
          <div
            data-aos='flip-left'
            data-aos-duration='1500'
            data-aos-delay='100'
            className='flex flex-col space-y-1'
          >
            <Typography className='bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-center text-xl font-black text-transparent md:text-3xl'>
              {foundError[0]?.heading}
            </Typography>

            <Typography className='text-center text-xs text-gray-400 md:text-base'>
              {foundError[0]?.desc}
            </Typography>
          </div>

          {/* back to home button */}
          <div
            data-aos='fade-up'
            data-aos-duration='1500'
            data-aos-delay='150'
            className='mt-5'
          >
            <Button
              className='capitalize'
              variant='outlined'
              // color='error'
              onClick={() => router.push(`${foundError[0]?.link}`)}
            >
              {foundError[0]?.btnName}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
