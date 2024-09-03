const express = require('express')
const app = express()
const port = 3000
app.listen(3000, ()=>{
    console.log(`youtuber app litsening on ${port}`)
})

app.use(express.json())

let youtuber1 = {
    channelTitle : '숏박스',
    subscriber :'304만명',
    videoNum :  156
}
let youtuber2 = {
    channelTitle : '할명수',
    subscriber :'148만명',
    videoNum :  685
}

let youtuber3 = {
    channelTitle : '더들리',
    subscriber :'78만명',
    videoNum :  463
}
var id = 1
db = new Map()
db.set(id++, youtuber1)

db.set(id++, youtuber2)

db.set(id++, youtuber3)

app.get('/youtubers/:id', (req, res) => {
    let {id} = req.params
    id = parseInt(id)
    const youtuber = db.get(id) 
    if (!(id in db.keys)){
        res.json({
            message : '해당 유튜버를 찾지 못했습니다.'
        })
    }
    else {
        youtuber['id'] = id
        res.json(youtuber)
    }
})

app.get('/youtubers', (req, res) => {
    res.json(db)
})

app.post('/youtuber', (req, res)=>{
    const {channelTitle, subscriber, videoNum} = req.body
    let tempYoutuber = {
        channelTitle : channelTitle,
        subscriber : subscriber,
        videoNum : videoNum
    }
    db.set(id++, req.body)
    res.json({
        message: `${db.get(id-1).channelTitle} 님의 유튜버 생활을 응원합니다.`
    })

})
