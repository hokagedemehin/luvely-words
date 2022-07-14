// import React from 'react'

import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import mail_sent_5 from '../../public/verify/mail_sent_5.png';
const VerificationPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className='mx-2 flex h-screen flex-col items-center justify-center'>
        {/* image */}
        <div
          data-aos='fade-up'
          data-aos-duration='1500'
          className='relative h-44 w-44 md:h-80 md:w-80'
        >
          <Image
            src={mail_sent_5}
            objectFit='cover'
            layout='fill'
            alt='Verfication placeholder'
            placeholder='blur'
          />
        </div>
        {/* content */}
        <div
          data-aos='fade-up'
          data-aos-duration='1500'
          data-aos-delay='100'
          className='flex flex-col space-y-1 pt-4'
        >
          <Typography className='bg-gradient-to-r from-emerald-700 to-lime-300 bg-clip-text text-center text-xl font-black text-transparent md:text-3xl'>
            Email Sent ✔
          </Typography>

          <Typography className='text-center text-xs text-gray-400 md:text-base'>
            Please check your mailbox for the verification instructions
          </Typography>
        </div>

        {/* back to home button */}
        <div
          data-aos='fade-up'
          data-aos-duration='1500'
          data-aos-delay='150'
          className='mt-5'
        >
          <Button className='capitalize' onClick={() => router.push('/')}>
            Go back to Home page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
