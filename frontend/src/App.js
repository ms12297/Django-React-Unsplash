import SearchBar from './SearchBar';
import Favorites from './Favorites';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SearchBar />} />
        <Route path='/fav' element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
