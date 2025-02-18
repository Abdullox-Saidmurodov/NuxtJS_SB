import type { IDeal } from '~/types'


const initialState: { deal: IDeal | null; isOpen: boolean } = {
    deal: null,
    isOpen: false,
}

export const useEditDealStore = defineStore('edit-deal', {
    state: () => initialState,
    actions: {
        clear() {
            this.$patch(initialState)
            console.log("cl")
        },
        set(deal: IDeal) {
            this.$patch({ deal: { ...deal }, isOpen: true });
            console.log("cl1", deal)
        },
        toggle() {
            this.isOpen = !this.isOpen
            console.log("cl2")
        },
    }
})