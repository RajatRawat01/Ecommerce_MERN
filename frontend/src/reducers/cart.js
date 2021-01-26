const initialState = {
    cartInItem : []
};
const cart = (state=initialState,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            //this item customer want to purchase
            const item = action.payload;

            //ES6
            //find()
            //check duplicate item, available in cart
            const duplicateItem = state.cartInItem.find(obj=>obj.product_id === item.product_id);
            
            //replace old value with latest value
            if(duplicateItem){
                return{
                    ...state,
                    cartInItem : state.cartInItem.map(obj=> obj.product_id === item.product_id ? item : obj)
                }
            }else{
                //add the new item to array
                //... (spread operator)
                return{
                    ...state,
                    cartInItem:[...state.cartInItem,item]
                }
            }
        default:
            return state;
    }
};
export default cart;
