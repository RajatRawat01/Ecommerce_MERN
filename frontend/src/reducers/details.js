const initialState = {
    product : {},
    error:false,
    loading:false
};

const details = (state=initialState,action)=>{
    switch(action.type){
        case "GET_DETAILS_PRODUCT":
            return{
                ...state,
                loading : action.loading
            }
        case "GET_DETAILS_PRODUCT_SUCCESS":
            return{
                ...state,
                product:action.value,
                loading:action.loading     
            }
        case "GET_DETAILS_PRODUCT_FAIL":
            return{
                ...state,
                loading:action.loading,
                error:action.error
            }
        default:
            return state;
    }
};

export default details;