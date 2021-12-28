import './bottombar.scss'
import { Link } from 'react-router-dom';


export default function BottomBar(){
    return(
        <div class="bottom-bar">
            <div class="bx--grid bx--grid--condensed">
                <div class="noMargin bx--col-lg-8 bx--col-md-4 bx--col-sm-2">
                    <div class="bx--row otherLink">
                        <div class="bx--col-lg-2 bx--col-md-2"><Link to="" target="_blank"><a href="https://www.instagram.com/hemmmmmu/" target="_blank">Instagram</a></Link></div>
                        <div class="bx--col-lg-2 bx--col-md-2"><Link to="" target="_blank"><a href="https://www.instagram.com/hemmmmmu/" target="_blank">Dribble</a></Link></div>
                        <div class="bx--col-lg-2 bx--col-md-2"><Link to="" target="_blank"><a href="https://www.instagram.com/hemmmmmu/" target="_blank">Behance</a></Link></div>
                        <div class="bx--col-lg-2 bx--col-md-2"><Link to="" target="_blank"><a href="https://www.instagram.com/hemmmmmu/" target="_blank">LinkedIn</a></Link></div>
                    </div>
                </div>
            </div>
        </div>


    )
}