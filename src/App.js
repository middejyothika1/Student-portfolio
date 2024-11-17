

import { Route, Routes,useLocation } from 'react-router-dom';

import './App.css';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Contact from './containers/contact';
import Navbar from './components/Navbar';
import {loadFull, loadFulll} from "tsparticles";


function App() { 
  const location=useLocation();
  console.log(location);
  const handleInit=async(main)=>{
    await loadFull(main)
  }
  const renderParticlesHomepage=location.pathname==="/"
  return (
   <div className='App'>
    {/* Particles js */}


   

   

    {/* navbar */}
    <Navbar/>

    {/* main page content */}
    <div className="App_main-page-content"> 
    <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route index path='/about' element={<About/>}/>
      <Route index path='/resume' element={<Resume/>}/>
      <Route index path='/skills' element={<Skills/>}/>
      
      <Route index path='/contact' element={<Contact/>}/>
    </Routes>
    </div>
    
   </div>
  );
}

export default App;
