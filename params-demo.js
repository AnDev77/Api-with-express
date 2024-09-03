const express = require('express')
const app = express()

app.get('/products/:n', function(req, res){
    // /:n ->  : 뒤에오는 것을 req.params에 n이라는 변수에 저장해준다.
    // 
    let number = parseInt(req.params.n)

    if (req.params.n > 10) { // 동작이 잘된다.. javascript라서 가능한것
        console.log('it is over ten')
    }
    res.json({
        num : number
    })
})

// https://www.youtube.com/watch?v=eF1S01RzzMg&t=362s
app.get('/watch', function(req, res){
    // /:n ->  : 뒤에오는 것을 req.params에 n이라는 변수에 저장해준다.
    
    const {t, v} = req.query
    console.log(v)
    console.log(t)

    res.json({
        video : v,
        timeline : t
    })

})

app.listen(3001)