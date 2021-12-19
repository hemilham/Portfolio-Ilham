import React from 'react';
import "./page.scss"
import '../components/Content/content.scss'
import pic from './img/combine.png'


function DetailPage() {
    
    return(
        <div className="font-face-vg bg-4 bx--grid">
            <div class="bx--grid content detail-content">
                    <div class="bx--row">
                        <div class="bx--col">
                            <img src={pic} alt="project img"></img>            
                        </div>
                    </div>        
            </div>
        </div>
        

    )

}

export default DetailPage;
