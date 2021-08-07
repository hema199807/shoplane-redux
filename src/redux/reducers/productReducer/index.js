const initialState = {
    products : [],
    cart: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "GET_PRODUCTS":
        return { ...state, products : payload }
    case "ADD_PRODUCT_TO_CART":
        return { ...state, cart : [...state.cart, payload]}
    default:
        return state
    }
}
