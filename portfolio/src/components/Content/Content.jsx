import React from 'react';
import './content.scss'
import TextLoop from "react-text-loop";
import cxs from "cxs/component";

const fontSize = cxs("div")({
  fontSize: "1.5rem"
});
 

class Content extends React.Component {

    render(){
        return(
        <div class="content">
            <div class="bx--grid">
                    <div class="bx--row">
                        <div class="bx--col content-spacing">
                            <div class="content-container">
                            <h3>
                            Hello, my name is
                            </h3>    
                            <h1 class="myname">M. Ilham Akbar</h1>
                            <h3 class="subtext">
                            sometimes I do_
                            <TextLoop Variable={[3500, 3500]}>
                                <span>ui/ux design</span>
                                <span>new media art</span>
                                <span>interdisciplinary projects</span>
                                <span>web development</span>
                                </TextLoop>{" "}
                            </h3>

                            </div>
                            
                        </div>
                        <div class="bx--col right">
                            <div class="content-container sub-content subtext">
                            <h4>/interaction design</h4>
                            <h4>/user experience</h4>
                            <h4>/art direction</h4>
                            <h4>/branding</h4>

                            </div>

                        </div>
                    </div>      
            </div>
        </div>
               
        )
    } 

}


export default Content