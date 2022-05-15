import {
    GET_ITEMS,
    ADD_ITEM,
    DELETE_ITEM,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_ITEM,
    ITEM_ERROR,
    CLEAR_ITEMS,
} from "../types";
  
const itemReducer = (state, action) => {
    switch (action.type) {
        case GET_ITEMS:
        return {
            ...state,
            items: action.payload,
            loading: false,
        };
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items],
                loading: false,
            };
        case UPDATE_ITEM:
        return {
            ...state,
            items: state.items.map((item) =>
            item._id === action.payload._id ? action.payload : item
            ),
            loading: false
        };
        case DELETE_ITEM:
        return {
            ...state,
            items: state.items.filter(
            (item) => item._id !== action.payload
            ),
            loading: false
        };
        case CLEAR_ITEMS:
            return {
                ...state, 
                items: null,
                error: null,
                current: null
            }
        case SET_CURRENT:
        return {
            ...state,
            current: action.payload,
        };
        case CLEAR_CURRENT:
        return {
            ...state,
            current: null,
        };
        case ITEM_ERROR:
        return {
            ...state,
            error: action.payload,
        };
        default:
        return state;
    }
};

export default itemReducer;