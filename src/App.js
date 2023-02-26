import logo from './logo.svg';
import { React } from "react";
import { NavbarComponent } from "./components/navbar.js";
import { HomeComponent } from "./components/home.js";
import { Cv } from "./components/Cv.js";
import { ContactMeComponent } from './components/contact.js';
import { PersonalLetterComponent } from './components/letter.js';
import { PortfolioComponent } from './components/portfolio.js';
import { Footer } from './components/footer.js';
import {BrowserRouter as Router, HashRouter, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/style.css';

export default function App() {
  return (
    <div>
      <HashRouter>
      <NavbarComponent/>
        <Routes>
          <Route path="/home" element={<HomeComponent/>} />
          <Route path="/cv" element={<Cv/>} />
          <Route path="/letter" element={<PersonalLetterComponent/>} />
          <Route path="/portfolio" element={<PortfolioComponent/>} />
          <Route path="/contact" element={<ContactMeComponent/>} />
        </Routes>
      </HashRouter>
      <Footer/>
      
    </div>
  )
};
