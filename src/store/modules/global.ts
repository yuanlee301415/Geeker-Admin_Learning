import type {GlobalStore} from "#/store";

import {defineStore} from "pinia";
import pinaPersistConfig from "@/store/helper/persist";
import {AssemblySize} from "@/constants";

const ID = 'global'
export const useGlobalStore = defineStore({
    id: ID,
    state: (): GlobalStore => ({
        // 折叠菜单
        isCollapse: true,

        // 组件大小
        assemblySize: AssemblySize.Default
    }),
    actions: {
        toggleCollapse() {
            this.isCollapse = !this.isCollapse
        },
        setAssemblySize(size: AssemblySize) {
            this.assemblySize = size
        }
    },
    persist: pinaPersistConfig(ID)
})
