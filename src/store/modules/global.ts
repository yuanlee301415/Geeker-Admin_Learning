import type {GlobalStore} from "#/store";

import {defineStore} from "pinia";
import pinaPersistConfig from "@/store/helper/persist";
import {AssemblySize, Language} from "@/constants";

const ID = 'global'
export const useGlobalStore = defineStore({
    id: ID,
    state: (): GlobalStore => ({
        // 折叠菜单
        isCollapse: true,

        // ElementPlus 组件大小
        assemblySize: AssemblySize.Default,

        // ElementPlus 语言
        language: null
    }),
    actions: {
        toggleCollapse() {
            this.isCollapse = !this.isCollapse
        },
        setAssemblySize(size: AssemblySize) {
            this.assemblySize = size
        },
        setLanguage(language: Language) {
            this.language = language
        }
    },
    persist: pinaPersistConfig(ID)
})
