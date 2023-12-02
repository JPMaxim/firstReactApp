export function Gallery({img, caption}) {
    return (
        <div className="gallery">
            <img src={img}/>
            <p>{caption}</p>
        </div>
    )
}