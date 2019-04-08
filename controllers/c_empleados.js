var model_empleado = require('../model/m_empleados');

exports.prueba = function(req,res){
     res.status(200).json('Servicios');
}

exports.get_empleados = function(req,res){
     model_empleado.getempleados(function (error, data) {
          if (!error) {
               if (typeof data !== 'undefined' && data.length > 0) {
                    res.status(200).json(data);
               }
          }else{
                res.status(404).json({msg: "No hay registros de empleados"});
          }
     });
}

exports.crear_empleados = function(req,res){
     var empleado = {
          'nit': req.body.nit,
          'nombre': req.body.nombre,
          'pago_x_hora':req.body.pagohora
     };
     model_empleado.crear_empleados(empleado,function(error,data){
          if (!error) {
               if(data.affectedRows == 1){
                    res.status(200).json('Se inserto un nuevo empleado con el id '+data.insertId);
               }else{
                    res.status(200).json('No se logro insertar el empleado');
               }
          }else{
                res.status(404).json({msg: "No hay registros de empleados"});
          }
     })

}

exports.update_empleados = function(req,res){
     var id = req.query.id;
     var empleado = req.body;
     model_empleado.update_empleados(empleado,id,function(error,data){
          if (!error) {
               if(data.affectedRows == 1){
                    res.status(200).json('Se modifico correctamente el empleado con el id: '+id);
               }else{
                    res.status(200).json('No se logro insertar el empleado');
               }
          }else{
                res.status(404).json({msg: "No hay registros de empleados"});
          }
     })

}


exports.delete_empleados = function(req,res){
     var id = req.query.id;
     model_empleado.delete_empleados(id,function (error, data) {
          if (!error) {
               if(data.affectedRows == 1){
                    res.status(200).json('Se elimino correctamente el empleado con el '+id);
               }else{
                    res.status(200).json('No se logro eliminar el empleado con el '+id);
               }
          }else{
                res.status(404).json({msg: "No hay registros de empleados"});
          }
     });
}
