import {
    createStore
} from 'vuex'
const store = createStore({
    state() {
        return {
            memories: [{
                    id: "m1",
                    title: "First tile",
                    image: "https://images.freeimages.com/images/large-previews/b3d/flowers-1375316.jpg",
                    description: "this was a really nice trip",
                },
                {
                    id: "m2",
                    title: "Surfing tile",
                    image: "https://images.freeimages.com/images/large-previews/b3d/flowers-1375316.jpg",
                    description: "this was a really nice trip",
                },
                {
                    id: "m3",
                    title: "Coding at don",
                    image: "https://images.freeimages.com/images/large-previews/b3d/flowers-1375316.jpg",
                    description: "this was a really nice trip",
                },
                {
                    id: "m4",
                    title: "Fresh food",
                    image: "https://images.freeimages.com/images/large-previews/b3d/flowers-1375316.jpg",
                    description: "this was a really nice trip",
                },
                {
                    id: "5",
                    title: "FREsh bech winds",
                    image: "https://images.freeimages.com/images/large-previews/b3d/flowers-1375316.jpg",
                    description: "this was a really nice trip",
                },
            ],
        }
    },
    getters: {
        memories(state) {
            return state.memories;
        }
    }
});
export default store;