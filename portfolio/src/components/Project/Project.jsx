import './project.scss'
import pic from './img/ds-1.png'
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom'



export default function Project() {
    
    return(

    <div class="project bg-1">
        <div class="bx--grid">
                <div class="bx--row row-padding">
                    <div class="bx--col">
                        <div class="content-container">
                        <h1 class="project_title title">Sekolah.mu Design System</h1>
                        <div className="bx--row row-custom">
                                <div class="custom-badge">
                                <Badge pill bg="light" text="dark">Product Design</Badge>{' '}
                                </div>
                                <div class="custom-badge">
                                <Badge pill bg="light" text="dark" class="custom-badge">Design System</Badge>{' '}
                                </div>
                 
                            </div>
                        <p>A design system of Sekolah.mu is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications, and the need for every UI Designers go hand in hand with the need for scale, efficiency, and consistency in Design. They basically bring order to chaos.
                            </p>  
                        </div>
                    </div>  
                    <Link to="/Portfolio-Ilham/detail">            
                    <div class="bx--col">
                        <div class="content-container right-column">
                            <div class="right">
                                <img src={pic} ></img> 
                            </div>    
                        </div>    
                    </div>
                    </Link>
                </div>      
        </div>
    </div>

        

    )

}