export const namespaced = true;

export const state = {
    numberProducts: 0,
    numberColumns: 0,
    productsCart: [
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
            quantity: 1,
        }
    ],
}

export const getters = {
    getProducts(state, getters, rootState) {
        return rootState.products.products;
    }
}

export const mutations = {
    ADD_TO_CART(state, newCart) {
        if (state.products[newCart.index].quantity === 0) {
            state.products[newCart.index].quantity = 1;
        };
        state.products.push(newCart);
        state.numberProducts++;
        if (state.numberColumns < newCart[0].category.length) {
            state.numberColumns = newCart[0].category.length;
        }
    },
    ADD_QUANTITY(state, temp ) {
        let index = temp.index;
        let quantity = temp.quantity;
        state.products[index].quantity = quantity;
    },
}
