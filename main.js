
window.onload =  () => {

    // Hamburger menu js 

    const hamb_menu = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile_nav');

    hamb_menu.addEventListener('click', () => {
        hamb_menu.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });


   // Nav scroll to turn background to black

   const mobileScrollNav = document.querySelector(".mobile_header");
   const desktopScrollNav = document.querySelector(".main_header"); 

   window.onscroll = function () {

       if ( window.innerWidth <= 480 && window.pageYOffset > 0 ) {
           mobileScrollNav.classList.add("dark__nav");
           mobileScrollNav.classList.remove("transparent__nav");
       }
       else if (window.innerWidth >= 769 && window.pageYOffset > 0) {
           desktopScrollNav.classList.add("dark__nav");
           desktopScrollNav.classList.remove("transparent__nav");
       } 
       else{
           mobileScrollNav.classList.add("transparent__nav");
           desktopScrollNav.classList.add("transparent__nav");
           mobileScrollNav.classList.remove("dark__nav");  
           desktopScrollNav.classList.remove("dark__nav");
       }

   }; 


    //  Images animation on scroll

   const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const flex_img1 = entry.target.querySelector('.flex_img1');
      const flex_img2 = entry.target.querySelector('.flex_img2');
      const flex_img3 = entry.target.querySelector('.flex_img3');
      const flex_img4 = entry.target.querySelector('.flex_img4');

      if (entry.isIntersecting) {
        flex_img1.classList.add('fleximg-animation');
        flex_img2.classList.add('fleximg-animation');
        flex_img3.classList.add('fleximg-animation');
        flex_img4.classList.add('fleximg-animation');

        return; // if we've added the classes, exit the function
      }
  
      // If we're not intersecting, remove the classes
      flex_img1.classList.remove('fleximg-animation');
      flex_img2.classList.remove('fleximg-animation');
      flex_img3.classList.remove('fleximg-animation');
      flex_img4.classList.remove('fleximg-animation');

    });
  });
  
  observer.observe(document.querySelector('.flex_imgs'));


}





    




