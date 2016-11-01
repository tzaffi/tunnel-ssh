//NOTE that typically you'll want to set the host parameter
//for the connection string to be 127.0.0.1 (localhost) as
//the connection is happening locally.
//If you have are actually connecting to a third server through the second
//as intermediary, then you would set the host to an external address
//
// DATABASE_USER - the name of your db user (e.g. "root")
// DATABASE_PWD - the password for the user
// DATABASE_HOST - for tunneling applications this is typical localhost (127.0.0.1)
// DATABASE_DB - the database to connect to on the host (e.g. "System")
const rdsConnectionString = 'mssql://DATABASE_USER:DATABASE_PWD@DATABASE_HOST/DATABASE_DB';
module.exports = rdsConnectionString;
