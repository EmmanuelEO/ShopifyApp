import React, { useContext, useRef } from 'react'
import ItemContext from '../../context/item/itemContext'

const ItemFilter = () => {
    const itemContext = useContext(ItemContext);
    const text = useRef('');

    const { filterItems, clearFilter } = itemContext;

    const onChange = e => {
        if (text.current.value !== '') {
            filterItems(e.target.value);
        } else {
            clearFilter();
        }
    }

    return (
        <form>
            <input ref={text} type="text" placeholder='Filter Items...' onChange={onChange}/>
        </form>
    )
}

export default ItemFilter
