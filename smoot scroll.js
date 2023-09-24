// smoot scrooll demo

// use in console browser
// window.scrollTo(0, 200);
// window.scrollTo(0, 400);
// window.scrollTo(0,1000);
// window.pageYOffset();
// window.scrollBy(0,50);
// window.scrollBy(0, 50);
// window.scrollBy(0, 50);


// smoot scroll hint 1

// var scrolltarget = setInterval(function () {
//     window.scrollBy(0, 50)
// }, 50);
// clearInterval(scrolltarget); // stoping point

// var targetPos = 1500;
// var currPos = 0;
// var scrolltarget = setInterval(function () {
//     if (currPos >= targetPos) {
//         clearInterval(scrolltarget);
//     }
//     currPos += 50
//     window.scrollBy(0, 50)
// }, 50);

// var targetPos = 1000;
// var currPos = 0;
// var scrolltarget = setInterval(function () {
//     if (currPos >= targetPos) {
//         clearInterval(scrolltarget);
//     }
//     currPos += 50
//     window.scrollBy(0, 50)
// }, 50);

// smoot scrooll hint 2
// var educationsSection = document.getElementById("education")
// var coordinates = educationsSection.getBoundingClientRect();

// smootsection hint 2

// var navmanuAnchorTags = document.querySelectorAll(".nav-menu a");
// console.log(navmanuAnchorTags);
// for (var i = 0; i < navmanuAnchorTags.length; i++) {
//     navmanuAnchorTags[i].addEventListener('click', function (event) {
//         event.preventDefault();
//         var targetSectionId = this.textContent.trim().toLowerCase();
//         console.log(targetSectionId)

//         var targetSection = document.getElementById(targetSectionId);
//         console.log(targetSection)

//         var interval = setInterval(function () {
//             var targetSectionCoordinates = targetSection.getBoundingClientRect();
//             if (targetSectionCoordinates.top <= 0) {
//                 clearInterval(interval);
//                 return;
//             }
//             window.scrollBy(0, 50);
//         }, 20);
//     })
// };

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;


for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        console.log(this.textContent);
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        //    interval = setInterval(scrollVertically, 20, targetSection);

        interval = setInterval(function () {
            scrollVertically(targetSection);
        }, 20);
    });
}


function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}

// setTimeout(slideInFromLeft, 2000);
// setTimeout(slideInFromRight, 2000)


//animation skill section fillbar

// handle scrolled event on window
// check that the skill container is visible or not
//ensure that initial width of colored skilled div is zero -> initiallzed/reset value
// shoot animation on every skill increase skills with from 0 to skilled lever
// store skill level html with the help data atributes

// var progressBar = document.querySelectorAll(".skills-progress>div");
// var skillsContainer = document.getElementById("skills-container");
// window.addEventListener('scroll', checkScroll);
// var animation = false;



// function initialiseBars() {
//     for (let bar of progressBar) {
//         bar.style.width = 0 + "%";
//     }
// }

// initialiseBars();

// function fillBars() {
//     for (let bar of progressBar) {
//         let targetWidth = bar.getAttribute('data-bar-width');
//         let currentWidth = 0;
//         let interval = setInterval(function () {
//             if (currentWidth > targetWidth) {
//                 clearInterval(interval);
//                 return
//             }
//             currentWidth++
//             bar.style.width = currentWidth + "%";
//         }, 3)
//     }

// }

// // function fillbar(bar) {
// // }

// function checkScroll() {
//     //you have to check the skill section is visible or not
//     var coordinates = skillsContainer.getBoundingClientRect();
//     if (!animation && coordinates.top <= window.innerHeight) {
//         console.log("skill section visible");
//         animation = true
//         fillBars();
//     }
//     else if (coordinates.top > window.innerHeight) {
//         animation = false;
//         initialiseBars();

//     }
// }





//This time you will make each individual skill bars to start loading only when they have appeared on the viewport.

var progressBars = document.querySelectorAll(".skills-progress > div");
window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);



function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}



