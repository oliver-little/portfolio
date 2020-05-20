window.onload = doStuff

function doStuff() {
    var title = $("#mainTitle");
    var subTitles = document.getElementsByClassName("subTitle");
    title.addClass('animateIn');
    var delay = 400;
    if (document.scrollingElement.scrollTop < 150) {
        for (var i = 0; i < subTitles.length; i++){
            subTitle = subTitles[i];
            setTimeout(function(obj) {obj.classList.add('animateIn');}, delay, subTitle);
            delay += 250;
        }
        setTimeout(function() {$("#profile").addClass('animateProfileImageIn');}, delay+300);
    }
    else {
        for (var i = 0; i < subTitles.length; i++) {
            subTitles.addClass('animateIn');
        }
        $("#profile").addClass('animateProfileImageIn');
    }

    /*var scrollBtnWaypoint = $("#scrollBtn").waypoint(function(direction) {
        if (direction == 'down') {
            $(this.element).addClass("hide");
        }
        else {
            $(this.element).removeClass("hide");
        }
    }, {
        offset: "50%"
    }
    );*/

    $("#scrollBtn").click(function() {
        $("html, body").animate({
            scrollTop: 0}, 1500);
    });
}