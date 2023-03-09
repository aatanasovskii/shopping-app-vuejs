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
        },
        {
            title: "Test 2",
            description: "ppp",
            price: "200$",
            category: [{
                title: "test1"
            }],
            published: true,
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
        state.numberProducts--;
    },
    PUBLISH_PRODUCT(state, index) {
        state.products[index].published = true;
    },
}
