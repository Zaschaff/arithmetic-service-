const express=require('express');
const cors= rquire('cors')
const app=express();
const port=3000;
app.use(cors())
app.get('/0',(req,res)=>{
    res.send('Arthimetic service- Hello World!')
});

app,get('add/:n/:m',(req,res)=>{
    res.json(Number(req.params.n)+Number(req.params.m));
    });
app.listen(port);
