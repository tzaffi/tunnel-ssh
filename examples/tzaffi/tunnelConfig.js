const fs = require('fs');

//Assume you store the SSH private key for the Tunnel Server at the following full path:
const key = fs.readFileSync('/prj/.ssh/CONTINUE_PATH_TO_PRIVATE_KEY.pem');

//username - the Tunnel Server user to log in as (for ubuntu on AWS EC2 this is typically 'ubuntu')
//privateKey - the Tunnel Server user's private key as string
//host - (EXTERNAL_FORWARDING_RDS_HOST) the Tunnel Server's URL or IP address
//port - (EXTERNAL_FORWARDING_RDS_HOST) generally should be 22 (SSH port)
//dstHost - the destination non-SSH host to connect to (IP or URL)
//dstPort - the protocol to connect with (e.g. 1433 for MS-SQL, 3306 for mySQL, etc.)
//keepAlive - set to false, unless you are running several commands and want to re-use the connection
const tunnelConfig = {
  username: 'ubuntu',
  privateKey: key,
  host: TUNNEL_HOST,
  port: 22,
  dstHost: EXTERNAL_FORWARDING_RDS_HOST,
  dstPort: EXTERNAL_FORWARDING_RDS_PORT,
  keepAlive: false
};
module.exports = tunnelConfig;
