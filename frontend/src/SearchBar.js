import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './SearchBarStyles';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import ImageBox from './ImageBox';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';



const ACCESS_KEY = "skwIuxyuPlkP6sIVM71V5AWTsoKkdRmIanT4ljTXang"; // put in .env


export default function SearchAppBar() {

  const [imageUrls, setImageUrls] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements.searchField.value;
    console.log(`Search query: ${query}`);

    if (query === "") {
      // setisEmpty(true);
      return;
    }

    axios.get("https://api.unsplash.com/search/photos/?client_id=" + ACCESS_KEY + "&query=" + query + "&per_page=12")
      .then(response => {
        setImageUrls(response.data.results.map((item) => item.urls));
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    axios.get("https://api.unsplash.com/photos/random?client_id=" + ACCESS_KEY + "&count=12")
        .then(response => {
            setImageUrls(response.data.map((item) => item.urls));
        })
        .catch(error => {
            console.error(error);
        });
    }, []);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', backgroundColor: "black"}}>
          <form onSubmit={handleSubmit}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                name="searchField"
                placeholder="Search Unsplash…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </form>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, marginLeft: "50px" }}
            component={Link}
            to="/fav"
          >
            <FavoriteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2}>
        {imageUrls.map((url, index) => (
            <ImageBox url={url} key={index} fav={false}/>
        ))}
      </Grid>
      
    </Box>
  );
}
