import actionTypes from '../actions/actionTypes';

const initialState = {
    search: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ON_SEARCH_INPUT:
            return {
                ...state,
                search: action.search
            }
        default: return state;
    }
};

export default reducer;