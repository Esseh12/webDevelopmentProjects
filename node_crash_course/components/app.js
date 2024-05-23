const express = require('express');

const app = express();


// register view engine
app.set('view engine', 'ejs');

// listen to port 3000
app.listen(3000);


// home page
app.get('/', (req, res) => {
    const blogs = [
        { title: 'yoshi finds eggs', snippet: 'lorem ipasum dolor sit amet consectitercs' },
        { title: 'mario finds stars', snippet: 'lorem ipasum dolor sit amet consectitercs' },
        { title: 'how to defeat broswer', snippet: 'lorem ipasum dolor sit amet consectitercs' },
    ];
    res.render('index', { blogs: blogs });
});

// about page
app.get('/about', (req, res) => {
    res.render('about', {title: 'about'});
});

//create page
app.get('/create', (req, res) => {
    res.render('create', {title: 'create a new blog'});
});

//error 404
app.use((req, res) => {
    res.status(404).res.render('404', {title: '404'});
});