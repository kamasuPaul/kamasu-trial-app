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
    mutations: {
        addMemory(state, memoryData) {
            const newMemory = {
                id: new Date().toISOString(),
                title: memoryData.title,
                image: memoryData.image,
                description: memoryData.description
            };
            state.memories.unshift(newMemory);
        }
    },
    actions: {
        addMemory(context, memoryData) {
            context.commit('addMemory', memoryData);
        }
    },
    getters: {
        memories(state) {
            return state.memories;
        },
        memory(state) {
            return (memoryId) => {
                return state.memories.find((memory) => memory.id === memoryId);
            }
        }
    }
});
export default store;