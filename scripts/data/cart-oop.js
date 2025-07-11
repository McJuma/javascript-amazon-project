function Cart(localStorageKey) {
    const cart = {
    cartItems: undefined,

    loadFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
        if (!this.cartItems) {
            this.cartItems =  [
            {
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
                deliveryOptionId: '1'
            },
            {
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity: 1,
                deliveryOptionId: '2'
            }
        ]};
    },

    saveToLocalStorage() {
        localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },
    /* same as saveToLocalStorage: function() {
        localStorage.setItem('cart', JSON.stringify(cart));
     }
    */

    addToCart(productId) {
        let matchingItem;
              this.cartItems.forEach((cartItem) => {
                  if (cartItem.productId === productId) {
                      matchingItem = cartItem;
                  }
              });
      
              if (matchingItem) {
                  matchingItem.quantity += 1;
              } else {
                  this.cartItems.push({
                      productId: productId,
                      quantity: 1,
                      deliveryOptionId: '1'
                  });
              }
              this.saveToLocalStorage();
      },

      removeFromCart(productId) {
        const newCart = [];
    
        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId !== productId) {
                newCart.push(cartItem);
            }
        });
        // update cart
        this.cartItems = newCart;
        this.saveToLocalStorage();
      },

      updateDeliveryOption(productId, deliveryOptionId) {
        let matchingItem;
              this.cartItems.forEach((cartItem) => {
                  if (cartItem.productId === productId) {
                      matchingItem = cartItem;
                  }
              });
    
              matchingItem.deliveryOptionId = deliveryOptionId;
              this.saveToLocalStorage();
      }
};
return cart;
}

const cart = Cart('cart-oop');
cart.loadFromStorage('cart-business');

const businessCart = Cart();
businessCart.loadFromStorage();



console.log(cart, businessCart);

