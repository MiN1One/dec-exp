import actionTypes from './actionTypes';

export const changeSearchInput = (input) => {
    return {
        type: actionTypes.ON_SEARCH_INPUT,
        search: input
    }
};
