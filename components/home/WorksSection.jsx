// import React from 'react'

import { Typography } from '@mui/material';
import Image from 'next/image';
import create from '../../public/home/create.png';
import invite from '../../public/home/invite.png';
import deliver from '../../public/home/deliver.png';
import LoadingButton from '@mui/lab/LoadingButton';
import 'animate.css';

const WorksSection = () => {
  return (
    <div className='mx-4'>
      <div className='space-y-8'>
        {/* heading */}
        <div className='py-10 md:pt-20 md:pb-10'>
          <Typography className='text-center font-fam4 text-4xl font-bold'>
            How The Cards Works
          </Typography>
        </div>
        {/* create */}
        <div className='transtion flex flex-col items-center justify-center rounded-xl bg-white p-4 shadow-md duration-300 hover:-translate-y-3 hover:shadow-gray-400 md:flex-row md:justify-between'>
          <div
            data-aos='fade-down'
            // data-aos-easing='ease-out-back'
            data-aos-duration='1500'
            className='space-y-1 md:w-1/2 md:space-y-3'
          >
            <Typography className='text-center text-2xl font-bold md:text-left md:text-3xl'>
              Create a Luvely Card
            </Typography>
            <Typography className='text-center text-sm text-gray-500 md:text-left md:text-base'>
              Start a digital group card for someone and add messages, voice
              notes and photos
            </Typography>
          </div>
          <div
            data-aos='fade-up'
            // data-aos-easing='ease-out-back'
            data-aos-duration='1500'
            data-aos-delay='100'
            className='relative h-[14rem] w-[18rem] md:h-[20rem] md:w-[25rem]'
          >
            <Image
              src={create}
              alt='Create section'
              objectFit='contain'
              layout='fill'
              placeholder='blur'
            />
          </div>
        </div>

        {/* invite */}
        <div className='transtion flex flex-col items-center justify-center rounded-xl bg-white p-4 shadow-md duration-300 hover:-translate-y-3 hover:shadow-gray-400 md:flex-row md:justify-between'>
          <div
            data-aos='fade-down'
            // data-aos-easing='ease-out-back'
            data-aos-duration='1500'
            className='relative h-[14rem] w-[18rem] md:h-[20rem] md:w-[25rem]'
          >
            <Image
              src={invite}
              alt='invite section'
              objectFit='contain'
              layout='fill'
              placeholder='blur'
            />
          </div>
          <div
            data-aos='fade-up'
            // data-aos-easing='ease-out-back'
            data-aos-duration='1500'
            data-aos-delay='100'
            className='space-y-1 md:w-1/2 md:space-y-3'
          >
            <Typography className='text-center text-2xl font-bold md:text-left md:text-3xl'>
              Share the card
            </Typography>
            <Typography className='text-center text-sm text-gray-500 md:text-left md:text-base'>
              Invite others to add thier contributions and watch the luvely card
              grow.
            </Typography>
          </div>
        </div>

        {/* deliver */}
        <div className='transtion flex flex-col items-center justify-center rounded-xl bg-white p-4 shadow-md duration-300 hover:-translate-y-3 hover:shadow-gray-400 md:flex-row md:justify-between'>
          <div
            data-aos='fade-down'
            // data-aos-easing='ease-out-back'
            data-aos-duration='1500'
            className='space-y-1 md:w-1/2 md:space-y-3'
          >
            <Typography className='text-center text-2xl font-bold md:text-left md:text-3xl'>
              Deliver the Luvely Card
            </Typography>
            <Typography className='text-center text-sm text-gray-500 md:text-left md:text-base'>
              Deliver the card online to the celebrant and play it as a
              slideshow. See the content on any device
            </Typography>
          </div>
          <div
            data-aos='fade-up'
            // data-aos-easing='ease-out-back'
            data-aos-duration='1500'
            data-aos-delay='100'
            className='relative h-[14rem] w-[18rem] md:h-[20rem] md:w-[25rem]'
          >
            <Image
              src={deliver}
              alt='deliver section'
              objectFit='cover'
              layout='fill'
              placeholder='blur'
            />
          </div>
        </div>
      </div>
      {/* button */}
      <div className='flex justify-center pt-5  md:pt-10'>
        <LoadingButton
          // loading
          loadingIndicator='Loading...'
          variant='contained'
          className='rounded-lg px-6 capitalize'
        >
          Create card
        </LoadingButton>
      </div>
    </div>
  );
};

export default WorksSection;
