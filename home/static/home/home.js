window.onload = doStuff;

function doStuff() {

    // Animate main title with delay
    var title = $("#mainTitle");
    var subTitles = document.getElementsByClassName("subTitle");
    title.addClass('animateIn');
    var delay = 400;
    for (var i = 0; i < subTitles.length; i++){
        subTitle = subTitles[i];
        setTimeout(function(obj) {obj.classList.add('animateIn');}, delay, subTitle);
        delay += 250;
    }
    setTimeout(function() {$("#profile").addClass('animateProfileImageIn');}, delay+300);
    setTimeout(function() {$("#arrowDown").addClass('animateDownArrowIn');}, delay+800);

    var downArrowWaypoint = new Waypoint({
        element: $("#arrowDown"),
        offset: "40%",
        handler: function(direction) {
            if (direction === "down") {
                $("#arrowDown").removeClass('animateDownArrowIn');
            }
            else {
                $("#arrowDown").addClass('animateDownArrowIn');
            }
        }
    });


    var aboutPageWaypoint = new Waypoint({
        element: $("#aboutTitle"),
        offset: "50%",
        handler: function(direction) {
        $("#aboutTitle").addClass("animateIn");
        setTimeout(function() {$("#aboutPara").addClass("animateIn");}, 300);
        var rotators = document.getElementsByClassName("rotateSquare");
        var fillers = document.getElementsByClassName("fillSquare");
        var content = document.getElementsByClassName("highlightContent");
        for (var i = 0; i < rotators.length; i++) {
            setTimeout(function(rotator, filler, content) {
                rotator.classList.add("anim");
                filler.classList.add("anim");
                content.classList.add("anim");
            }, (i*400)+1000, rotators[i], fillers[i], content[i]);
        }
        this.destroy();
    }
    });

    var contactPageWaypoint = new Waypoint({
        element: $("#contactTitle"),
        offset: "80%",
        handler: function(direction) {
        $("#contactTitle").addClass("animateIn");
        var contacts = document.getElementsByClassName("contactButton");
        for (var i = 0; i < contacts.length; i++) {
            setTimeout(function(contact) {
                contact.classList.add("animateIn");
            }, (i*300)+600, contacts[i]);
            setTimeout(function(contact) {
                contact.classList.remove("animateOpacity");
                contact.classList.remove("animateIn");
                contact.classList.add("buttonHoverAnim");
            }, (i*300)+1100, contacts[i]);

        }
        this.destroy();
    }
    });
}