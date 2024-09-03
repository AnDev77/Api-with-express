const express = require('express')
const app = express()

app.listen(3001)
//https://www.youtube.com/@shortbox
//https://www.youtube.com/@dudely_08
//https://www.youtube.com/@jtbc_hms
let youtuber1 = {
    channelTitle : '숏박스',
    subscriber :'304만명',
    videoNum :  '156개'
}
let youtuber2 = {
    channelTitle : '할명수',
    subscriber :'148만명',
    videoNum :  '685개'
}

let youtuber3 = {
    channelTitle : '더들리',
    subscriber :'78만명',
    videoNum :  '463개'
}



app.get('/:nickname', function(req, res){
    // /:n ->  : 뒤에오는 것을 req.params에 n이라는 변수에 저장해준다.
    
    const {nickname} = req.params
    if (nickname == '@shortbox'){
        res.json(youtuber1)
    } else if (nickname == '@jtbc_hms'){
        res.json(youtuber2)
    } else if (nickname == '@dudely_08'){
        res.json(youtuber3)
    } else{
        res.json({
            mention : 'cannot found such channel'
        })
    }
})
