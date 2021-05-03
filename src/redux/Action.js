import * as actions from "../redux/ActionType";
import { GET_API } from "../services/ApiServices";

export const getDetails = (url) => {
  return async (dispatch) => {
    dispatch({ type: actions.GET_REQUEST });

    try {
      const res = await GET_API(url);
      const { data } = res;
      dispatch({ type: actions.GET_SUCCESS, payload: data.hits });
    } catch (e) {
      dispatch({ type: actions.GET_FAILURE, error: e });
    }
  };
};
