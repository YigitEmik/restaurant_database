const express = require('express');
const mongoose = require('mongoose');
const restaurantRouter = require('./routes/restaurantRouter.js');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://yigitemik:34ygt44B@cluster0.ipxs6is.mongodb.net/w2023_comp3133?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(success => {
    console.log('Success Mongodb connection')
}).catch(err => {
    console.log('Error Mongodb connection')
})

app.use(restaurantRouter)

app.listen(3000, () => { console.log('Server is running...') })