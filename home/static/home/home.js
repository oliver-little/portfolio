window.onload = doStuff

var lastScrollPos = 0;
function doStuff() {
    // Update scrollPos if it exists and user just refreshed (less than 1s since scrollPos stored)
    var scrollPos = localStorage.getItem("scrollPos");
    if (scrollPos && (Date.now() - localStorage.getItem("timeScroll")) < 1000) {
        $("#scrollDiv").scrollTop(scrollPos);
        localStorage.removeItem("scrollPos");
    }

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

    // Particles
    particlesJS("particles-js", particlesJSON);

    var particleCanvas = $(".particles-js-canvas-el");
    particleCanvas.css({
        "position": "absolute",
        "opacity": "0",
        "z-index": "-1"
    });
    $(".particles-js-canvas-el").animate({
        opacity: "1"
    }, 10000, "swing");


    // Scroll snap uses a div so store this to restore it
    $('#scrollDiv').on('scroll', function() {
        lastScrollPos = this.scrollTop;
    });

    window.addEventListener("beforeunload", doBeforeUnloading);

    var aboutPageWaypoint = new Waypoint({
        element: $("#aboutTitle"),
        offset: "50%",
        context: $("#scrollDiv"), // This page is entirely embedded inside a div, so have to set the scroller to use
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
            }, (i*400)+600, rotators[i], fillers[i], content[i]);
        }
        this.destroy();
    }
    });
}

// Hook into unload event to save current div scroll position to restore it
function doBeforeUnloading() {
    if (lastScrollPos != 0) {
        this.localStorage.setItem("scrollPos", lastScrollPos);
        this.localStorage.setItem("timeScroll", Date.now());
    }
    return null;
}

const particlesJSON = {
    "particles": {
        "number": {
            "value": 50,
            "density": {
            "enable": true,
            "value_area": 700 // Denser the smaller the number.
            }
        },
        "color": { // The color for every node, not the connecting lines.
            "value": "#102e9c" // Or use an array of colors like ["#9b0000", "#001378", "#0b521f"]
        },
        "shape": {
            "type": "circle", // Can show circle, edge (a square), triangle, polygon, star, img, or an array of multiple.
        },
        "opacity": {
            "value": 0.5,
            "random": true
        },
        "size": {
            "value": 8,
            "random": true
        },
        "line_linked": {
            "enable": false,
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "right", // Move them off the canvas, either "none", "top", "right", "bottom", "left", "top-right", "bottom-right" et cetera...
            "random": true,
            "straight": false, // Whether they'll shift left and right while moving.
            "out_mode": "out", // What it'll do when it reaches the end of the canvas, either "out" or "bounce".
            "bounce": false,
            "attract": { // Make them start to clump together while moving.
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
            }
        }
    }
}