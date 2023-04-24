import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import ImageBox from './ImageBox';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Favorites() {
  const [imageFields, setImageFields] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://127.0.0.1:8000/api/photo-list/');
      const data = response.data;
      console.log(data);
      const fields = data.map((item) => item);
      setImageFields(fields);
    }
    fetchData();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'start', backgroundColor: 'black' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, marginLeft: '50px' }}
            component={Link}
            to="/"
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, marginTop: '0.3%' }}
          >
            Favorites
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2}>
        {imageFields.map((field, index) => (
          <ImageBox url={field.image} key={index} fav={true} id={field.id}/>
        ))}
      </Grid>
    </Box>
  );
}
