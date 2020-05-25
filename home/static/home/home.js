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

    // Particles
    particlesJS("particles-js", particlesJSON);

    var particleCanvas = $(".particles-js-canvas-el");
    particleCanvas.css({
        "position": "fixed",
        "opacity": "0",
        "z-index": "-1"
    });
    document.getElementsByClassName("particles-js-canvas-el")[0].setAttribute("height", window.innerHeight);

    particleCanvas.animate({
        opacity: "1"
    }, 10000, "swing");

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
                contact.classList.add("contactButtonHoverAnim");
            }, (i*300)+1100, contacts[i]);

        }
        this.destroy();
    }
    });
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