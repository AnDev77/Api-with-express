const express = require('express')
const app = express()
app.listen(3005)
let snack = {
    name : 'Snack',
    price : 3000
}
let coffee = {
    name : 'Coffee',
    price : 5000
}
let water = {
    name : 'Water',
    price : 2000
}

let db = new Map()
db.set(1, snack)
db.set(2, coffee)
db.set(3, water)


app.get('/:id', function(req, res){

    let {id} = req.params
    id = parseInt(id)

    if ( !(id in db.keys)){
        res.json({
            mention : 'product is not found'
        })
    } else {

        product = db.get(id)
        product["id"] = id
        res.json(product)
    }
    
})