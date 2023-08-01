// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'                                                                      
import React from 'react';
import './App.css'  
import Header from './component/parcial/header.jsx';
import Topbar from './component/parcial/topbar.jsx';  
import About from './pages/about.jsx';

function App() { 
  return (
    <React.Fragment>    
        <Topbar/>
        <Header /> 
      <hr />
      <About/>
    </React.Fragment>   
  )
} 

export default App
