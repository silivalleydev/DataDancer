export const MENU_CHANGE = "MENU_CHANGE";

export const menuChange = (data: boolean) => {
    return {
        type: MENU_CHANGE,
        data
    }
}

