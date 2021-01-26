import axios from "axios";

export const getDetailsProduct = (id)=>{
    return async (dispatch)=>{
        dispatch({type:"GET_DETAILS_PRODUCT",loading:true});
        try{
            const {data} = await axios.get(`http://localhost:8080/api/products/${id}`);
            dispatch({type:"GET_DETAILS_PRODUCT_SUCCESS",value:data,loading:false});
        }catch(error){
            dispatch({type:"GET_DETAILS_PRODUCT_FAIL",error:error.message,loading:false});
        }
    }
};