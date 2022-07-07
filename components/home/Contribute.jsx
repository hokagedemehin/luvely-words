// import React from 'react'

import { Button, Typography } from '@mui/material';

const Contribute = () => {
  return (
    <div className='mx-4 space-y-2 rounded-xl border border-solid border-gray-200 px-4 py-4 shadow-md'>
      <Typography className='text-center text-xl font-bold md:text-2xl'>
        Feel Like Supporting This Project
      </Typography>
      <Typography className='text-center text-xs text-gray-400 md:text-sm'>
        Some of the resources used for this project cost money. Help keep the
        project open-sourced with your contributions
      </Typography>
      <div className='flex justify-center pt-5'>
        <Button
          variant='outlined'
          className='px-6 transition duration-100 hover:-translate-y-1 hover:shadow-md'
        >
          Sponsor
        </Button>
      </div>
    </div>
  );
};

export default Contribute;
