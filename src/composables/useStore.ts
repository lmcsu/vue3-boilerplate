import { defineStore } from 'pinia';

export const useStore = defineStore('main-store', {
    state: () => {
        return {
            clicks: 0 as number,
        };
    },
});
