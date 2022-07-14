// import React from 'react'
import { Avatar, Button, Drawer, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Layout from '../../components/skeleton/Layout';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';
import axios from 'axios';
import useSWR from 'swr';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import CakeIcon from '@mui/icons-material/Cake';
import EditIcon from '@mui/icons-material/Edit';
import EditDrawerComp from '../../components/profile/EditDrawer';

const qs = require('qs');

const ProfilePage = ({ profileData }) => {
  const { data: session } = useSession();
  const [profileInfo, setProfileInfo] = useState(null);
  // const [profileLoading, setProfileLoading] = useState(false);
  const [drawerState, setDrawerState] = useState(false);
  // console.log('drawerState :>> ', drawerState);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerState(open);
  };
  const query = qs.stringify(
    {
      filters: {
        email: {
          $eq: session?.user?.email,
        },
      },
      populate: '*',
    },
    {
      encodeValuesOnly: true,
    }
  );
  const fetcher = (url) =>
    axios.get(url).then((res) => {
      let newData = {
        id: res.data.data[0].id,
        ...res.data.data[0].attributes,
      };
      return newData;
    });
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-profiles?${query}` +
      session?.user?.email,
    fetcher,
    { fallbackData: profileData, refreshInterval: 1000 }
  );

  // console.log('session :>> ', session);
  // console.log('profileInfo', profileInfo);
  // const router = useRouter();
  // useEffect(() => {

  // }, [profileData]);

  // useLayoutEffect(() => {
  //   if (!session) {
  //     router.push('/');
  //   }
  // }, [session]);

  useEffect(() => {
    if (data) {
      setProfileInfo(data);
    }
  }, [session, data]);

  return (
    <div className='mx-4 '>
      <Layout>
        {profileInfo && (
          <div className='flex flex-col items-center justify-center pb-10'>
            {/* heading */}
            <div
              data-aos='fade-down'
              data-aos-duration='1500'
              className='pt-4 pb-10 text-center'
            >
              <Typography className='bg-gradient-to-r from-indigo-500 to-teal-500 bg-clip-text font-fam3 text-2xl font-black text-transparent md:text-4xl'>
                Profile Page
              </Typography>
            </div>
            <div className='relative'>
              {/* profile data */}
              <div
                data-aos='fade-up'
                data-aos-duration='1500'
                // data-aos-delay='100'
                className=' flex w-80 flex-col justify-center rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 px-4 py-6 shadow-md md:w-[26rem]'
              >
                {/* image */}
                <div className='flex w-full justify-center'>
                  {/* <div className='relative h-20 w-20 overflow-hidden rounded-full md:h-28 md:w-28'>
                  <Image
                    src={profileInfo?.imageURL}
                    // src={'/image'}
                    alt='name'
                    layout='fill'
                    objectFit='contain'
                  />
                </div> */}
                  <Avatar
                    className=' h-28 w-28 md:h-32 md:w-32'
                    alt={profileInfo?.fullName}
                    src={profileInfo?.imageURL}
                  />
                </div>
                {/* details */}
                <div className='flex flex-col space-y-4 py-5'>
                  {/* name */}
                  <div className='flex items-center space-x-4 text-4xl text-white'>
                    <PersonIcon className='text-3xl md:text-4xl' />
                    <div className='flex flex-col'>
                      <Typography className='font-fam4 text-lg font-bold tracking-widest md:text-2xl '>
                        Name
                      </Typography>
                      <Typography className='font-fam4 text-base font-semibold tracking-wider md:text-xl '>
                        {!profileInfo?.fullName ? '-' : profileInfo?.fullName}
                      </Typography>{' '}
                    </div>
                  </div>
                  {/* email */}
                  <div className='flex items-center space-x-4 text-4xl text-white'>
                    <EmailIcon className='text-3xl md:text-4xl' />
                    <div className='flex flex-col'>
                      <Typography className='font-fam4 text-lg font-bold tracking-widest md:text-2xl '>
                        Email
                      </Typography>
                      <Typography className='font-fam4 text-base font-semibold tracking-wider md:text-xl '>
                        {!profileInfo?.email ? '-' : profileInfo?.email}
                      </Typography>{' '}
                    </div>
                  </div>
                  {/* Phone No */}
                  <div className='flex items-center space-x-4 text-4xl text-white'>
                    <PhoneIcon className='text-3xl md:text-4xl' />
                    <div className='flex flex-col'>
                      <Typography className='font-fam4 text-lg font-bold tracking-widest md:text-2xl '>
                        Mobile
                      </Typography>
                      <Typography className='font-fam4 text-base font-semibold tracking-wider md:text-xl '>
                        {!profileInfo?.phoneNo ? '-' : profileInfo?.phoneNo}
                      </Typography>{' '}
                    </div>
                  </div>
                  {/* birthday */}
                  <div className='flex items-center space-x-4 text-4xl text-white'>
                    <CakeIcon className='text-3xl md:text-4xl' />
                    <div className='flex flex-col'>
                      <Typography className='font-fam4 text-lg font-bold tracking-widest md:text-2xl '>
                        Birthday
                      </Typography>
                      <Typography className='font-fam4 text-base font-semibold tracking-wider md:text-xl '>
                        {!profileInfo?.birthDay ? '-' : profileInfo?.birthDay}
                      </Typography>{' '}
                    </div>
                  </div>
                </div>
              </div>
              {/* background boxes */}

              {/* box-1 */}
              <div
                data-aos='fade-up'
                data-aos-duration='1500'
                // data-aos-delay='100'
                className='absolute inset-x-0 bottom-0 -z-10 flex h-full w-full justify-center'
              >
                <div className='h-full w-[95%] translate-y-3 rounded-lg bg-gradient-to-r from-pink-500 to-violet-500 shadow-md'></div>
              </div>

              {/* box-2 */}
              <div
                data-aos='fade-up'
                data-aos-duration='1500'
                data-aos-delay='200'
                className='absolute inset-x-0 bottom-0 -z-20 flex h-full w-full justify-center '
              >
                <div className='h-full w-[90%] translate-y-6 rounded-lg bg-gradient-to-r from-pink-500 to-violet-500 shadow-md'></div>
              </div>
              {/* box-3 */}
              <div
                data-aos='fade-up'
                data-aos-duration='1500'
                data-aos-delay='300'
                className='absolute inset-x-0 bottom-0 -z-30 flex h-full w-full justify-center '
              >
                <div className='h-full w-[85%] translate-y-9 rounded-lg bg-gradient-to-r from-pink-500 to-violet-500 shadow-md'></div>
              </div>
            </div>
            {/* edit button */}
            <div
              data-aos='fade-up'
              data-aos-duration='1500'
              data-aos-delay='500'
              className='mt-20'
            >
              <Button
                // loading={profileLoading}
                // loadingPosition='end'
                endIcon={<EditIcon />}
                variant='outlined'
                onClick={toggleDrawer(true)}
              >
                Update Profile
              </Button>
            </div>
          </div>
        )}
        <Drawer anchor='right' open={drawerState} onClose={toggleDrawer(false)}>
          <EditDrawerComp
            profileInfo={profileInfo}
            toggleDrawer={toggleDrawer}
            setDrawerState={setDrawerState}
          />
        </Drawer>
      </Layout>
    </div>
  );
};

export default ProfilePage;

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  const query = qs.stringify(
    {
      filters: {
        email: {
          $eq: session?.user?.email,
        },
      },
      populate: '*',
    },
    {
      encodeValuesOnly: true,
    }
  );

  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-profiles?${query}`
  );
  let newData = {
    id: data.data[0].id,
    ...data.data[0].attributes,
  };
  return {
    props: {
      profileData: newData,
    },
  };
}
