const { connect } = require("http2");

exports.home = function (req, res) {
    req.getConnection(function (err, connect){
        var query = connect.query(`SELECT * FROM product`, function(err, rows){
            if (err){
                console.log('Err', err);
            }

            res.render('index',{
                data:rows
            });
        });
    })
}

exports.detailProduct = function(req, res) {
    var id_produk = req.params.id_product;

    req.getConnection(function(err, connect){
        var query = connect.query(`SELECT * FROM product WHERE id_porduct = ${id_produk}`, function(err, rows){
            if (err){
                console.log('Err', err);
            }

            res.render('single',{
                data:rows
            });
        });
    })
}