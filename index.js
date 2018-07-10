var Cylon = require('cylon');

Cylon.robot({
  connections: {
    bluetooth: { adaptor: 'central', uuid: 'dc232167a24e460b9cf6a4d242499da0', module: 'cylon-ble'}
  },

  devices: {
    ollie: { driver: 'ollie'}
  },

  work: function(my) {
     my.ollie.color(0x00FFFF);

    after(500, function() {
      my.ollie.color(0xFF0000);
    });

    every((1).second(), function() {
      my.ollie.roll(160, Math.floor(Math.random() * 360));
    });
  }
}).start();
