import actionTypes from './actionTypes';

export const changeLocation = (location) => {
    return {
        type: actionTypes.CHANGE_LOCATION,
        location
    }
};

export const changeLanguage = (lang) => {
    return {
        type: actionTypes.CHANGE_LANG,
        lang
    }
};

export const changeSearchLoc = (location) => {
    return {
        type: actionTypes.CHANGE_SEARCH_LOC,
        location
    }
};