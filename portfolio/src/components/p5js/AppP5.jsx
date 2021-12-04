import Sketch from 'react-p5';
import React from 'react';

class AppP5 extends React.Component {

 
  

	setup = (p5, parentRef) => {
		p5.createCanvas(320, 320, p5.WEBGL).parent(parentRef);
	};

  preload = (p5) => {
    //p5.lemonz = p5.loadModel("./react-p5/assets/LM3.obj", true);

  }

  windowResized = (p5)  =>{
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  }

	draw = (p5) => {
    
    p5.background(224, 255, 166);
    p5.push();
    p5.rotateX(p5.frameCount * 0.01);
    p5.rotateY(p5.frameCount * 0.01);
    p5.torus(72);
    p5.pop();
		p5.fill(255, this.y * 1.3, 0);
		p5.ellipse(p5.width / 2, this.y, 50);
		if (this.y > p5.height) this.direction = '';
		if (this.y < 0) {
			this.direction = '^';
		}
		if (this.direction === '^') this.y += 8;
		else this.y -= 4;
	};



	render() {
		return (
		<div className="AppP5">
        <div class="bx--grid bx--grid--narrow">
          <div class="bx--row row-padding">
                    <div class="bx--col">
                        <h1 class="content-container project_title">Project Title</h1>
                        <div class="content-container">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                        </div>                     
                    </div>
                    <div class="bx--col right">
                        <div class="content-container">
                            <Sketch setup={this.setup} draw={this.draw} />  
                        </div>
                    </div>
          </div>      
         
        </div>

			</div>
		);
	}
}

export default  AppP5