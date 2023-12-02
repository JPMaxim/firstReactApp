export function BbcNews({img, heading, paragraph, time, category}) {
    return (
        <div className="bbcNews">
            <img src={img}/>
            <h3>{heading}</h3>
            <p>{paragraph}</p>
            <p>&#128337; {time} | {category}</p>
        </div>
    )
}