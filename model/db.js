var mysql = require('mysql');
var db={};
db.conn = function (){
     configdb={
          host: 'localhost',
          port: 3306,
          user: 'root',
          password: '',
          database: 'prueba_infile',
     };
     var connection  = mysql.createConnection(configdb);
        connection.connect(function (error){
            if(error){
              console.log("Ocurrio un erro en la conexion a la base de datos");
              setTimeout(db.conn(), 2000);
              return;
            }else{
              console.log("Conexion exitosa");
            }
        });
        connection.on('error',function(err){
            if(err.code === 'PROTOCOL_CONNECTION_LOST'){
                db.conn();
            }else{
              console.log(err);
              return;
            }
        });
     return connection;
}

 module.exports = db;
