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
    if (db.get(id) == undefined){
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
    var channels = {}
    db.forEach((value, key) => {
        channels[key] = value
    })
    res.json(channels)
    
})

app.post('/youtuber', (req, res)=>{
    const {channelTitle, subscriber, videoNum} = req.body
    let tempYoutuber = {
        channelTitle : channelTitle,
        subscriber : subscriber,
        videoNum : videoNum
    }
    db.set(id++ , req.body)
    res.json({
        message: `${db.get(id-1).channelTitle} 님의 유튜버 생활을 응원합니다.`
    })
    console.log(db)

})

app.delete('/youtubers/:id', (req, res) => {

    let {id} = req.params
    id = parseInt(id)
    if (!(db.get(id) == undefined)){
        let name = db.get(id).channelTitle
        db.delete(id)
        res.json({
            message : `${name} 님의 계정을 삭제했습니다.`
        })
    } else {
        res.json({
            message : `id 가 ${id}인 유튜버를 찾을 수 없습니다.`
        })
    }    

})

app.delete('/youtubers', (req, res) => {
    
    
    if (db.size > 0) {
        for (let key of db.keys()){
        db.delete(key)
        }
        res.json({
            message : '모든 유튜버가 삭제 됐습니다.'
        })
    
    } else{
        res.json({
            message : '삭제할 유튜버가 없습니다.'
        })
    }
})

app.put('/youtubers/:id', (req, res) => {
    let {id} = req.params
    const newTitle = req.body.channelTitle
    id = parseInt(id)
    let tempYoutuber = db.get(id)
    if (tempYoutuber == undefined){
        res.json({
            message : "해당 유튜버를 찾을 수 없습니다."
        })
    } else {
        xTitle = db.get(id).channelTitle
        tempYoutuber.channelTitle = newTitle
        db.set(id, tempYoutuber)
        res.json({
            massge : `${xTitle} 님의 채널명이 ${newTitle}로 변경 되었습니다.`
        })
        }
})