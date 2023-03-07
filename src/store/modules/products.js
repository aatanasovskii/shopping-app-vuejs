export const namespaced = true;

export const state = {
    numberProducts: 0,
    products: [
        {
            title: "Test 1",
            description: "asd",
            price: "1200$"
        },
        {
            title: "Test 2",
            description: "ppp",
            price: "200$",
        }
    ],
}

export const mutations = {
    ADD_PRODUCT(state, updatedProduct) {
        state.products.push(updatedProduct);
        state.numberProducts++;
    }
}
