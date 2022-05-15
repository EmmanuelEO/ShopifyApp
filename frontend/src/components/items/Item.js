import React, { useContext } from "react";
import PropTypes from 'prop-types';
import ItemContext from '../../context/item/itemContext';

const Item = ({ item }) => {
  const itemContext = useContext(ItemContext);
  const { deleteItem, setCurrent, clearCurrent } = itemContext;

  const { _id, name, location } = item;

  const onDelete = () => {
    deleteItem(_id);
    clearCurrent();
  }

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
      </h3>
      <ul className="list">
          {location && (<li>
              <i className="fas fa-location-dot" aria-hidden="true"></i> {location}
          </li>)}
      </ul>
      <p>
          <button className="btn btn-dark btn-sm" onClick={() => setCurrent(item)}>Edit</button>
          <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
      </p>
    </div>
  );
};

Item.propTypes = {
   item: PropTypes.object.isRequired 
}

export default Item;