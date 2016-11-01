//This is an example for connecting to an MS-SQL server.
//Similar examples can be constructed for other database servers or any locally runnable command.
const yourDatabaseDBname = DBNAME;

const sql = require('mssql');
const connectString = require('./rdsConfig.js');
const sqlQuery = `SELECT TABLE_NAME FROM ${yourDatabaseDBname}.INFORMATION_SCHEMA.Tables WHERE TABLE_TYPE = \'BASE TABLE\'`;
console.log('connectString is:\n' + connectString);

//Wrap your code inside of a runner function which will be run inside the
//tunnel code.
const sqlRunner = function() {
  sql.connect(connectString)
    .then(function() {
      new sql.Request().query(sqlQuery)
        .then(function(recordset) {
          console.log("Using query:\n%s\nRetrieved:", sqlQuery);
          console.dir(recordset);
        })
        .catch(function(err) {
          console.log('Error during query() is:' + err);
        });
    })
    .then(() => sql.close())
    .catch(function(err) {
      console.log('Error during connect() is:' + err);
    });
};
module.exports = sqlRunner;
