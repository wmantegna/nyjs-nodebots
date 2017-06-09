var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(11);
  var button1 = new five.Button(2);
  var button2 = new five.Button(4);
  var pushes = [];

  button1.on("press", function() {
    console.log("button1 pressed");
    pushes.push(1);
    checkOrder();
  });
  button2.on("press", function() {
    console.log("button2 pressed");
    pushes.push(2);
    checkOrder();
  });

  function checkOrder(){
    
    if (pushes.length > 2){
      var third = pushes[pushes.length-1];
      var second = pushes[pushes.length-2];
      var first = pushes[pushes.length-3];

      if (first == 1 && second == 2 && third == 1){
        led.on();
      } else {
        led.off();
      }
      
      // console.log('---');
      // console.log(pushes);
      // console.log('third='+third);
      // console.log('second='+second);
      // console.log('first='+first);
      // console.log('---');
    } else {
      console.log("pattern too short!");
    }
  }
});