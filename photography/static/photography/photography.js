window.onload = doStuff

function doStuff() {
    var title = $("#mainTitle");
    var subTitle = $("#subTitle");
    var photoDiv = $("#photos");
    title.addClass('animateIn');
    if (document.scrollingElement.scrollTop < 150) {
  
        setTimeout(function() {subTitle.addClass('animateIn');}, 300);
        setTimeout(function() {photoDiv.addClass('animateIn');}, 1000);
    }
    else {
        subTitle.addClass('animateIn');
        photoDiv.addClass('animateIn');
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

    $("#imageModal").on("show.bs.modal", function(event) {
        var target = $(event.relatedTarget);
        var image = target.data("image");
        $(this).find(".modal-body img").attr("src", image);
    });
}

function hideModal() {
    $("#imageModal").modal("hide");
}