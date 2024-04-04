import type { PersistedStateOptions } from 'pinia-plugin-persistedstate'

/**
 * Pina 持久化配置
 * @param key 持久化的 key
 * @param paths 持久化的 state name
 */
export default function pinaPersistConfig(key: string, paths?: string[]): PersistedStateOptions {
  return {
    key,
    storage: window.localStorage,
    paths
  }
}
