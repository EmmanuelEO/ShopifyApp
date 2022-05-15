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

        res.json(item)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
})

// @route       PUT api/items/:id
// @desc        Edit an Inventory Item
router.put('/:id', async (req, res) => {
    const { name } = req.body

    // Creating a new inventory item
    const newItem = {}
    if (name) newItem.name = name

    try {
        let item = await Item.findById(req.params.id)

        if (!item) {
            return res.status(404).json({ msg: "Item not found" })
        }

        item = await Item.findByIdAndUpdate(req.params.id, 
            { $set: newItem },
            { new: true })
        
        res.json(item)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
})


// @route       GET api/items
// @desc        View all Inventory Items
router.get('/', async (req, res) => {
    try {
        const item = await Item.find().sort({ date: -1 })
        res.json(item)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route       DELETE api/items/:id
// @desc        Delete an Inventory Item
router.delete('/:id', async (req, res) => {
    try {
        let item = await Item.findById(req.params.id)

        if (!item) {
            return res.status(404).json({ msg: "Item not found" })
        }

        await Item.findByIdAndRemove(req.params.id)
        
        res.json({ msg: 'Item has now been removed.' })
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
})

module.exports = router 