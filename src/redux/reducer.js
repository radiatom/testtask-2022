import { getFirstPageUsers, getNextPage } from "../api/api";

const initialState = {
    dataFirstPageUsers: {links:{next_url:''},users:[]},
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "getFirstPage":
            return { ...state, dataFirstPageUsers: action.data };
            case "getNextPage":
            return { ...state,dataFirstPageUsers: {...state.dataFirstPageUsers ,users:[...state.dataFirstPageUsers.users, ...action.data.users],links:{next_url:action.data.links.next_url} }};
        default:
            return state;
    }
};

export const getPage = () => async (dispatch) => {
    const data = await getFirstPageUsers();
    dispatch({ type: "getFirstPage", data: data });
};
export const addNextPage = (url) => async (dispatch) => {
    const data = await getNextPage(url);
    dispatch({ type: "getNextPage", data: data });
};
export default reducer;
