import marker from '../assets/marker.png'

export default function Entry(props) {
    // console.log(props)
    return(
        <article className="journal-entry">
            <div className="main-img-container">
                <img className="main-img" src={props.entry.img.src} alt={props.entry.img.alt} />
            </div>
            
            <div className="info-container">
                <img className="marker" src={marker} alt="marker" />
                <span className="country">{props.entry.country}</span>
                <a href={props.entry.googleMapsLink}>View on Google Maps</a>
                <h2 className="entry-title">{props.entry.title}</h2>
                <p className="trip-dates" >{props.entry.dates}</p>
                <p className="entry-text" >{props.entry.text}</p>
            </div>
        </article>
    )
}
