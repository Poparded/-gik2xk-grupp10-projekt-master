import './App.css';
import { Typography, Box, AppBar, Toolbar } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Products from './views/Products';
import ProductsEdit from './views/ProductsEdit';
import ProductsDetail from './views/ProductsDetail';
import ProductCreate from './views/ProductCreate';

import Users from './views/Users';
import UserRating from "./views/UserRating"
function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }} className="header">
        <AppBar position="static" style={{ backgroundColor: '#1E5C5B' }}>
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" className="nav-link" style={{ color: '#FFFFFF' }}>Fjällripan</Link>
            </Typography>
            <Typography variant="h6" component="div">
              <Link to="/products" className="nav-link" style={{ color: '#FFFFFF', marginLeft: 30 }}>Alla Produkten</Link>
            </Typography>
            <Typography variant="h6" component="div">
              <Link to="/productCreate" className="nav-link" style={{ color: '#FFFFFF', marginLeft: 30 }}>Skapa produkt</Link>
            </Typography>
            <Typography variant="h6" component="div">
              <Link to="/userList" className="nav-link" style={{ color: '#FFFFFF', marginLeft: 30 }}>Visa alla användare</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <div style={{ marginTop: 50 }}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/productsEdit/:id" element={<ProductsEdit></ProductsEdit>}></Route>
          <Route path="/productCreate" element={<ProductCreate></ProductCreate>}></Route>

          <Route path="/products/large/:id" element={<ProductsDetail></ProductsDetail>}></Route>
          <Route path="/userList" element={<Users></Users>}></Route>
          <Route path="/users/rating/:id" element={<UserRating></UserRating>}></Route>

        </Routes>
      </div>
    </div>
  );
}

export default App;
