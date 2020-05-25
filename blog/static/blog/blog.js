window.onload = doStuff

function doStuff() {
    $("#blogPostModal").on("show.bs.modal", function(event) {
        var target = $(event.relatedTarget);
        var pk = target.data("post-pk")
        $.ajax({
            type: "GET",
            url: "posts/json/" + pk,
            dataType: "JSON",
            success: function(result) {
            var jsonResult = $.parseJSON(JSON.stringify(result));
            $("#blogPostModalBody").html(jsonResult.text);
            $("#blogPostModalTitle").html(jsonResult.title);

            },
            error: function(result) {
                window.location.href = "/posts/" + pk;
            }
        });
    });
}