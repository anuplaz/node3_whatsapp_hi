const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
app.set('view engine', 'hbs')
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/sayhi',(req, res)=>{
    const phone = req.query.phno
    const msg = req.query.msg
    const url='https://wa.me/91'+phone+'?text='+msg
    res.redirect(url)
})

app.listen(port, ()=>{
    console.log('Server is running on : '+port);
})