export const namespaced = true;

export const state = {
    numberCategories: 0,
    categories: [
        {
            title: "Test 1",
            description: "asd",
        },
        {
            title: "Test 2",
            description: "ppp",
        }
    ],
}

export const mutations = {
    ADD_CATEGORY(state, updatedCategory) {
        state.categories.push(updatedCategory);
        state.numberCategories++;
    }
}
