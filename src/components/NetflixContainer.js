import { Netflix } from "./Netflix"
import netflixOne from "../images/netflixOne.png"
import netflixTwo from "../images/netflixTwo.png"
import netflixThree from "../images/netflixThree.png"
import netflixFour from "../images/netflixFour.png"
import netflixFive from "../images/netflixFive.png"

export function NetflixContainer() {
    return (
        <div className="netflixContainer">
            <Netflix img={netflixOne} />
            <Netflix img={netflixTwo} />
            <Netflix img={netflixThree} />
            <Netflix img={netflixFour}/>
            <Netflix img={netflixFive} />        
        </div>
    )
}