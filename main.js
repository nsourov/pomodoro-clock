$(document).ready(function() {
  let count = $(".time").html();
  let breakcount = $(".breaktime").html();
  $(".stop").hide();

  //Count count Plus
  $(".plus").click(function() {
    count++;
    $(".time").html(count);
  });
  //Count count Minus
  $(".minus").click(function() {
    if (count > 0) {
      count--;
      $(".time").html(count);
    }
  });
  //Break Count count Minus
  $(".breakminus").click(function() {
    if (breakcount > 0) {
      breakcount--;
      $(".breaktime").html(breakcount);
    }
  });
  //Break Count count Plus
  $(".breakplus").click(function() {
    breakcount++;
    $(".breaktime").html(breakcount);
  });

  function breakCount() {
    if (breakcount > 0) {
      breakcount--;
      var minute = Math.floor(breakcount / 60);
      var second = breakcount % 60;
      if (second < 10) {
        $(".breaktime").html("Break Time: " + minute + ":0" + second);
      } else {
        $(".breaktime").html("Break Time: " + minute + ":" + second);
      }
    }
  }
  //Start handler
  $(".start").click(function() {
    $(this).hide();
    $("#break, .plus, .breakplus, .minus, .breakminus").hide();
    $(".stop").show();
    var timer = setInterval(countMinus, 1000);
    count *= 60;
    breakcount *= 60;
    function countMinus() {
      if (count > 0) {
        count--;
        var minute = Math.floor(count / 60);
        var second = count % 60;
        if (second < 10) {
          $(".time").html("Session Time: " + minute + ":0" + second);
        } else {
          $(".time").html("Session Time: " + minute + ":" + second);
        }
      } else {
        $("#break").show();
        $("#session").hide();
        breakCount();
      }
    }
    //Stop handler
    $(".stop").click(function() {
      $(
        ".start, #break, #session, .plus, .breakplus, .minus, .breakminus"
      ).show();
      $(this).hide();
      count = 25;
      breakcount = 5;
      $(".time").html(count);
      $(".breaktime").html(breakcount);
      clearInterval(timer);
    });
  });
});
