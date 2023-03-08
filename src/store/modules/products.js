export const namespaced = true;

export const state = {
    numberProducts: 0,
    numberColumns: 0,
    products: [
        {
            title: "Test 1",
            description: "asd",
            price: "1200$",
            category: [{
                title: "Test 1",
            },
                {title: "Test 2"
                }]
        },
        {
            title: "Test 2",
            description: "ppp",
            price: "200$",
            category: [{
                title: "Test 1"
            }]
        }
    ],
}

export const mutations = {
    ADD_PRODUCT(state, updatedProduct) {
        state.products.push(updatedProduct);
        state.numberProducts++;
        if (state.numberColumns < updatedProduct.category.length) {
            state.numberColumns = updatedProduct.category.length;
        }
    },
    DELETE_PRODUCT(state, index) {
        state.products.splice(index, 1);
    },
}
