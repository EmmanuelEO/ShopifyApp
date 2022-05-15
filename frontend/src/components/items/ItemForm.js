import React, { useState, useContext, useEffect } from 'react'
import ItemContext from '../../context/item/itemContext'

const ItemForm = () => {
  const itemContext = useContext(ItemContext)

  const { addItem, updateItem, clearCurrent, current } = itemContext

  useEffect(() => {
    if (current !== null) {
      setItem(current)
    } else {
      setItem({
        name: '',
        location: ''
      })
    }
  }, [itemContext, current])

  const [item, setItem] = useState({
    name: '',
    location: ''
  })

  const { name, location } = item

  const onChange = (e) => setItem({ ...item, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    if (current === null) {
      addItem(item)
    } else {
      updateItem(item)
    }
    clearAll()
  }

  const clearAll = () => {
    clearCurrent()
  }

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit Inventory Item' : 'Add Inventory Item'}
      </h2>
      <input
        type='text'
        placeholder='Item Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type="text"
        name="location"
        placeholder="Inventory Location"
        value={location}
        onChange={onChange}
      />
      <div>
        <input
          type="submit"
          value={current ? "Update Item" : "Add Item"}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  )
}

export default ItemForm
