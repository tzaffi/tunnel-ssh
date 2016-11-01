const tunnel = require('./index.js');
const tunnelConfig = require('./tunnelConfig.js');
console.log("tunnelConfig:\n%j", tunnelConfig);

const sqlRunner = require('./rdsConnectAndQuery.js');
var tnl = tunnel(
  tunnelConfig,
  (err, tnl) => {
    if(err) {
      console.log("SSH Tunnel encountered and the following err: %j", err)
    } else {
      sqlRunner();
    }
  });

