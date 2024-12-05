import './Card.css'

function Card({imagem, nome, valor}){
    return(
        <>
        <div className="card-item-completo">
            <div className="image-container-container">
                <img className='card-imagem' src={ imagem }/>
            </div>
            <div className="card-container">
                <h1 className='card-nome'>{ nome }</h1>
                <hr />
                <h3 className='card-valor'>R$ { valor }</h3>
            </div>
        </div>
        </>
    );
}
export default Card;