import "./productCard.css"

export function ProductCard(props){  //1st letter must be capital

    return(
        <div className="productCard">
            <h1>{props.name}</h1>
            <p>{props.price}</p>
            <img className="productImage" src={props.image} />
            <button>Add to Cart</button>
        </div>
    )
}      //meka thama ProductCard kyn html tag eke template eka(class ekak hadgtt wge)