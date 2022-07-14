import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import CakeIcon from '@mui/icons-material/Cake';
import {
  Avatar,
  // Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import CropDialogPage from '../crop/CropDialog';
import CropIcon from '@mui/icons-material/Crop';

const EditDrawerComp = ({ profileInfo, setDrawerState }) => {
  const [formValue, setFormValue] = useState({
    id: profileInfo?.id,
    fullName: profileInfo?.fullName,
    phoneNo: profileInfo?.phoneNo,
    birthDay: profileInfo?.birthDay,
    imageURL: profileInfo?.imageURL,
  });
  const [imageValue, setImageValue] = useState(null);
  const [photo, setPhoto] = useState(profileInfo?.imageURL);
  const [open, setOpen] = useState(false);
  const [profileLoading, setProfileLoading] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  // console.log('formValue', formValue);
  // console.log('imageValue', imageValue);
  // console.log('photo', photo);

  const handleImage = (e) => {
    if (e.target.files[0]) {
      setImageValue(e.target.files[0]);
      setPhoto(URL.createObjectURL(e.target.files[0]));
      handleClickOpen();
    } else {
      setImageValue(null);
      setPhoto(null);
    }
  };

  const handleSubmit = async (event, formValue, imageValue) => {
    setProfileLoading(true);
    if (imageValue) {
      let formData = new FormData();
      formData.append('file', imageValue);
      formData.append('upload_preset', 'luvely-preset');
      let response = await axios.post(
        'https://api.cloudinary.com/v1_1/luvely/image/upload',
        formData
        // { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      formValue.imageURL = response?.data?.secure_url;
    }

    await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-profiles/${formValue?.id}`,
      {
        data: {
          fullName: formValue?.fullName,
          phoneNo: formValue?.phoneNo,
          birthDay: formValue?.birthDay,
          imageURL: formValue?.imageURL,
        },
      }
    );

    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerState(false);
    // console.log('submitted');
  };
  return (
    <>
      <div className=' h-full'>
        <div className='flex w-full justify-end'>
          <IconButton
            aria-label='close drawer'
            component='span'
            className='mx-2 transition duration-300 hover:rotate-180'
          >
            <CloseIcon onClick={() => setDrawerState(false)} />
          </IconButton>
        </div>
        <div className='mx-4'>
          <form action='' className='space-y-8 pt-10'>
            {/* image */}
            <div className='flex items-center space-x-3'>
              <Avatar
                className=' h-20 w-20'
                alt={formValue?.fullName}
                src={photo ?? formValue?.imageURL}
              />

              <div className='flex flex-col space-y-2'>
                <div className='flex space-x-1'>
                  <IconButton
                    color='primary'
                    aria-label='upload picture'
                    component='label'
                    className='h-fit w-fit'
                    onChange={(e) => handleImage(e)}
                  >
                    <input hidden accept='image/*' type='file' />
                    <PhotoCamera />
                  </IconButton>
                  {imageValue && (
                    <IconButton
                      color='primary'
                      aria-label='crop picture'
                      // component='label'
                      className='h-fit w-fit'
                      onClick={handleClickOpen}
                    >
                      <CropIcon />
                    </IconButton>
                  )}
                </div>
                <Typography className='text-sm'>{imageValue?.name}</Typography>
              </div>
            </div>
            {/* name */}
            <div className=''>
              <TextField
                id='fullName'
                label='Full Name'
                name='fullName'
                value={formValue?.fullName}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            {/* Phone No */}
            <div className=''>
              <TextField
                id='phoneNo'
                label='Mobile'
                name='phoneNo'
                value={formValue?.phoneNo}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            {/* birthday */}
            <div className=''>
              <TextField
                id='birthDay'
                label='Birth Day'
                name='birthDay'
                value={formValue?.birthDay}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <CakeIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </form>
        </div>
        <div className='mt-10 flex w-full justify-end'>
          <LoadingButton
            className='mx-4 w-full'
            variant='outlined'
            color='success'
            loading={profileLoading}
            loadingPosition='end'
            endIcon={<SendIcon />}
            onClick={(e) => handleSubmit(e, formValue, imageValue)}
            onKeyDown={(e) => handleSubmit(e, formValue, imageValue)}
          >
            Change
          </LoadingButton>
        </div>
      </div>
      <CropDialogPage
        open={open}
        setOpen={setOpen}
        imageURL={photo}
        imageValue={imageValue}
        setImageValue={setImageValue}
        setPhoto={setPhoto}
      />
    </>
  );
};

export default EditDrawerComp;
