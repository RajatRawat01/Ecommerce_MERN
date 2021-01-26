const initialState = {
    loading : false,
    products : [],
    error : false
};
const products = (state=initialState,action)=>{
    switch(action.type){
        case "GET_PRODUCTS":
            return{
                ...state,
                loading:action.loading
            }
        case "GET_PRODUCTS_SUCCESS":
            return{
                ...state,
                loading : action.loading,
                products : action.value    
            }
        case "GET_PRODUCTS_FAIL":
            return{
                ...state,
                loading : action.loading,
                error : action.error
            }
        default:
            return state;
    }
};
export default products;
