import "./app.scss"
import './components/Topbar/Topbar'
import Topbar from './components/Topbar/Topbar';
import Content from './components/Content/Content';
import BottomBar from "./components/Bottom-Bar/BottomBar";
import Project from "./components/Project/Project";
import AppP5 from './components/p5js/AppP5'
import AppP5_2 from './components/p5js/AppP5_2'
import './fonts/vg5000-master/fonts/webfonts/VG5000-Regular_web.ttf';


function App() {
  return (
    <div className="App font-face-vg">
      <div>
        <Topbar/>
      </div>
      <div>
      <div class="containercolor1">
          <Content/> 
          
      </div>
      <div class="containercolor2">
      <Project/>    
      </div>
      <div class="containercolor3">
      <AppP5/>    
      </div>
      <div class="containercolor3">
      <AppP5_2/> 
      </div>

        
        

      </div>
    
      <div>
        <BottomBar/>
      </div>
    </div>
  );
}

export default App;
