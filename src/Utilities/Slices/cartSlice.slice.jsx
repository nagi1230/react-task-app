import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  // reducers: {
  //   addToCart(state, action) {
  //     const payloadInfo = action.payload;

  //     const existingItem = state.cart.find(
  //       (item) => String(item.id) === String(payloadInfo?.id),
  //     );

  //     if (existingItem) {
  //       // Agar pehla hi hai
  //       existingItem.quantity = (existingItem.quantity) + 1;
  //       console.log("Quantity Vadhi:", current(existingItem));
  //     } else {
  //       // Agar pehli vaar add ho reha hai (undefined aane par yahan aana chahiye)
  //       state.cart.push({
  //         ...payloadInfo,
  //         quantity: 1,
  //       });
  //     // console.log("Nawa Item Cart Ch Gaya:", payloadInfo);
  //     }
  //     // console.log("Cart di Updated State:", current(state.cart));
  //   },

  //   updateQty(state, action) {
  //     const {id,delta} = action.payload;
  //     if (id > 1) {
  //       state.cart({
  //         quantity: - delta
  //       })
  //     }else{
  //       state.cart({
  //         quantity:  + delta
  //       })
  //     }
  //   },
  // },

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      // state.cart jo hamara array hai usme check karein
      const existingItem = state.cart.find((i) => i.id === product.id);
      console.log(current(state.cart), "cart---------");
  
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.cart = [...state.cart, { ...product, qty: 1 }];
      }
    },
  
    updateQty: (state, action) => {
      const { id, delta } = action.payload;
      const item = state.cart.find((i) => i.id === id);
  
      if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
          state.cart = state.cart.filter((i) => i.id !== id);
        }
      }
    },
  },
  
});

export const { addToCart, updateQty } = cartSlice.actions;
export default cartSlice.reducer;

