const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const { body, validationResult } = require('express-validator');

const item = require('../models/Item')

// @route       POST api/items
// @desc        Create an Inventory Item
router.post('/', [
    body('name', "Item's name is required").not().isEmpty()
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    
})

// @route       PUT api/items/:id
// @desc        Edit an Inventory Item
router.post('/:id', (req, res) => {
    res.send('Edit an inventory item.')
})


// @route       GET api/items
// @desc        View all Inventory Items
router.get('/', (req, res) => {
    res.send('Create an inventory item.')
})

// @route       DELETE api/items/:id
// @desc        Delete an Inventory Item
router.post('/:id', (req, res) => {
    res.send('Delete an inventory item.')
})

module.exports = router 