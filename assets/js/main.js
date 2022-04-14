$(function() {
  // Start Function to calculate main section height
  var navHeight = $("#navigator")
    .innerHeight();
  var mainSection = $("#main-slider");
  var mainSectionHeight = window.innerHeight - navHeight + "px";
  mainSection.css("height", mainSectionHeight);
  // End Function to calculate main section height
  // Start Function for Cart progress Bar
  var addBar = $("#addons-bar");
  var addBtn = $(".addons-btn");
  addBtn.on("click", function() {
    addBar.attr("value", "100");
  });
  // End Function for Cart progress Bar
  // Start Function for Cart increment
  var btnPlus = $(".incer-btn");
  var btnMinus = $(".decer-btn");
  btnPlus.click(function() {
    var value = $(this)
      .siblings("input")
      .val();
    console.log(value);
    value = parseInt(value) + 1;
    return console.log(value);
  });
  btnMinus.click(function() {});
  // End Function for Cart increment
});
