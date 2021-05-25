import {UIAction, UIActionTypes, UIStateType} from "../../reducers/UIReducer";

export function openSidebar(payload = null) : UIAction {
    return {
        type: UIActionTypes.openSidebar,
        payload
    }
}

export function closeSidebar(payload = null) : UIAction {
    return {
        type: UIActionTypes.closeSidebar,
        payload
    }
}

export function toggleSidebar(payload = null) : UIAction {
    return {
        type: UIActionTypes.toggleSidebar,
        payload
    }
}


export function setCurrentPage(payload: UIStateType['currentPage']) : UIAction {
    return {
        type: UIActionTypes.currentPage,
        payload
    }
}
