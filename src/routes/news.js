const express = require('express')
const routes = express.Router();
const axios = require('axios')

routes.get('',async(req,res)=>{
    

    try {
        const newsapi = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6e67390688ac427493c181354927dc0a')
        res.render('../views/news',{articles:newsapi.data.articles});
        
        
    } catch (error) {
        console.log(error);
    }
})

routes.post('',async(req,res)=>{
    let search = req.body.search
    try {
        const newsapi = await axios.get(`http://newsapi.org/v2/everything?q=${search}&apiKey=6e67390688ac427493c181354927dc0a`)
        res.render('../views/news', { articles : newsapi.data.articles })
    } catch (error) {
        console.log(error)
        
    }
})


module.exports = routes;