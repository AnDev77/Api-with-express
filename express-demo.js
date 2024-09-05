const express = require('express')
const app = express()
app.get('/', function (req, res) {
    res.send('Hello World!');
    }
)
//예외처리

app.listen(3000, () => {
    console.log('listening at 3000')
})