import react from 'react';
import { BrowserRouter, Router, Route, Routes, Link } from 'react-router-dom';
// import Contactus from './pages/Contactus';
import DIY from './pages/DIY';
import Gardendesignidea from './pages/Gardendesingidea';
import Plantcareguide from './pages/Plantcareguide';
// import Shop from './pages/Shop';
import Showcase from './pages/Showcase';
import Home from './pages/Home';
import Error from './pages/Error404';

export default function routes(){
    return(
        <Routes>
        <Route path='/' element={<Home/>}/>  
        {/* <Route path='/contactus' element={<Contactus/>}/> */}
        <Route path='/diy' element={<DIY/>}/>
        <Route path='/gardendesignidea' element={<Gardendesignidea/>}/>
        <Route path='/plantcareguide' element={<Plantcareguide/>}/>
        {/* <Route path='/shop' element={<Shop/>}/> */}
        <Route path='/showcase' element={<Showcase/>}/>
        <Route path='/*' element={<Error/>}/> 
      </Routes>
    )
}