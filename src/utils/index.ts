import {Language} from "@/constants";

/**
 * 获取浏览器语言
 */
export function getBrowserLanguage(): Language {
    const browserLanguage = window.navigator.language ? window.navigator.language : window.navigator.browserLanguage
    return ['cn', 'zh', 'zh-cn'].includes(browserLanguage.toLowerCase()) ? Language.Zh : Language.En
}
