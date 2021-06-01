const express = require('express');
const app = express();
const port = 3030
const path = require('path')
const views = path.join(__dirname,'views')

app.get('/',(req,res) => res.sendFile(path.join(views, 'home.html')));
app.get('/login',(req,res) => res.sendFile(path.join(views, 'login.html')))
app.get('/register',(req,res) => res.sendFile(path.join(views, 'register.html')))
app.get('/cart',(req,res) => res.sendFile(path.join(views, 'cart.html')))
app.get('/detail',(req,res) => res.sendFile(path.join(views, 'detail.html')))

app.listen(port, () => console.log('Servidor funcionando en puerto '+ port));
app.use (express.static('public'))
