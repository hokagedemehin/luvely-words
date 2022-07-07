// import React from 'react'

import { Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

const data = [
  {
    id: 0,
    name: 'Birthday',
    img: 'https://res.cloudinary.com/demibk/image/upload/v1656939087/lyvely/home/celebration9_uzkr6l.webp',
    link: '/samples',
  },
  {
    id: 1,
    name: 'Anniversary',
    img: 'https://res.cloudinary.com/demibk/image/upload/v1656939086/lyvely/home/celebration8_mi0d6c.jpg',
    link: '/samples',
  },
  {
    id: 2,
    name: 'Promotion',
    img: 'https://res.cloudinary.com/demibk/image/upload/v1656939086/lyvely/home/celebration1_joqb58.webp',
    link: '/samples',
  },
  {
    id: 3,
    name: 'Retirement',
    img: 'https://res.cloudinary.com/demibk/image/upload/v1656939085/lyvely/home/celebration4_nzytu0.webp',
    link: '/samples',
  },
  {
    id: 4,
    name: 'Farewell',
    img: 'https://res.cloudinary.com/demibk/image/upload/v1656939086/lyvely/home/celebration6_gg8g4b.jpg',
    link: '/samples',
  },
  {
    id: 5,
    name: 'Baby Shower',
    img: 'https://res.cloudinary.com/demibk/image/upload/v1656939086/lyvely/home/celebration5_jyaoru.jpg',
    link: '/samples',
  },
];

const CardSamples = () => {
  return (
    <div className='mx-4 pt-10 md:pt-16'>
      {/* heading */}
      <div className='space-y-3'>
        <Typography className='text-center font-fam3 text-2xl font-bold md:text-3xl'>
          Lyvely Cards for Birthdays, Anniversaries & More
        </Typography>
        <Typography className='text-center '>
          View some samples to get inspired
        </Typography>
      </div>
      {/* sections */}
      <div className='flex flex-wrap items-center justify-center gap-4 pt-5 md:pt-10'>
        {data.map((elem) => (
          <div
            data-aos='zoom-in'
            data-aos-duration='1500'
            data-aos-delay={elem?.id * 100}
            key={elem?.id}
            className='relative flex h-44 w-80 items-center rounded-lg  shadow-sm'
          >
            <div
              className='absolute inset-0 h-full w-full bg-black bg-white/30 backdrop-blur-xl'
              style={{
                background: `url(${elem?.img})`,
                // backgroundRepeat: 'repeat',
                backgroundSize: 'cover',
                // backgroundColor: 'black',
                // opacity: 0.6,
                zIndex: -1,
              }}
            ></div>
            <div className=' m-4  flex h-fit w-full flex-col items-center justify-center space-y-3 rounded-lg bg-white px-6 py-4 shadow-md'>
              <Typography className='text-center'>{elem?.name}</Typography>
              <LoadingButton
                // loading
                loadingIndicator='Loading...'
                variant='contained'
                size='small'
                // color='success'
                className='rounded-lg  px-6 capitalize'
              >
                View
              </LoadingButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSamples;
