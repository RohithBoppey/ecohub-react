import { createStore } from "redux";

const initialState = { userIsLoggedIn: false, cart: [] };

const reducingFunction = (state = initialState, action) => {
	if (action.type === "login") {
		return {
			...state,
			userIsLoggedIn: true,
		};
	}
	if (action.type === "logout") {
		return {
			...state,
			userIsLoggedIn: false,
		};
	}

	if (action.type === "add-to-cart") {
		let tempCart = new Set(state.cart);
		tempCart.add(action.product);
		return {
			...state,
			cart: Array.from(tempCart),
		};
	}
    
	return state;
};

// takes in reducer function and initial state
const store = createStore(reducingFunction);

export default store;
