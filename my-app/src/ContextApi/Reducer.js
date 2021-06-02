

export const initialState = {
    basket :[],
    // user:null,
};

// selector 
export const getBasketTotal = (basket) =>
    basket?.reduce((amount , item ) => Number(item.price) + amount ,0 );







const reducer  = (state , action) =>{

    console.log(action);

    switch(action.type){
        case 'ADD_TO_BASKET':
            
            return {
                ...state,
                basket: [...state.basket , action.item],
                
                
            };

        case 'REMOVE_FROM_CART':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            console.log(index);

            let newCart = [...state.basket];

            if(index >= 0)
                {
                    newCart.splice(Number(index) , 1);
                }
            else{
                    console.warn(`cant remove product (id: ${action.id}) as its not in the cart`)
                }
                
            return{
                    ...state ,
                    basket : newCart
                    // state.basket.filter(item => item.id !==action.id)
                };       
            
        default:
            return state;
    }
};




export default reducer;