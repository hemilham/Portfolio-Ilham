import React from 'react';
import "./app.scss"
import './fonts/vg5000-master/fonts/webfonts/VG5000-Regular_web.ttf';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Topbar from './components/Topbar/Topbar';
import BottomBar from "./components/Bottom-Bar/BottomBar";
import Home from './pages/Home';
import DetailPage from './pages/DetailPage'






function App() {


  return ( 
    <>
    <Router>
      <Topbar/>
      

      <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/Portfolio-Ilham" element={<Home/>}/>
          <Route path="/Portfolio-Ilham/detail" element={<DetailPage/>}/>
      </Routes>
      <div className="App font-face-vg">
        <BottomBar/>
      </div>
    </Router>
    </>
    
  );

  
}

export default App;








