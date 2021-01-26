import React, { useEffect } from "react";
import {useSelector,useDispatch} from "react-redux";
import * as actions from "../actions/products";
import Product from "../components/Product";
import  LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

function HomeScreen(){

    const dispatch = useDispatch();
    const data = useSelector(state=>state.products);
    const {loading,error,products} = data;


    useEffect(()=>{
        dispatch(actions.getProducts());
    },[]);

    return(

        <div>
            {loading?(<LoadingBox></LoadingBox>):
             error?(<MessageBox variant="danger">{error}</MessageBox>):
             (<div className="row center">
             {products.map((element)=>(
                 <Product key={element._id} element={element} />
             ))}
            </div>)}
        </div>

    )
};

export default HomeScreen;
