// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
// import TestComponent from '../components/test';
// import Header from '../components/skeleton/Header';
import Layout from '../components/skeleton/Layout';
import HeroSection from '../components/home/hero';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WorksSection from '../components/home/WorksSection';
import CardSamples from '../components/home/Samples';
// import Contribute from '../components/home/Contribute';
import Sponsor from '../components/home/Sponsor';

export default function Home() {
  let boxRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, { rotation: '360' });
    AOS.init({
      easing: 'ease-out-back',
    });
  }, []);

  return (
    <div className=''>
      <Layout>
        {/* <TestComponent /> */}
        <HeroSection />
        <div className='my-5 bg-gray-50 pb-5' id='cardWorks'>
          <WorksSection />
        </div>
        <div className='' id='cardSamples'>
          <CardSamples />
        </div>

        {/* <div className='mx-auto max-w-lg py-6 md:py-10' id='contribute'>
          <Contribute />
        </div> */}
        <div className='mx-4 my-6 md:my-10' id='contribute'>
          <Sponsor />
        </div>
      </Layout>
    </div>
  );
}
