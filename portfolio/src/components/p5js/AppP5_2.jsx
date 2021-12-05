import React from 'react';
import p5 from 'p5';



class AppP5_2 extends React.Component {

    

    constructor(props) {
        super(props)
        this.myRef = React.createRef()
      }

      Sketch = (p5) => {

        let cols = 32;
        let rows = 32;
        let zoff= 0;
        let xoff= 0;

        

        p5.setup = () => {

            p5.createCanvas(320, 320, p5.WEBGL);
            p5.background(255,128,64)

            p5.click = p5.isLooping("loop()", true);
    
            
        };

        p5.draw = () => {


    
            for (let h = 0; h < 1; h++) {
    
                if (p5.mouseIsPressed) {
    
                    p5.strokeWeight(2);
                    p5.ambientLight(0, 255, 0);
                    p5.ambientMaterial(0, 255, 18);
                    p5.directionalLight(10, 255, 10, -255, 255, 100);
    
                    for (let a = 0; a < p5.TWO_PI; a += p5.radians(5)) {
    
                        p5.stroke(255, 255, 10);
                        let xoff = p5.map(p5.cos(a + p5.phase), -1, 2, -16, 15);
                        let yoff = p5.map(p5.sin(a + p5.phase), -1, 1, 0, 18);
                        let r = p5.map(p5.noise(xoff, yoff, zoff), 0, 1, 100, p5.height / 2);
                        let x = r * p5.cos(a);
                        let y = r * p5.sin(a);
                        p5.vertex(x, y);          
                    }
                    p5.endShape(p5.CLOSE);
                    p5.phase += 0.003;
                    p5.zOff += 0.01;
                    p5.xOff += 0.03;
                }
                else{
                        
                };
    
                p5.push();
                p5.scale(2.3);
                p5.rotateX(0.2);
                p5.rotateY(p5.millis() / -1000);
                p5.rotateZ(4.4);
                p5.noStroke();
                p5.ambientLight(230, 128, 80);
                p5.ambientMaterial(255, 255, 120);
                p5.directionalLight(230, 255, 10, -128, 100, 32);
                p5.box(64);
                p5.pop();
    
            }
            if (p5.mouseIsPressed) {
    
            }else{}
    
            p5.beginShape();
            for (var i = 0; i < cols; i++) {
                if (p5.mouseIsPressed) {
    
                    let step = p5.frameCount % 150;
                    let angle = p5.map(step / 5, 0, 20, 0, p5.TWO_PI);
                    let cos_a = p5.cos((angle * step) / 2);
                    let sin_a = p5.sin(angle);
                    let shear_factor = 2 / p5.tan(p5.PI / 2 - angle * sin_a);
                    p5.applyMatrix(cos_a, sin_a, -sin_a / 2, cos_a, 0, 0);
                    p5.applyMatrix(1.2, 0.2, shear_factor * cos_a, 1, 0, 0.2);
                    p5.ambientLight(255, 250, 200);
                    p5.ambientMaterial(0, 0, 120);
                    p5.loop();
            
                }else{ }

    
                for (var j = 0; j < p5.rows; j++) {
    
                    var x = cols * 32;
                    var y = rows * 32;
                    p5.stroke(255);
                    p5.strokeWeight(2);
                    p5.fill(47, 9, 255);
                    p5.rect(x, y, 720, 720);
                    p5.rectMode(p5.CENTER)
    
    
    
                }

                p5.beginShape();
                p5.stroke(5);
                p5.strokeWeight(4);
                p5.fill(255, 255, 255);
                p5.rect(218, -268, 240, 128);

                
    
    
    
    
            }


            
    
            
        };


        p5.mousePressed = () => {
            p5.noLoop();

            //rotateY(0);
          }
          
        p5.mouseReleased = () => {
            p5.loop();

          }



      }


   
    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
      }



    render() {
        return(
            <div ref={this.myRef}>

            </div>
        )

    }

};

export default  AppP5_2

