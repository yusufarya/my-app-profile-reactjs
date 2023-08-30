                                                                  
import React from 'react';
import './App.css'   
import Main from './component/parcial/main_container.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume from './pages/resume.jsx';
import './assets/font/PublicSans-Regular.ttf'

function App() { 
  return (
    <React.Fragment>    
        <Router>
            <Main>
                <Routes>
                    <Route path='/resume' element={Resume} />
                </Routes>
            </Main>
        </Router>
    </React.Fragment>   
  )
} 

export default App
