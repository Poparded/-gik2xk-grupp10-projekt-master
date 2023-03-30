import './App.css';
import { Typography, Box, AppBar, Toolbar } from '@mui/material'; // Importing material UI components

import { Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Products from './views/Products';
import ProductsEdit from './views/ProductEdit';
import ProductsDetail from './views/ProductsDetail';
import UserList from "../components/UserList"


function App() {
  return (
    <div className="App">
      <h1>Fjällripan</h1>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">Hem</Link>
            </Typography>
            <Typography variant="h6" component="div">
              <Link to="/Products">Alla Produkten</Link>
            </Typography>
            <Typography variant="h6" component="div">
              <Link to="/ProductEdit">Lägg till i varukorgen</Link>
            </Typography>
            <Typography variant="h6" component="div">
              <Link to="/ProductsDetail">Visa produkten</Link>
            </Typography>
            <Typography variant="h6" component="div">
              <Link to="/userList">Visa produkten</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>


      <div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/productsEdit" element={<ProductsEdit></ProductsEdit>}></Route>
          <Route path="/productsDetail" element={<ProductsDetail></ProductsDetail>}></Route>
          <Route path="/userList" element={<UserList></UserList>}></Route>

        </Routes>
      </div>
    </div>
  );
}

export default App;