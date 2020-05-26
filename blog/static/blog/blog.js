window.onload = doStuff

function doStuff() {
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