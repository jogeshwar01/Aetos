import PRODUCTS from '../../data/dummy-data';


const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')    //dummy setup for user product temporarily
};

export default (state = initialState, action) => {
    return state;
};