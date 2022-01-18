'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on pacprotocoljs-p2p Module {0}'
};

module.exports = require('@pacprotocol/pacprotocoljs').errors.extend(spec);
