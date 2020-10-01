
document.addEventListener('DOMContentLoaded', function() {
  // When the event DOMContentLoaded occurs, it is safe to access the DOM

  // When the user scrolls the page, execute myFunction 
  window.addEventListener('scroll', myFunction);

  // Get the navbar
  var navbar = document.querySelector("nav");

  // Get the offset position of the navbar
 
  // Add the sticky class to the navbar when you reach its scroll position. 
  // Remove "sticky" when you leave the scroll position

  function myFunction() {
  	/*var top=window.scrollY;
  	console.log(top);*/
    if (window.pageYOffset >= 263) {
      navbar.classList.add("active");
    } else {
      navbar.classList.remove("active");
    }
  }

  /*Toggle between adding and removing the "responsive" class to topnav
  when the user clicks on the icon*/

})




 var typed1 = new Typed('.demo-01', {
            strings: [
                '',
                'programmming',
                'mathmematics.',
                'statistics.',
                'movies.',
                'literature.',
                'fine-arts.',
            ],
            typeSpeed: 20,
            backSpeed: 0,
            loop: true
        });