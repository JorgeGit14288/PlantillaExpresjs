const sql = require('mssql');
const config = require('../../configDb');
var respuesta = {};


function execute(query, params) {
    console.log('Estoy en conexion ');
    new sql.ConnectionPool(config).connect().then(pool => {
        return pool.request().execute("spGetTest")
    }).then(result => {
        respuesta = result.recordset;
        console.log("Consulta::::", respuesta);
        return respuesta;
        sql.close();
    }).catch(err => {
        console.log(err);
        respuesta = err;
        return respuesta;
        sql.close();
    });
}
/** 
    sql.connect(config).then(pool => {

        // Stored procedure 

        return pool.request()
            //.input('input_parameter', sql.Int, value)
            //.output('output_parameter', sql.VarChar(50))
            .execute('spGetTest')
    }).then(result => {
        //console.dir(result);
        return respuesta = result.recordset;
        sql.close();
    }).catch(err => {
        // ... error checks 
        console.log('Error catch', err)
        return err;
        sql.close();
    })

    sql.on('error', err => {
            // ... error handler 
            console.log('Error sql', err)
            return err;
            sql.close();
        })
        // return respuesta;
        */


module.exports.Execute = execute;