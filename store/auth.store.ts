interface User {
    email: string
    name: string
    id: string
    status: boolean
}


const initialState: {user: User} = {
    user: {
        email: '',
        name: '',
        id: '',
        status: false,
    }
}

export const useAuthStore = defineStore('auth', {
    state: () => initialState,
    getters: {
        currentUser: state => state.user,
        // userId: async state => {return await state.user.id},
        // userId: state => state.user.id,
    },
    actions: {
        set(user: User) {
            this.$patch({user})
        },
        clear() {
            this.$patch(initialState)
        }
    },
})