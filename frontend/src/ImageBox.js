import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';


// Styles
const Image = styled('img')({
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
  width: 'auto',
  height: 'auto',
});

export default function ImageBox({ url, fav, id }) {
  const [open, setOpen] = useState(false);
  const [deleteFav, setDeleteFav] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleButton = () => {
    if (fav) {
      axios.delete(`http://127.0.0.1:8000/api/photo-delete/${id}/`)
        .then(response => console.log(response))
        .catch(error => console.log(error));
      
      setDeleteFav(true);
    }
  
    else {
      const data = {
        id: 1,
        title: 'new image',
        image: url
      };

      axios.post('http://127.0.0.1:8000/api/photo-create/', data)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }
  };

  if (deleteFav) {
    return null;
  }

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Image src={url.small} onClick={handleClick} />
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Image src={url.full} />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton
              sx={{ color: fav ? 'gray' : 'red', width: '50px', height: '50px' }}
              onClick={handleButton}
            >
              {fav ? (
                <DeleteIcon sx={{ width: '35px', height: '35px' }} />
              ) : (
                <FavoriteIcon sx={{ width: '35px', height: '35px' }} />
              )}
            </IconButton>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
