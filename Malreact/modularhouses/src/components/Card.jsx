export default function Card({id, name, price, photo}){
    return (
        <article className="card" key={id}>
            <div className="card-image"><img src={"assets/" + photo} alt={name}/></div>
            <div className="card-content">
                <h2 className="card-name">{name}</h2>
                <h2 className="card-name">{price}</h2>
            </div>
        </article>
    )
}