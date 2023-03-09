export const namespaced = true;

export const state = {
    numberCategories: 0,
    categories: [
        {
            title: "test1",
            description: "asd",
        },
        {
            title: "test2",
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
