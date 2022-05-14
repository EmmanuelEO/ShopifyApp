const express = require('express')
const connectDB = require('./config/db')

const app = express()

// Connect Database
connectDB()

app.get('/', (req, res) => 
    res.json({ msg: 'Wecome to the Shopify App' })
)

// Initialize Middleware
app.use(express.json({ extended: false }))

// Define Routes
app.use('/api/items', require('./routes/items'))

const PORT = process.env.PORT || 6000

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`))

