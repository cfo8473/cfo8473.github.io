//Only Use the IntersectionObserver if it is supported
if (IntersectionObserver) {
  //When the element is visible on the viewport, 
  //add the animated class so it creates the animation.
  let callback = function (entries) {
    entries.forEach(entry => {
      //if the element is visible, add the animated class
      if (entry.isIntersecting &&
        !entry.target.classList.contains('animated')) {
        entry.target.classList.add('animated');
      } else { 
        entry.target.classList.remove('animated');
      }
    });
  }
  //Create the observer
  let observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.6
  });

  //Get and observe all the items with the item class
  let items = document.querySelectorAll('.col-3');
  items.forEach((item) => {
    
    observer.observe(item);
  });
}