var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(11);
  var button = new five.Button(2);
  var flag = false;

  button.on("press", function() {
    console.log('pressed');

    if (flag){
      led.on();
    } else {
      led.off();
    }
    
    flag = !flag;
  });
});