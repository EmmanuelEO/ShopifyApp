import React, { useReducer } from "react";
import axios from "axios";
import ItemContext from "./itemContext";
import itemReducer from "./itemReducer";
import AlertContext from "../alert/alertContext";
import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_ITEM,
  FILTER_ITEMS,
  CLEAR_ITEMS,
  CLEAR_FILTER,
  ITEM_ERROR,
} from "../types";

const ItemState = (props) => {
  const initialState = {
    items: null,
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(itemReducer, initialState);

  // Get Items
  const getItems = async () => {
    try {
      const res = await axios.get("/api/items");
      dispatch({ type: GET_ITEMS, payload: res.data });
    } catch (err) {
      dispatch({ type: ITEM_ERROR, payload: err.response.msg });
    }
  };

  // Add Item
  const addItem = async (item) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/items", item, config);
      dispatch({ type: ADD_ITEM, payload: res.data });
      return "true"
    } catch (err) {
      dispatch({ type: ITEM_ERROR, payload: err.response.msg });
      return String(err)
    }
  };

  // Delete Item
  const deleteItem = async id => {
    try {
      await axios.delete(`/api/items/${id}`);
      dispatch({ type: DELETE_ITEM, payload: id });
    } catch (err) {
      dispatch({ type: ITEM_ERROR, payload: err.response.msg });
    }

    dispatch({ type: DELETE_ITEM, payload: id });
  };

  // Update Item
  const updateItem = async item => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(`/api/items/${item._id}`, item, config);
      dispatch({ type: UPDATE_ITEM, payload: res.data });
    } catch (err) {
      dispatch({ type: ITEM_ERROR, payload: err.response.msg });
    }
  };

  // Clear Items
  const clearItems = () => {
    dispatch({ type: CLEAR_ITEMS });
  };

  // Set Current Items
  const setCurrent = (item) => {
    dispatch({ type: SET_CURRENT, payload: item });
  };

  // Clear Current Item
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  return (
    <ItemContext.Provider
      value={{
        items: state.items,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addItem,
        deleteItem,
        setCurrent,
        clearCurrent,
        updateItem,
        getItems, 
        clearItems
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemState;