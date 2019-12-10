
var intersectionOptions = {
  root: null,  // use the viewport
  rootMargin: '0px',
  threshold: 0.3
}

function intersectionCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 1) {
      console.log("Fully visible!");
    } else {
      console.log("Not fully visible!");
    }
  });
}

var observer = new IntersectionObserver(intersectionCallback, intersectionOptions);

var target = document.querySelector('#features');
observer.observe(target);