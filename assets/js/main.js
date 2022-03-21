$(function() {

    /* var sliderHeight = $(document).innerHeight() - $(".navbar").innerHeight() + "px";
    $(".main-slider").css("height", sliderHeight);
    console.log( $().innerHeight()); */


    // Start Function for Cart progress Bar

    var addBar = $("#addons-bar");

    var addBtn = $(".addons-btn");

    addBtn.on("click", function(){
        addBar.attr("value", "100");
    });
    
    // End Function for Cart progress Bar

});
