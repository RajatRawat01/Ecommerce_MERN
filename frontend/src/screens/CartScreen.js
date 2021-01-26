import React, { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import * as actions from "../actions/cart";
function CartScreen(props){
    //read the id
    const productID = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const data = useSelector(state=>state.cart);
    console.log(data);
    const dispatch = useDispatch();
    
        useEffect(()=>{
            if(productID){
                dispatch(actions.addToCart(productID,qty));
            }
        },[]);
    

    return(
        <div>
            <h2>Product Information</h2>
            <p>ID:{productID}     Qty:{qty}</p>
        </div>
    )
};
export default CartScreen;
