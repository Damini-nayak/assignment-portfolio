import react from 'react';
import { BrowserRouter, Router, Route, Routes, Link } from 'react-router-dom';
import Contactus from './pages/Contactus';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import Error from './pages/Error404';
import About from './pages/Aboutme';

export default function routes(){
    return(
        <Routes>
        <Route path='/' element={<Home/>}/>  
        {/* <Route path='/contactus' element={<Contactus/>}/> */}
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/*' element={<Error/>}/> 
      </Routes>
    )
}