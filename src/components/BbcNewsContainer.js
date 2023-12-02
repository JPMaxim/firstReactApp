import { BbcNews } from "./BbcNews"
import bbcNewsOne from "../images/bbcNewsOne.png"
import bbcNewsTwo from "../images/bbcNewsTwo.png"
import bbcNewsThree from "../images/bbcNewsThree.png"
import bbcNewsFour from "../images/bbcNewsFour.png"
import {bbcHeadingOne, bbcHeadingTwo, bbcHeadingThree, bbcHeadingFour, bbcParagraphOne, bbcParagraphTwo, bbcParagraphThree, bbcParagraphFour} from "../text/text.js"

export function BbcNewsContainer() {
    return (
        <div className="bbcNewsContainer">
            <BbcNews img={bbcNewsOne} heading={bbcHeadingOne} paragraph={bbcParagraphOne} time={"2h"} category={"Health"} />
            <BbcNews img={bbcNewsTwo} heading={bbcHeadingTwo} paragraph={bbcParagraphTwo} time={"1h"} category={"UK Politics"} />
            <BbcNews img={bbcNewsThree} heading={bbcHeadingThree} paragraph={bbcParagraphThree} time={"2h"} category={"Entertainment & Arts"} />
            <BbcNews img={bbcNewsFour} heading={bbcHeadingFour} paragraph={bbcParagraphFour} time={"10m"} category={"Business"} />      
        </div>
    )
}