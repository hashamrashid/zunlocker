var hashTagActive = ""; // for use in 
 

function runStartupAnimations() {
    
    //$('.unlock-heading')
    //    .css({ opacity: 0, visibility: "visible" })
    //    .animate({ opacity: 1, visibility: "visible" },
    //    200, function () {
             
    //        var imgWidth = $(".main-phone-img").width() - 100;
    //        var pxToMove = imgWidth / 7;

    //    $('.main-phone-img').css({ opacity: 0, visibility: "visible", left: imgWidth * -1 })
    //        .animate({ opacity: 1, visibility: "visible", "left": pxToMove + 'px' }, 500);
    //            var left = $('.unlock-heading').offset().left;  // Get the calculated left position
               
    //            $(".main-phone-img")
    //});
}


function displayUnlockCodeDiv() {
    $('#unlock-result').css({ opacity: 0, display: "block" })
                       .animate({ opacity: 1, visibility: "visible" }, 1000);
}
