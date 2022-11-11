export const intitalState = {
    basket: [], // initially we have the empty basket
    user: null,
};

//Selector
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        
        case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
            }

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                basketItem => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if(index >= 0) {
                newBasket.splice(index, 1) ;
                
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in the basket!`
                )
            }

            return {
                ...state,
                basket: newBasket
            }

        case 'SET_USER':
            return{
                ...state, // everything that is currently inside the state and
                user: action.user // update the user to action.user
            }
        default:
            return state

    }
}

export default reducer;