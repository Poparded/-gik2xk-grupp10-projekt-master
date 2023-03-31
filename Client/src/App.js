import './App.css';
import { Typography, Box, AppBar, Toolbar } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Products from './views/Products';
import ProductsEdit from './views/ProductEdit';
import ProductsDetail from './views/ProductsDetail';

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
              <Link to="/productsEdit" className="nav-link" style={{ color: '#FFFFFF', marginLeft: 30 }}>Lägg till i varukorgen</Link>
            </Typography>
            <Typography variant="h6" component="div">
              <Link to="/productsDetail" className="nav-link" style={{ color: '#FFFFFF', marginLeft: 30 }}>Visa produkten</Link>
            </Typography>
            <Typography variant="h6" component="div">
              <Link to="/userList" className="nav-link" style={{ color: '#FFFFFF', marginLeft: 30 }}>Användare</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <div style={{ marginTop: 50 }}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/productsEdit" element={<ProductsEdit></ProductsEdit>}></Route>
          <Route path="/productsDetail" element={<ProductsDetail></ProductsDetail>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
