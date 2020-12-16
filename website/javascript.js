

//select background and foreground for a fade in image transition.
const space = document.querySelector(".space");
const slider = document.querySelector(".slider");

const switcher = document.querySelector('.button');

//attempt to create animation
const anim = new timelinemax();
anim.FromTo(space,2, {height: "0%"}, {height: "100%"})


//darkmode attempt
switcher.addEventListener('click', function() {

    document.body.classList.toggle('dark')  } );

    var mode = document.body.mode;
    if(mode == "lightmode") {
        this.textContent = "dark";
    }
    else {
        this.textContent = "light";
    }

