import '../Project/project.scss';
import Badge from 'react-bootstrap/Badge'


export default function Project2() {
    return(
        <div class="project bg-3">
        <div class="bx--grid">
                <div class="bx--row row-padding">
                    <div class="bx--col">
                        <div class="content-container">
                        <h1 class="project_title title-2" >Fabelio Product Detail Page</h1>
                        <div className="bx--row row-custom">
                                <div class="custom-badge">
                                <Badge pill bg="light" text="dark">Product Design</Badge>{' '}
                                </div>
                                <div class="custom-badge">
                                <Badge pill bg="light" text="dark" class="custom-badge">UIUX Design</Badge>{' '}
                                </div>
                 
                            </div>
                            <div class="">
                                <p>A design system of Sekolah.mu is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications, and the need for every UI Designers go hand in hand with the need for scale, efficiency, and consistency in Design. They basically bring order to chaos.
                                </p> 

                            </div>
 
                        </div>
                    </div>
                    <div class="bx--col bx--col-sm-4 right">
                        <div class="content-container right-column">
                            <div class="right">
                            <h4> content img</h4>
                            </div>

                        </div>     
                    </div>
                </div>      
        </div>
    </div>
        

    )

}