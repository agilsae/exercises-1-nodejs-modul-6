var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var router = require('./routers/router');

var conn = require('express-myconnection');
var mysql = require('mysql');

app.set('port', process.env.port || 7777);
app.set('view engine', 'ejs')

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(
    conn(mysql, {
        host: 'localhost',
        user: 'root',
        password: 'password',
        port: '3306',
        database:'ecommerce'
    },'single')
);

app.get('/', function(req, res){
   // res.send('server is running on port ' + app.get('port'));
   res.redirect('/home');
});

app.get('/home', router.home);
app.get('/detail_product/:id_product', router.detailProduct);

app.listen(app.get('port'), function(){
    console.log('Server is running on port '+ app.get('port'));
})

