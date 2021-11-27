const express = require('express');
const app = express();
const port = 3000;



app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));
//template
app.set('views','./src/views')
app.set('view engine', 'ejs');

//Routes
const news = require('./src/routes/news');
app.use('/',news);


//listen to the port
app.listen(port,()=>{
    console.log(`listening on ${port}`);
})