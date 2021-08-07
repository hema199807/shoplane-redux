export const getProduct = (payload) => ({
    type: "GET_PRODUCTS",
    payload
})

export const addProductToCart = (payload) => ({
    type: "ADD_PRODUCT_TO_CART",
    payload
})
export const deleteProduct = (payload) => ({
    type: "DELETE_PRODUCT",
    payload
})



