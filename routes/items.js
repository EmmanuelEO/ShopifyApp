const express = require('express')
const res = require('express/lib/response')

const router = express.Router()

// @route       POST api/items
// @desc        Create an Inventory Item
router.post('/', (req, res) => {
    res.send('Create an inventory item.')
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