$(function () {

    // Initialise the UI
    var initUi = function () {
        popupHandler();
    };
    

    var popupHandler = function () {
        // Slide up the  notification on click
        $('.notification').on ('click', function () {
            // If there is a queue of 'fx', we dequeue the current notification immediately, rather than waiting for the delay
            $('.notification').dequeue ();
            $('.notification').slideUp ('slow');
        });
    };

    // Main entrance
    initUi();
});
