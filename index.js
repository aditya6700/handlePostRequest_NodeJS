const express = require('express');
const bodyparser = require('body-parser');
var app = express();

var urlencodedParser = bodyparser.urlencoded({ extended: false});

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('root');
});

app.get('/query', (req,res)=>{
    res.render('query');
});

app.post('/query', urlencodedParser, (req,res)=>{
    var query = req.body;   
    // console.log(query.req_time,query.req_date);
    requestedData = `your requested search period is ${query.req_sdate} -- ${query.req_stime} and 
    ${query.req_edate} -- ${query.req_etime}`;
    res.render('reqest', {data: requestedData});
});

app.listen(1432);