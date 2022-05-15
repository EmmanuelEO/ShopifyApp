import React, { Fragment, useContext, useEffect } from "react";
import Item from "./Item";
import ItemContext from "../../context/item/itemContext";
import Spinner from '../layout/Spinner'

const Items = () => {
  const itemContext = useContext(ItemContext);

  const { items, filtered, getItems, loading } = itemContext;

  useEffect(() => {
    getItems();
    // eslint-disable-next-line
  }, [])

  if (items !== null && items.length === 0 && !loading) {
    return <h4>Please add an inventory item</h4>;
  }

  return (
    <Fragment>
      {console.log(items)}
      {items !== null && !loading ? 
      (<Fragment>
        {filtered !== null
        ? filtered.map((item) => (
            <Item key={item._id} item={item} />
          ))
        : items.map((item) => (
            <Item key={item._id} item={item} />
        ))}
        </Fragment>)
      : <Spinner />}
      
    </Fragment>
  );
};

export default Items;