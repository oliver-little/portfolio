window.onload = doStuff

function doStuff() {
    var title = $("#mainTitle");
    var subTitle = $("#subTitle");
    var postDiv = $("#postDiv");
    title.addClass("animateUp");
    title.addClass('animateIn');
    if (document.scrollingElement.scrollTop < 150) {
  
        setTimeout(function() {subTitle.addClass('animateIn');}, 300);
        setTimeout(function() {postDiv.addClass('animateIn');}, 1000);
    }
    else {
        subTitle.addClass('animateIn');
        postDiv.addClass('animateIn');
    }

    $("#blogPostModal").on("show.bs.modal", function(event) {
        var target = $(event.relatedTarget);
        var slug = target.data("post-slug")
        $.ajax({
            type: "GET",
            url: "posts/json/" + slug,
            dataType: "JSON",
            success: function(result) {
            var jsonResult = $.parseJSON(JSON.stringify(result));
            $("#blogPostModalBody").html(jsonResult.text);
            $("#blogPostModalTitle").html(jsonResult.title);

            },
            error: function(result) {
                window.location.href = "/posts/" + slug;
            }
        });
    });
}

function hideModal() {
    $("#blogPostModal").modal("hide");
}