const reducer = (state,action) => {
    if(action.type==="INCREASE"){
        let tempCart = state.cart.map((cartItem)=>{
            if(cartItem.id===action.payload){
                return {...cartItem, amount:cartItem.amount+1}
            }
            return cartItem
        })
        return {
            ...state,cart:tempCart
        }
    }
    return state;
}

export default reducer;