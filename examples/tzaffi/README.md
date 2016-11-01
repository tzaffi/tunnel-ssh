# Tunneling to Private Subnets in Node

## Run with
```
node runRDSqueryThruSSHtunnel.js
```

## Source Code Overview

* `runRDSqueryThruSSHtunnel.js`  - main entry point for code. Run with `node runRDSqueryThruSSHtunnel.js`
* `tunnelConfig.js` - SSH tunnel configuration, assuming that you are connecting using no password and only a private-public key pair
* `rdsConnectAndQuery.js` - custom code that will be run locally but piped remotely. Return a runnable function to be wrapped inside of the `tunnel()`
* `rdsConfig.js` - the configuration for the custom code. Note that the host is typically set to `localhost` (`127.0.0.1`)