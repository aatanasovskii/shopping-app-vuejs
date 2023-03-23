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
                title: "test1",
            },
                {title: "test2"
                }
                ],
            published: false,
            quantity: 0,
        },
        {
            title: "Test 2",
            description: "ppp",
            price: "200$",
            category: [{
                title: "test1"
            }],
            published: true,
            quantity: 0,
        },
        {
            title: "Test 3",
            description: "test3",
            price: "500$",
            category: [{
                title: "test3"
            }],
            published: true,
            quantity: 0,
        }
    ],
}

export const getters = {
    getProducts(state) {
        return state.products;
    }
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
        state.numberProducts--;
    },
    PUBLISH_PRODUCT(state, index) {
        state.products[index].published = true;
    },
    ADD_TO_CART(state, index) {
        if (state.products[index].quantity === 0) {
            state.products[index].quantity = 1;
        };
    },
    ADD_QUANTITY(state, temp ) {
        let index = temp.index;
        let quantity = temp.quantity;
        state.products[index].quantity = quantity;
    },
}
