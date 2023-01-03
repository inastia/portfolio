// target all sections and nav links
let section = document.querySelectorAll("section.projects-section");
let menu = document.querySelectorAll("ul li a");

// animate navbar when a section is scrolled into view 
window.onscroll = () => {
   section.forEach((i) => {
      let top = window.scrollY;
      let offset = i.offsetTop - 150;
      let height = i.offsetHeight;
      let id = i.getAttribute("id");

      // execution conditions for links to become active
      if (top >= offset && top < offset + height) {
         menu.forEach((link) => {
            link.classList.remove("active");
            document
               .querySelector("ul li a[href*=" + id + "]")
               .classList.add("active");
         });
      }
   });
};

function reveal() {
   var reveals = document.querySelectorAll('.reveal');

   // determine the distance of the element from the top of the viewport
   for (var i = 0; i < reveals.length; i++) {
      // window.innerHeight is the height of the viewport
      var windowHeight = window.innerHeight;
      // getBoundingClientRect().top distance from the top of the viewport
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      // conditions for triggering animation
      if (elementTop < windowHeight - elementVisible) {
         reveals[i].classList.add("active");
      } else {
         reveals[i].classList.remove("active");
      }
   }
}

window.addEventListener("scroll", reveal);

// check the scroll position on page load
reveal();