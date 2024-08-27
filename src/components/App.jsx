import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { SharedLayout } from './SharedLayout';
import { Mission } from './Mission';
import { Team } from './Team';
import { Reviews } from './Reviews';
import { Products } from '../pages/Product';
import { ProductDetails } from '../pages/ProductDetails';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission/>}></Route>
          <Route path="team" element={<Team/>}></Route>
          <Route path="reviews" element={<Reviews></Reviews>}></Route>
        </Route>
        <Route path="products" element={<Products />}></Route>
        <Route path="products/:id" element={<ProductDetails/>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
