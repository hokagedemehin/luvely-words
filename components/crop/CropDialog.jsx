import { useCallback, useState } from 'react';
// import ReactDOM from 'react-dom';
import Cropper from 'react-easy-crop';

// import { withStyles } from '@material-ui/core/styles';
// import ImgDialog from './ImgDialog';
import getCroppedImg from './cropImage';
// import { styles } from './styles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slider,
  Typography,
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import CropIcon from '@mui/icons-material/Crop';

const CropDialogPage = ({
  open,
  setOpen,
  imageURL,
  // imageValue,
  setImageValue,
  setPhoto,
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  // const [croppedImage, setCroppedImage] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageURL,
        croppedAreaPixels,
        rotation
      );
      // console.log('donee', { croppedImage });
      setImageValue(croppedImage?.file);
      setPhoto(croppedImage?.url);
      // setCroppedImage(croppedImage);
      handleClose();
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation]);

  const onClose = () => {
    // setCroppedImage(null);
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby='crop-dialog-title'
        aria-describedby='crop-dialog-description'
        sx={
          {
            // background: '#333',
            // position: 'relative',
            // height: 400,
            // width: '100%',
            // minWidth: { sm: 500 },
          }
        }
      >
        <DialogTitle id='crop-dialog-title'>Crop Image</DialogTitle>
        <DialogContent
          dividers
          className='relative h-[18rem] w-[18rem] min-w-fit bg-[#333] sm:h-[25rem] sm:w-[25rem] md:h-[35rem] md:w-[35rem]'
          sx={
            {
              // background: '#333',
              // position: 'relative',
              // height: 300,
              // width: '100%',
              // minWidth: { xs: 200 },
            }
          }
        >
          <Cropper
            image={imageURL}
            crop={crop}
            rotation={rotation}
            zoom={zoom}
            // aspect={4 / 3}
            aspect={1}
            onCropChange={setCrop}
            onRotationChange={setRotation}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </DialogContent>
        <DialogActions className='flex flex-col space-y-1'>
          <div className='flex w-full flex-col'>
            <div className='flex w-full space-x-2'>
              <Typography
                variant='overline'
                // classes={{ root: classes.sliderLabel }}
              >
                Zoom
              </Typography>
              <Slider
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-labelledby='Zoom'
                valueLabelDisplay='auto'
                size='small'
                // valueLabelFormat={Math.round(zoom * 100)}
                // classes={{ root: classes.slider }}
                onChange={(e, zoom) => setZoom(zoom)}
              />
            </div>
            <div className='flex w-full space-x-2'>
              <Typography
                variant='overline'
                // classes={{ root: classes.sliderLabel }}
              >
                Rotation
              </Typography>
              <Slider
                value={rotation}
                min={0}
                max={360}
                step={1}
                aria-labelledby='Rotation'
                valueLabelDisplay='auto'
                size='small'
                // classes={{ root: classes.slider }}
                onChange={(e, rotation) => setRotation(rotation)}
              />
            </div>
          </div>
          <div className='flex w-full justify-end space-x-3'>
            <Button
              onClick={handleClose}
              variant='outlined'
              startIcon={<CancelIcon />}
            >
              Cancel
            </Button>
            <Button
              onClick={showCroppedImage}
              variant='contained'
              startIcon={<CropIcon />}
              autoFocus
            >
              Crop
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CropDialogPage;
