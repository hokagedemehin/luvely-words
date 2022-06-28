// import React, { useState } from 'react';
import { Typography } from '@mui/material';
import Slider from '@mui/material/Slider';
const TestComponent = () => {
  // const [first, setFirst] = useState('')
  return (
    <div>
      <Slider defaultValue={30} />
      <Slider defaultValue={30} className='text-teal-600' />
      <Typography className='p-4 border bg-orange-500 text-white text-xl rounded-lg shadow-sm shadow-gray-500'>
        tailwindcss + material-ui
      </Typography>
    </div>
  );
};

export default TestComponent;
