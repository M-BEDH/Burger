import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Accueil/Accueil';
import APropos from './pages/A-propos/A-propos';
import Burger from './pages/Burger/Burger';

function Routeur() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos/" element={<APropos />} />
          <Route path="/burger/:id/" element={<Burger />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default Routeur;
