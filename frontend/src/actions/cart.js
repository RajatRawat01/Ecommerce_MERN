//action
//receive productID & qty from "CartScreen" and verify details with "database".
//asynchrnous "results" redirect to reducer
//store the final results to localStorage

import axios from "axios";

export const addToCart = (productID,qty)=>{
    return async (dispatch,getState)=>{
        const {data} = await axios.get(`http://localhost:8080/api/products/${productID}`);
        return dispatch({
            type:"ADD_TO_CART",
            payload:{
                name:data.name,
                image:data.image,
                price:data.price,
                countInStock:data.countInStock,
                product_id:data._id,
                qty
            }
        })

        //store the state to local storage
        //------
        //------
    };
};
