const express = require('express');
const app = express();
const port = 3030
const path = require('path')
const views = path.join(__dirname,'views')

app.get('/',(req,res) => res.sendFile(path.join(views, 'index.html')));
app.get('/azathoth',(req,res) => res.sendFile(path.join(views, 'azathoth.html')))
app.get('/cthulhu',(req,res) => res.sendFile(path.join(views, 'cthulhu.html')))
app.get('/dagon',(req,res) => res.sendFile(path.join(views, 'dagon.html')))
app.get('/nyarlathotep',(req,res) => res.sendFile(path.join(views, 'nyarlathotep.html')))
app.get('/ygolonac',(req,res) => res.sendFile(path.join(views, 'ygolonac.html')))
app.get('/nightgaunts',(req,res) => res.sendFile(path.join(views, 'nightgaunts.html')))

app.listen(port, () => console.log('Servidor funcionando en puerto '+ port));
app.use (express.static('public'))
