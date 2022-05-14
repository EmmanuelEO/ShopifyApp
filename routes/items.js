const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const { body, validationResult } = require('express-validator');

const Item = require('../models/Item')

// @route       POST api/items
// @desc        Create an Inventory Item
router.post('/', [
    body('name', "Item's name is required").not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { name } = req.body

    try {
        let item = await Item.findOne({ name })

        if (item) {
            return res.status(400).json({ msg: 'The item already exists' })
        }

        item = new Item({ name })

        await item.save()

        res.send('Item has been saved.')
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
})

// @route       PUT api/items/:id
// @desc        Edit an Inventory Item
router.put('/:id', (req, res) => {
    res.send('Edit an inventory item.')
})


// @route       GET api/items
// @desc        View all Inventory Items
router.get('/', async (req, res) => {
    
})

// @route       DELETE api/items/:id
// @desc        Delete an Inventory Item
router.post('/:id', (req, res) => {
    res.send('Delete an inventory item.')
})

module.exports = router 