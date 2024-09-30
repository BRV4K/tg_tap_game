//@ts-nocheck
import { initMiniApp, retrieveLaunchParams, initInitData, type InitData, postEvent } from '@telegram-apps/sdk';

export const getInitDataRaw = (): string | undefined => {
    try {
        const { initDataRaw } = retrieveLaunchParams();
        return initDataRaw
    }
    catch {
        return undefined
    }
}

export const getInitData = (): InitData | undefined => {
    try {
        const initData = initInitData();
        return initData
    }
    catch {
        return undefined
    }
}

export const getUserIdByInitData = (): number | undefined => {
    try {
        const initData = initInitData();
        return initData?.user?.id
    }
    catch {
        return undefined
    }
}

export const getStartParamRef = (): string => {

    const initData = getInitData();
    if (initData?.startParam !== undefined) {
        if (initData?.startParam.includes("ref_")) {
            return initData?.startParam.replace('ref_', '');
        } else {
            const telegramAppsLaunchParams = new URLSearchParams(sessionStorage.getItem('telegram-apps/launch-params'))
            return telegramAppsLaunchParams.get('tgWebAppStartParam')?.replace('"', '').replace('ref_', '');
        }
        return "";
    }
    return "";
}

export const isOpenTelegram = (): boolean => {
    try {

        postEvent('web_app_set_header_color', { color: '#171027' })

        const hash = window.location.hash.slice(1);
        const params = new URLSearchParams(hash);
        const tgWebAppPlatform = params.get('tgWebAppPlatform')
        if(tgWebAppPlatform === "tdesktop")
            return false
        if(tgWebAppPlatform === "macos")
            return false
        if(tgWebAppPlatform === "web")
            return false
        if(tgWebAppPlatform === "weba")
            return false

        const [miniApp] = initMiniApp()
        miniApp.ready()
        postEvent('web_app_expand')

        return true
    }
    catch {
        return false
    }
}