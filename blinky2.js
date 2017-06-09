var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led1 = new five.Led(11);
  var led2 = new five.Led(10);

  count = 0;
  setInterval(function(){
    
    if (count % 2 == 0){
      led1.on();
      led2.off();
      console.log("on");
    } else {
      led2.on();
      led1.off();
      console.log("off");
    }

    count++;
  }, 1000);


  // document.onkeydown(function(e){
  //   if(e.keyCode === '37'){ // left arrow
  //     led1.on();
  //     led2.off();
  //   }
  //   else{
  //     led2.on();  
  //     led1.off();
  //   }
  // });


});