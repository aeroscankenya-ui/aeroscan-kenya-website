/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { AutoCare } from './pages/AutoCare';
import { GaragePro } from './pages/GaragePro';
import { SchoolConnect } from './pages/SchoolConnect';
import { DocuFolio } from './pages/DocuFolio';
import { Solutions } from './pages/Solutions';
import { Technology } from './pages/Technology';
import { Partners } from './pages/Partners';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="autocare" element={<AutoCare />} />
          <Route path="garage-pro" element={<GaragePro />} />
          <Route path="schoolconnect" element={<SchoolConnect />} />
          <Route path="docufolio" element={<DocuFolio />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="technology" element={<Technology />} />
          <Route path="partners" element={<Partners />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
