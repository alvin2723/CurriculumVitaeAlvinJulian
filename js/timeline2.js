
// define variables
var items2 = document.querySelectorAll(".timeline-boot ul li");

// check if an element is in viewport
// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
function isElementInViewport2(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function callbackFunc2() {
    for (var i = 0; i < items2.length; i++) {
        if (isElementInViewport2(items2[i])) {
            items2[i].classList.add("in-view");
        }
    }
}

// listen for events
window.addEventListener("load", callbackFunc2);
window.addEventListener("resize", callbackFunc2);
window.addEventListener("scroll", callbackFunc2);

