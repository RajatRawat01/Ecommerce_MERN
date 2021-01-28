import React,{useEffect,useState} from "react";
import * as actions from "../actions/details";
import { useSelector,useDispatch } from "react-redux";
import { NavLink,Link } from "react-router-dom";
import Rating from "../components/Rating";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

function ProductScreen(props){
    
    const [qty,setQty] = useState(1);

    const dispatch = useDispatch();
    const result = useSelector(state=>state.details);
    const {product,error,loading} = result;

    useEffect(()=>{
        dispatch(actions.getDetailsProduct(props.match.params.id));
    },[]);


    const addToCartHandler = ()=>{
        //navigate to CartScreen
        //ReactJS (Single Page Applications)
        props.history.push(`/cart/${props.match.params.id}?qty=${qty}`);
    };

    return(
        <div>
            <NavLink to="/" exact strict style={{color:"black"}}>
                Back To Results
            </NavLink>
            <br></br>
            {loading?(<LoadingBox></LoadingBox>):
            error?(<MessageBox variant="danger">{error}</MessageBox>):(
                <div className="row top">
                <div className="col-2">
                    <img src={product.image} alt={product.image}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li><h2>{product.name}</h2></li>
                        <li>
                            <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                        </li>
                        <li>
                            $ {product.price}
                        </li>
                        <li>
                            {product.description}
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div>{product.price}</div>
                                </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Status</div>
                                        <div>
                                            {product.countInStock>0 ? (<span className="success">Count In Stock</span>):(<span className="error">Out Of Stock</span>)}
                                        </div>
                                    </div>
                                </li>
                                {product.countInStock>0 && (
                                <>
                                    <li>
                                        <div className="row">
                                            <div>Qty</div>
                                            <div>
                                                <select value={qty} onChange={(e)=>setQty(e.target.value)}>
                                                    {
                                                        [...Array(product.countInStock).keys()].map((x)=>(
                                                            <option key={x+1} value={x+1}>{x+1}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <button onClick={addToCartHandler} className="primary block">Add to Cart</button>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            )}
            
            
            
        </div>


    )
};

export default ProductScreen;
