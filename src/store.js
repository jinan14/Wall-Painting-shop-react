import {create} from 'zustand';

export const useStore = create((set) => ({
    cart: [],
    pricePerUnit: 20, // Example price per unit
    addToCart: (color, quantity) => {
        const totalPrice = quantity * 20; // Calculate total price based on quantity
        const newItem = {
            color,
            quantity,
            price: 20, // Store the price per unit
            totalPrice, // Store the calculated total price
        };
        set((state) => ({
            cart: [...state.cart, newItem],
        }));
    },
    removeFromCart: (index) => {
        set((state) => ({
            cart: state.cart.filter((_, i) => i !== index),
        }));
    },
    getTotalPrice: () => {
        return (state) => state.cart.reduce((total, item) => total + item.totalPrice, 0);
    },
    clearCart: () => set({ cart: [] }), // New action to clear the cart
}));
