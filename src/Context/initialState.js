import { fetchCart, fetchuser } from "../utils/fetchLocalStorageData";

const userInfo = fetchuser();
const cartInfo = fetchCart();

export const initialState = {
  user: userInfo,
  foodItems: null,
  cartShow: false,
  cartItems: cartInfo,
};
