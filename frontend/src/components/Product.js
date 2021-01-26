import React from "react";
import Rating from "./Rating";
import { NavLink } from "react-router-dom";
function Product(props){
    const {element} = props;
    return(
        <div className="card">
                    <NavLink to={`/product/${element._id}`}>
                        <img className="medium" src={element.image}></img>
                    </NavLink>
                    <div className="card-body">
                        <h2>{element.name}</h2>
                        <Rating rating={element.rating} numReviews={element.numReviews}></Rating>
                        <div>
                            Price :${element.price}
                        </div>
                    </div>
        </div>
    )
};
export default Product;