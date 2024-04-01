import cardImage from '../assets/card_image.jpeg'

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={cardImage} alt="Card Pic" style={{}}></img>
            <h2 className="card-title">Note to self</h2>
            <p className="card-text">Let's Get this Done</p>
        </div>
    )
}

export default Card