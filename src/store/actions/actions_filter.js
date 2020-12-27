import actionTypes from './actionTypes';

export const filterByPriceStart = (from) => {
    return {
        type: actionTypes.ON_FILTER_BY_PRICE_START,
        from
    };
};

export const filterByPriceEnd = (to) => {
    return {
        type: actionTypes.ON_FILTER_BY_PRICE_END,
        to
    };
};

export const filterBySizeStart = (from) => {
    return {
        type: actionTypes.ON_FILTER_BY_SIZE_START,
        from
    };
};

export const filterBySizeEnd = (to) => {
    return {
        type: actionTypes.ON_FILTER_BY_SIZE_END,
        to
    };
};

export const filterByCondition = (con) => {
    return {
        type: actionTypes.ON_FILTER_BY_CONDITION,
        condition: con
    };
};

export const filterByType = (type) => {
    return {
        type: actionTypes.ON_FILTER_BY_TYPE,
        fType: type
    };
};

export const sortBy = (type) => {
    return {
        type: actionTypes.ON_SORT_BY,
        sortType: type
    };
};

export const changeCardView = (view) => {
    return {
        type: actionTypes.ON_CHANGE_CARD_VIEW,
        view
    };
};

export const clearFiler = () => {
    return {
        type: actionTypes.ON_CLEAR_FILTER,
    };
};