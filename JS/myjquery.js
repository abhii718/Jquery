$(document).ready(function () {
  console.log("We are using JQuery");
  /*

 // Mouse events = click, dubleclick,mouseenter, mouseleave
  // KeyboardEvent = keypress, keydown, MediaKeuStatusMap
  // form events = submit, change, focus , blur
  // documentwindow events = load , resize , scroll, upload

  // Element selectors
  $("p").click(function () {
    // console.log("You clicked on p");
    // $(this).hide() // To hide only clicked p
  });

  $("p").dblclick(function () {
    console.log("You double on p");
  });

  $("p").mouseenter(function () {
    console.log("Your mouse is on P");
  });

  $("p").mouseleave(function () {
    console.log("You removed your mouse");
  });
  
  $("p").mousedown(function () {
    console.log("You clicked with mouse");
  });

  // You remove your finger after clicked with mouse
  $("p").mouseup(function () {
    console.log("You leave you mouse buttun");
  });

  $("p").hover(function () {
    console.log("Hovering");
  });
  */
  // // id selectors
  // $("#id").click(function () {
  //     console.log("You clicked on element with id 'id'");
  //     // $(this).hide();
  // });

  // // class selectors
  // $(".class").click(function () {
  //     console.log("You clicked on element with class 'class'");
  //     // $(this).hide();
  // });

  // demoing the on method < you can multiple evetns attacked with it
  $("p").on({
    click: function () {
      console.log("Thanks for clicking", this);
    },
    mouseleave: function () {
      console.log("mouseleave");
    },
  });
  // $("#wiki").hide(5000, function () {
  //   console.log("hidden");
  // });

  // $("#wiki").show(5000, function () {
  //   console.log("show");
  // });

  $("#but").click(function () {
    // $("#wiki").toggle(5000);
    // $("#wiki").fadeToggle(5000);
    // $("#wiki").slideToggle(5000);
    // animate function in jQuery
    // $("#wiki").animate({
    //   opacity: 1,
    //   height: "250px",
    //   width: "350px",
    // },3000)
    //  another way
    // $("#wiki").animate({ opacity: 0.3 }, 4000);
    // $("#wiki").animate({ opacity: 1 }, 4000);
    // $("#wiki").animate({ width: "350px" }, 4000);
    // $("#wiki").animate({ height: "250px" }, 4000);

    $("#ta").val("setting it COBRAAAA");
    $("#inp").val("setting it to COBRAAAA");
    $("#wiki").css("background-color", "red");
  });
});
