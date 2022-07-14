// import React from 'react'

import { Button } from '@mui/material';
import Image from 'next/image';
// import { useRouter } from 'next/router';
import sponsor_2 from '../../public/home/sponsor_2.png';
const SponsorPage = () => {
  // const router = useRouter();
  return (
    <div data-aos='flip-up' data-aos-duration='1500'>
      <div className='bg-white'>
        <div className='mx-auto max-w-4xl '>
          <div className='flex flex-col overflow-hidden rounded-lg border border-solid border-gray-300  md:h-80 md:flex-row'>
            {/* <!-- content - start --> */}
            <div className='flex w-full flex-col bg-gray-900 p-4 md:w-1/2 md:p-6 '>
              <h2 className='mb-2 text-xl font-bold text-white md:text-2xl lg:text-4xl'>
                Feel Like Supporting
                <br />
                This Project
              </h2>

              <p className='mb-4 max-w-md text-gray-400'>
                Some of the resources used for this solution cost money. Help
                keep the project open with your contributions.
              </p>

              <div className='mt-auto'>
                {/* <a
                  href='#'
                  className='inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base'
                >
                  Sponsor
                </a> */}
                <Button
                  variant='contained'
                  className='bg-white py-2 px-8 text-lg normal-case text-black transition duration-100 hover:-translate-y-1 hover:bg-gray-100 hover:shadow-md'
                  // onClick={() =>
                  //   router.push('https://www.buymeacoffee.com/ibk2k7i')
                  // }
                  onClick={() =>
                    window.open(
                      'https://www.buymeacoffee.com/ibk2k7i',
                      '_blank'
                    )
                  }
                >
                  Sponsor
                </Button>
              </div>
            </div>
            {/* <!-- content - end --> */}

            {/* <!-- image - start --> */}
            <div className='order-first h-48 w-full bg-white md:order-none md:h-auto md:w-1/2 '>
              <div className='relative block h-full w-full md:hidden md:h-80'>
                {/* small screens */}
                <Image
                  layout='fill'
                  src={sponsor_2}
                  alt='Sponsor The Project'
                  placeholder='blur'
                  objectFit='contain'
                />
              </div>
              <div className='relative hidden h-full w-full md:block md:h-80'>
                {/* large screens */}
                <Image
                  layout='fill'
                  src={sponsor_2}
                  alt='Sponsor The Project'
                  placeholder='blur'
                  objectFit='contain'
                />
              </div>
            </div>
            {/* <!-- image - end --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorPage;
