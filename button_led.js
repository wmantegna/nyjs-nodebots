var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(11);
  var button = new five.Button(2);

  button.on("press", function() {
    led.on();
    console.log('pressed');
  });

  button.on("hold", function() {
    led.blink(50);
    console.log('held');
  });

  button.on("release", function() {
    led.stop().off();
    console.log('released');
  });
});