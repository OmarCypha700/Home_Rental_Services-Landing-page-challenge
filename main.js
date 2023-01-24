
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

       if ( window.innerWidth >= 320 && window.pageYOffset > 0 ) {
           mobileScrollNav.classList.add("dark__nav");
           mobileScrollNav.classList.remove("transparent__nav");
       }
       else if (window.innerWidth >= 769 && window.pageYOffset > 0) {
           desktopScrollNav.classList.add("dark__nav");
           desktopScrollNav.classList.remove("transparent__nav");
       } 
       else{
        if (mobileScrollNav) {
          mobileScrollNav.classList.add("transparent__nav");
          mobileScrollNav.classList.remove("dark__nav");
      }
      if (desktopScrollNav) {
          desktopScrollNav.classList.add("transparent__nav");
          desktopScrollNav.classList.remove("dark__nav");
      }
       }

   }; 

  //  window.onscroll = function () {
  //   const mobileScrollNav = document.getElementById("mobile_header");
  //   const desktopScrollNav = document.getElementById("main_header");

  //      if ( window.innerWidth <= 480 && window.pageYOffset > 0 ) {
  //          mobileScrollNav.classList.add("dark__nav");
  //          mobileScrollNav.classList.remove("transparent__nav");
  //      }
  //      else if (window.innerWidth >= 768 && window.pageYOffset > 0) {
  //          desktopScrollNav.classList.add("dark__nav");
  //          desktopScrollNav.classList.remove("transparent__nav");
  //      } 
  //     //  else{
  //     //      mobileScrollNav.classList.add("transparent__nav");
  //     //      desktopScrollNav.classList.add("transparent__nav");
  //     //      mobileScrollNav.classList.remove("dark__nav");  
  //     //      desktopScrollNav.classList.remove("dark__nav");
  //     //  }

  //  }; 


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


// Handle browse images

  const browseImages = document.getElementById('browse-images');
  const browse = document.getElementById('browse');
  
  browse.addEventListener('click',() => {
    document.getElementById('browse-images').click();
  })
  
  browseImages.addEventListener('change', (e)=>{
    const inputFile = e.target.files[0]
    readImage(inputFile);
  })

// Drag and drop in form.

  const dropArea = document.getElementById("drop-area");
  const output = document.getElementById('output');
  
  // Handle draging over.

  dropArea.addEventListener("dragover", (event) => {
    event.preventDefault();

    // Styling the drag and drop as a "copy file" operation.  
    event.dataTransfer.dropEffect = 'copy';  

    // Styling the drag area when image moves over it.
    dropArea.classList.add("dragenter");
  });

     // Handle draging away.
     dropArea.addEventListener("dragleave", () => {

      // reset background of drop area when the image leaves it
      dropArea.classList.remove("dragenter");
    });


  // Handle drop
  dropArea.addEventListener("drop", (event) => {
    event.stopPropagation();
    event.preventDefault();

    // Get the files that were dropped
    const file = event.dataTransfer.files[0];

    // Invoke the readImage function to display file dragged
    readImage(file);

  });


  // Handle displaying image
  function readImage(file) {

    // Check if the file is an image.
    if(!file.type.startsWith('image/')){
      alert(`The selected file is not an image,
      File type: ${file.type},
      File name: ${file.name}`)
      return;  
    }
    
    // Use FileReader() to display files
      const reader = new FileReader();
      reader.addEventListener('load', () => {

        const image = new Image();
        image.height = 200
        image.width = 400
        image.title = file.name
        image.src = reader.result
        output.appendChild(image);
      });
  
      reader.readAsDataURL(file);
  }

}