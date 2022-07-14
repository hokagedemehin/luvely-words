import {
  SiNextdotjs,
  SiVercel,
  SiInstagram,
  SiTwitter,
  SiLinkedin,
  SiGithub,
} from 'react-icons/si';
import { GrAdd } from 'react-icons/gr';
import { Divider } from '@mui/material';
const Footer = () => {
  const year = new Date();
  return (
    <div className=''>
      <div className='bg-white pt-4 sm:pt-10 lg:pt-12'>
        <Divider className='bg-gray-50' />
        <footer className='px-4 md:px-8'>
          <div className=' mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-4 border-t border-b py-6 md:flex-row'>
            {/* <!-- nav - start --> */}
            <nav className='flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6'>
              <a
                href='#'
                className='text-gray-500 transition duration-300 hover:-translate-y-1 hover:text-sky-500 active:text-sky-600'
              >
                Home
              </a>
              <a
                href='#cardWorks'
                className='text-gray-500 transition duration-300 hover:-translate-y-1 hover:text-sky-500 active:text-sky-600'
              >
                Process
              </a>
              <a
                href='#contribute'
                className='text-gray-500 transition duration-300 hover:-translate-y-1 hover:text-sky-500 active:text-sky-600'
              >
                Samples
              </a>
              <a
                href='#'
                className='text-gray-500 transition duration-300 hover:-translate-y-1 hover:text-sky-500 active:text-sky-600'
              >
                Sponsor
              </a>
            </nav>
            {/* <!-- nav - end --> */}

            {/* <!-- social - start --> */}
            <div className='flex items-center justify-center gap-4'>
              <a
                href='#'
                target='_blank'
                className='text-xl text-gray-400 transition duration-300 hover:-translate-y-1 hover:text-gray-500 active:text-gray-600'
              >
                <SiInstagram />
              </a>

              <a
                href='#'
                target='_blank'
                className='text-xl text-gray-400 transition duration-300 hover:-translate-y-1 hover:text-gray-500 active:text-gray-600'
              >
                <SiTwitter />
              </a>

              <a
                href='#'
                target='_blank'
                className='text-xl text-gray-400 transition duration-300 hover:-translate-y-1 hover:text-gray-500 active:text-gray-600'
              >
                <SiLinkedin />
              </a>

              <a
                href='#'
                target='_blank'
                className='text-xl text-gray-400 transition duration-300 hover:-translate-y-1 hover:text-gray-500 active:text-gray-600'
              >
                <SiGithub />
              </a>
            </div>
            {/* <!-- social - end --> */}
          </div>

          <div className='py-2 text-center text-sm text-gray-400'>
            © {year.getFullYear()} - Luvely Words. All rights reserved.
          </div>
        </footer>
      </div>
      <div className='flex items-center justify-center space-x-2 bg-gray-100 py-2'>
        <p className='text-gray-500'>Powered by </p>
        <a
          href='https://nextjs.org/learn/foundations/about-nextjs?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=next-website'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center justify-center space-x-1'
        >
          <SiNextdotjs /> <span>Next.js</span>
        </a>
        <GrAdd />
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          className='flex items-center justify-center space-x-1'
          rel='noopener noreferrer'
        >
          <SiVercel /> <span>Vercel</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
