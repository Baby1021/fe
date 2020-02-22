export function getUserId() {
    if (isAndroid()) {
        return window.BabyBridge.getUserId()
    }
    if (isPC()) {
        return window.localStorage.getItem('userId')
    }
}

export function isPC() {
    return !isAndroid() && !isIOS()
}

export function isIOS() {
    return /(iPhone|iPad|iPod|iOS)/.test(navigator.userAgent)
}

export function isAndroid() {
    return /(Android)/.test(navigator.userAgent)
}

