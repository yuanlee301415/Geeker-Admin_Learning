import {AssemblySize, Language} from "@/constants";

/**
 * 全局状态
 */
export interface GlobalStore {
    isCollapse: boolean
    assemblySize: AssemblySize
    language: Language | null
}
