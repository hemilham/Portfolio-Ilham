import Content from '../components/Content/Content';
import Project from "../components/Project/Project";
import AppP5 from '../components/p5js/AppP5';
import AppP5_2 from '../components/p5js/AppP5_2';
import "./home.scss"


export default function Home() {
    return ( 
      <div class="bx--grid-narrow"> 
        <div className="font-face-vg">

          <div class="bx--row section">
            <Content/>
            <Project/>
            <AppP5/>
            <div class="containercolor1">
              <AppP5_2/> 
            </div>
            
          </div>    
  

      </div>

      </div>

      
      
    );
  }
  