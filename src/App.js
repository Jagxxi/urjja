import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from "react-helmet"; //browser tab and icon customization

// Core Function
import { Home, Error, SignIn, NewArrivals } from './pages';

// Men Clothing
import { Men, MenClothing, MenAccesories, MenBrands,
         Tops, Bottoms, Innerwear, Outerwear, Activewear,
         Hats, Sunglasses, Belts, Wallets, BagsBackpacks } from './pages';

import { Nike1, Nike2, Nike3, Nike4, Nike5,
         Zara1, Zara2, Zara3, Zara4, Zara5,
         TommyJohn1, TommyJohn2, TommyJohn3, TommyJohn4, TommyJohn5,
         NorthFace1, NorthFace2, NorthFace3, NorthFace4, NorthFace5,
         GymShark1, GymShark2, GymShark3, GymShark4, GymShark5,
         Adidas1, Adidas2, Adidas3, Adidas4, Adidas5, } from './pages';

// Women Clothing

const App = () => {
  return (
    <Router> {/* Move the Router component here */}
      <div className="App">
        {/*Website TAB Description*/}
        <Helmet>
          <meta charSet="utf-8" />
          <title>Luna - Voyage On | Modern Collection for Men's & Women's Clothing</title>
          <link rel="canonical" href="https://www.google.com/" />
          <meta name="description" content="© 2025 urjja Inc. All Rights Reserved." />
        </Helmet>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/error/" element={<Error />} />
          <Route path="/sign-in/" element={<SignIn />} />
          <Route path="/new-arrivals/" element={<NewArrivals />} />

          {/* Men Clothing */}
          <Route path="/men/" element={<Men />} />
          <Route path="/men/clothing/" element={<MenClothing />} />
          <Route path="/men/accessories/" element={<MenAccesories />} />
          <Route path="/men/brands/" element={<MenBrands />} />

          <Route path="/men/clothing/tops/" element={<Tops />} />
          <Route path="/men/clothing/bottoms/" element={<Bottoms />} />
          <Route path="/men/clothing/innerwear/" element={<Innerwear />} />
          <Route path="/men/clothing/outerwear/" element={<Outerwear />} />
          <Route path="/men/clothing/activewear/" element={<Activewear />} />

          <Route path="/men/accessories/hats" element={<Hats />} />
          <Route path="/men/accessories/sunglasses" element={<Sunglasses />} />
          <Route path="/men/accessories/belts" element={<Belts />} />
          <Route path="/men/accessories/wallets" element={<Wallets />} />
          <Route path="/men/accessories/bagsbackpacks" element={<BagsBackpacks />} />

          <Route path="/men/clothing/tops/nike1" element={<Nike1 />} />
          <Route path="/men/clothing/tops/nike2" element={<Nike2 />} />
          <Route path="/men/clothing/tops/nike3" element={<Nike3 />} />
          <Route path="/men/clothing/tops/nike4" element={<Nike4 />} />
          <Route path="/men/clothing/tops/nike5" element={<Nike5 />} />
          
          <Route path="/men/clothing/bottoms/zara1" element={<Zara1 />} />
          <Route path="/men/clothing/bottoms/zara2" element={<Zara2 />} />
          <Route path="/men/clothing/bottoms/zara3" element={<Zara3 />} />
          <Route path="/men/clothing/bottoms/zara4" element={<Zara4 />} />
          <Route path="/men/clothing/bottoms/zara5" element={<Zara5 />} />

          <Route path="/men/clothing/innerwear/tommyjohn1" element={<TommyJohn1 />} />
          <Route path="/men/clothing/innerwear/tommyjohn2" element={<TommyJohn2 />} />
          <Route path="/men/clothing/innerwear/tommyjohn3" element={<TommyJohn3 />} />
          <Route path="/men/clothing/innerwear/tommyjohn4" element={<TommyJohn4 />} />
          <Route path="/men/clothing/innerwear/tommyjohn5" element={<TommyJohn5 />} />

          <Route path="/men/clothing/outerwear/northface1" element={<NorthFace1 />} />
          <Route path="/men/clothing/outerwear/northface2" element={<NorthFace2 />} />
          <Route path="/men/clothing/outerwear/northface3" element={<NorthFace3 />} />
          <Route path="/men/clothing/outerwear/northface4" element={<NorthFace4 />} />
          <Route path="/men/clothing/outerwear/northface5" element={<NorthFace5 />} />

          <Route path="/men/clothing/activewear/gymshark1" element={<GymShark1 />} />
          <Route path="/men/clothing/activewear/gymshark2" element={<GymShark2 />} />
          <Route path="/men/clothing/activewear/gymshark3" element={<GymShark3 />} />
          <Route path="/men/clothing/activewear/gymshark4" element={<GymShark4 />} />
          <Route path="/men/clothing/activewear/gymshark5" element={<GymShark5 />} />

          <Route path="/men/accessories/hats/adidas1" element={<Adidas1 />} />
          <Route path="/men/accessories/hats/adidas2" element={<Adidas2 />} />
          <Route path="/men/accessories/hats/adidas3" element={<Adidas3 />} />
          <Route path="/men/accessories/hats/adidas4" element={<Adidas4 />} />
          <Route path="/men/accessories/hats/adidas5" element={<Adidas5 />} />

          {/* Women Clothing */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
