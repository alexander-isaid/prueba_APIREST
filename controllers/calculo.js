var model_empleado = require('../model/m_empleados');

exports.calculo_sueldo = function(req,res){
     var id = req.query.id;
     var horatrabajo = req.body.horas;
     var IGSS = 0.04;
     //var pagohora = req.boby.pagohora;
     model_empleado.getOneEmpleado(id,function (error, data) {
          if (!error) {
                    var pagohora = data[0].pago_x_hora;
                    var sueldoBruto  = pagohora * horatrabajo;
                    var total_igss   = sueldoBruto * IGSS;
                    var sueldoNeto   = sueldoBruto - total_igss;
                    var datosCalculos = {
                         'empleado_id':data[0].empleado_id,
                         'horas_trabajadas':horatrabajo,
                         'subtotal':sueldoBruto,
                         'igss':total_igss,
                         'total':sueldoNeto
                    };
                    model_empleado.calculo_sueldos(datosCalculos,function(erro,data){
                         if (!error) {
                              if(data.affectedRows == 1){
                                   res.status(200).json('Se realizaron los calculos para el empledo con id '+id);
                              }else{
                                   res.status(200).json('No se logro insertar el empleado');
                              }
                         }else{
                               res.status(404).json({msg: "No hay registros de empleados"});
                         }
                    })

          }else{
                res.status(404).json({msg: "No hay registros de empleados"});
          }
     });
}
