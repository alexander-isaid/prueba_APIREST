var db = require('../model/db');

var userModel = {};

userModel.getempleados = function (callback){
    var connmysql = db.conn();
    if (connmysql){
        var sql = `SELECT e.nombre,e.nit,e.pago_x_hora FROM empleados as e`;
          connmysql.query(sql, function (error, row){
          if (error) {
               return console.log("Query failed. Error: %s. query: %s",error,sql);
          }else{
               callback(null, row);
          }
        });
        connmysql.end();
    }
}

userModel.getOneEmpleado = function(id,callback){
     var connmysql = db.conn();
     if (connmysql){
         var sql = `SELECT * FROM empleados WHERE empleado_id= `+connmysql.escape(id);
           connmysql.query(sql,function (error, row){
           if (error) {
                return console.log("Query failed. Error: %s. query: %s",error,sql);
           }else{
                callback(null, row);
           }
         });
         connmysql.end();
     }
}

userModel.crear_empleados = function (datos_empleado,callback){
    var connmysql = db.conn();
    if (connmysql){
        var sql = `INSERT INTO empleados set ?`;
          connmysql.query(sql,datos_empleado ,function (error, row){
          if (error) {
               return console.log("Query failed. Error: %s. query: %s",error,sql);
          }else{
               callback(null, row);
          }
        });
        connmysql.end();
    }
}

userModel.update_empleados = function (id,datos_empleado,callback){
    var connmysql = db.conn();
    var datos = [id,datos_empleado];
    if (connmysql){
        var sql = `UPDATE empleados SET ? WHERE empleado_id = ?`;
          connmysql.query(sql,datos,function (error, row){
          if (error) {
               return console.log("Query failed. Error: %s. query: %s",error,sql);
          }else{
               callback(null, row);
          }
        });
        connmysql.end();
    }
}

userModel.delete_empleados = function (id,callback){
    var connmysql = db.conn();
    if (connmysql){
        var sql = `DELETE FROM empleados WHERE empleado_id =`+connmysql.escape(id);
          connmysql.query(sql, function (error, row){
          if (error) {
               return console.log("Query failed. Error: %s. query: %s",error,sql);
          }else{
               callback(null, row);
          }
        });
        connmysql.end();
    }
}

userModel.calculo_sueldos = function (calculos,callback){
    var connmysql = db.conn();
    if (connmysql){
        var sql = `INSERT INTO sueldos set ?`;
          console.log(calculos);
          connmysql.query(sql,calculos,function (error, row){
               if (error) {
                    return console.log("Query failed. Error: %s. query: %s",error,sql);
               }else{
                    callback(null, row);
               }
          });
        connmysql.end();
    }
}


//exportamos el objeto para tenerlo disponible en la zona de rutas
module.exports = userModel;
