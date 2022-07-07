// import React from 'react'

// import { Typography } from '@mui/material';
import { Typography } from '@mui/material';
import Image from 'next/image';
import hero_image_3 from '../../public/home/hero_image_3.png';
const HeroSection = () => {
  return (
    <div className='relative flex flex-col items-center justify-center'>
      <div className='relative flex h-[20rem] flex-col items-center justify-center md:h-[25rem] '>
        <div className=' flex w-full items-center justify-center text-7xl font-black tracking-wider md:text-8xl'>
          <span
            data-aos='fade-up'
            data-aos-delay='50'
            // data-aos-easing='ease-out-back'
            data-aos-duration='1500'
            className='hero-fam bg-gradient-to-t from-pink-500 to-violet-500 bg-clip-text text-transparent '
          >
            C
          </span>
          <span
            data-aos='fade-up'
            data-aos-delay='100'
            // data-aos-easing='ease-out-back'
            data-aos-duration='1500'
            className='hero-fam  z-10 bg-gradient-to-tr from-pink-500 to-violet-500 bg-clip-text text-transparent'
          >
            e
          </span>
          <span
            data-aos='fade-up'
            data-aos-delay='150'
            // data-aos-easing='ease-out-back'
            data-aos-duration='1500'
            className='hero-fam z-10 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent'
          >
            l
          </span>
          <span
            data-aos='fade-up'
            data-aos-delay='200'
            // data-aos-easing='ease-out-back'
            data-aos-duration='1500'
            className='hero-fam bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent'
          >
            e
          </span>
          <span
            data-aos='fade-up'
            data-aos-delay='250'
            // data-aos-easing='ease-out-back'
            data-aos-duration='1500'
            className='hero-fam z-10 bg-gradient-to-b from-pink-500 to-violet-500 bg-clip-text text-transparent'
          >
            b
          </span>
          <span
            data-aos='fade-up'
            data-aos-delay='300'
            // data-aos-easing='ease-out-back'
            data-aos-duration='1500'
            className='hero-fam bg-gradient-to-bl from-pink-500 to-violet-500 bg-clip-text text-transparent'
          >
            r
          </span>
          <span
            data-aos='fade-up'
            data-aos-delay='350'
            // data-aos-easing='ease-out-back'
            data-aos-duration='1500'
            className='hero-fam z-10 bg-gradient-to-l from-pink-500 to-violet-500 bg-clip-text text-transparent'
          >
            a
          </span>
          <span
            data-aos='fade-up'
            data-aos-delay='400'
            // data-aos-easing='ease-out-back'
            data-aos-duration='1500'
            className='hero-fam z-10 bg-gradient-to-tl from-pink-500 to-violet-500 bg-clip-text text-transparent'
          >
            t
          </span>
          <span
            data-aos='fade-up'
            data-aos-delay='450'
            // data-aos-easing='ease-out-back'
            data-aos-duration='1500'
            className='hero-fam z-10 bg-gradient-to-t from-pink-500 to-violet-500 bg-clip-text text-transparent'
          >
            e
          </span>
        </div>
        <div className='flex text-7xl font-black tracking-wider md:text-8xl'>
          <span
            data-aos='fade-up'
            data-aos-delay='500'
            // data-aos-easing='ease-out-back'
            data-aos-duration='1500'
            className=' hero-fam bg-gradient-to-tl from-yellow-500 to-red-500 bg-clip-text text-transparent'
          >
            E
          </span>
          <span
            data-aos='fade-up'
            data-aos-delay='550'
            // data-aos-easing='ease-out-back'
            data-aos-duration='1500'
            className=' hero-fam bg-gradient-to-tl from-yellow-500 to-red-500 bg-clip-text text-transparent'
          >
            v
          </span>
          <span
            data-aos='fade-up'
            data-aos-delay='600'
            // data-aos-easing='ease-out-back'
            data-aos-duration='1500'
            className=' hero-fam bg-gradient-to-tl from-yellow-500 to-red-500 bg-clip-text text-transparent'
          >
            e
          </span>
          <span
            data-aos='fade-up'
            data-aos-delay='650'
            // data-aos-easing='ease-out-back'
            data-aos-duration='1500'
            className='hero-fam  z-10 bg-gradient-to-tl from-yellow-500 to-red-500 bg-clip-text text-transparent'
          >
            r
          </span>
          <span
            data-aos='fade-up'
            data-aos-delay='700'
            // data-aos-easing='ease-out-back'
            data-aos-duration='1500'
            className=' hero-fam bg-gradient-to-tl from-yellow-500 to-red-500 bg-clip-text text-transparent'
          >
            y
          </span>
          <span
            data-aos='fade-up'
            data-aos-delay='750'
            // data-aos-easing='ease-out-back'
            data-aos-duration='1500'
            className='hero-fam  z-10 bg-gradient-to-tl from-yellow-500 to-red-500 bg-clip-text text-transparent'
          >
            o
          </span>
          <span
            data-aos='fade-up'
            data-aos-delay='800'
            // data-aos-easing='ease-out-back'
            data-aos-duration='1500'
            className=' hero-fam bg-gradient-to-tl from-yellow-500 to-red-500 bg-clip-text text-transparent'
          >
            n
          </span>
          <span
            data-aos='fade-up'
            data-aos-delay='850'
            // data-aos-easing='ease-out-back'
            data-aos-duration='1500'
            className=' hero-fam bg-gradient-to-tl from-yellow-500 to-red-500 bg-clip-text text-transparent'
          >
            e
          </span>
        </div>
      </div>
      <div className='absolute inset-0 flex w-full justify-center '>
        <div
          data-aos='fade-down'
          // data-aos-easing='ease-out-back'
          data-aos-duration='1500'
          className='relative h-[20rem] w-[20rem] md:h-[25rem] md:w-[25rem]'
        >
          <Image
            layout='fill'
            objectFit='cover'
            src={hero_image_3}
            alt='Hero Image'
            placeholder='blur'
            // blurDataURL={hero_image}
          />
        </div>
      </div>
      <Typography className=' text-center font-fam3'>
        Show love to someone with an online card filled with messages, GIFs,
        photos & videos!
      </Typography>
    </div>
  );
};

export default HeroSection;
