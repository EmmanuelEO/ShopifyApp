const express = require('express')

const app = express()

app.get('/', (req, res) => 
    res.json({ msg: 'Wecome to the Shopify App' })
)

// Define Routes
app.use('/api/items', require('./routes/items'))

const PORT = process.env.PORT || 6000

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`))

