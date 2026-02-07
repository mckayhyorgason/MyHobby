// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$("#calc").click(function () {
    let hours = parseInt($("#hours").val())
    
    if (isNaN(hours) || hours <= 0 ) {
        alert("Please enter a positive number of hours.");
        return;
    }
    
    let rate = 50;
    let total = hours * rate;
    $("#total").text("$" + total);
})