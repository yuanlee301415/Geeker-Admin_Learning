import type {GlobalStore} from "#/store";

import {defineStore} from "pinia";
import pinaPersistConfig from "@/store/helper/persist";

const ID = 'global'
export const useGlobalStore = defineStore({
    id: ID,
    state: (): GlobalStore => ({
        // 折叠菜单
        isCollapse: true
    }),
    actions: {
        toggleCollapse() {
            this.isCollapse = !this.isCollapse
        }
    },
    persist: pinaPersistConfig(ID)
})
