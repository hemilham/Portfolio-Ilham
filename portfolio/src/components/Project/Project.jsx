import './project.scss'
import pic from './img/ds-1.png'



export default function Project() {
    return(

    <div class="project">
        <div class="bx--grid">
                <div class="bx--row row-padding">
                    <div class="bx--col">
                        <div class="content-container">
                        <h1 class="project_title">Sekolah.mu Design System</h1>
                        <p>A design system of Sekolah.mu is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications, and the need for every UI Designers go hand in hand with the need for scale, efficiency, and consistency in Design. They basically bring order to chaos.
                            </p>  
                        </div>
                    </div>
                    <div class="bx--col bx--col-sm-4 right">
                        <div class="content-container right-column">
                            <div class="right">
                            <img src={pic} ></img> 
                            </div>

                        </div>     
                    </div>
                </div>      
        </div>
    </div>

        

    )

}