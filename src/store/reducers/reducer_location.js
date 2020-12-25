import actionTypes from '../actions/actionTypes';

const initialState = {
    lang: 'English',
    location: 'Tashkent',
    searchLocation: 'Whole country'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LOCATION:
            return {
                ...state,
                location: action.location
            }
        case actionTypes.CHANGE_LANG:
            return {
                ...state,
                lang: action.lang
            }
        case actionTypes.CHANGE_SEARCH_LOC:
            return {
                ...state,
                searchLocation: action.location
            }
        default: return state;
    }
};

export default reducer;