import {Gallery} from "./Gallery"
import galleryOne from "../images/galleryOne.png"
import galleryTwo from "../images/galleryTwo.png"
import galleryThree from "../images/galleryThree.png"
import galleryFour from "../images/galleryFour.png"

export function GalleryContainer() {
    return (
        <div className="galleryContainer">
            <Gallery img={galleryOne} caption={"Entire homes"} />
            <Gallery img={galleryTwo} caption={"Unique stays"} />
            <Gallery img={galleryThree} caption={"Cabins and cottages"} />
            <Gallery img={galleryFour} caption={"Pets Allowed"} />
        </div>
    )
}

