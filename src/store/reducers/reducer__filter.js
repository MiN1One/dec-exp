import actionTypes from '../actions/actionTypes';

const initialState = {
    condition: 'all',
    view: 'grid',
    type: 'all',
    sort: 'date',
    price: {
        from: '',
        to: ''
    },
    size: {
        from: '',
        to: ''
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ON_FILTER_BY_PRICE_START:
            return {
                ...state,
                price: {
                    ...state.price,
                    from: action.from,
                }
            };
        case actionTypes.ON_FILTER_BY_PRICE_END:
            return {
                ...state,
                price: {
                    ...state.price,
                    to: action.to
                }
            };
        case actionTypes.ON_FILTER_BY_SIZE_START:
            return {
                ...state,
                size: {
                    ...state.size,
                    from: action.from
                }
            };
        case actionTypes.ON_FILTER_BY_SIZE_END:
            return {
                ...state,
                size: {
                    ...state.size,
                    to: action.to
                }
            };
        case actionTypes.ON_FILTER_BY_CONDITION:
            return {
                ...state,
                condition: action.condition
            };
        case actionTypes.ON_FILTER_BY_TYPE: 
            return {
                ...state,
                type: action.fType
            }
        case actionTypes.ON_SORT_BY: 
            return {
                ...state,
                sort: action.sortType
            }
        case actionTypes.ON_CHANGE_CARD_VIEW: 
            return {
                ...state,
                view: action.view
            }
        case actionTypes.ON_CLEAR_FILTER: 
            return {
                ...state,
                view: 'grid',
                condition: 'all',
                type: 'all',
                sort: 'date',
                price: {
                    from: '',
                    to: ''
                },
                size: {
                    from: '',
                    to: ''
                }
            }
        default: return state;
    }
};

export default reducer;