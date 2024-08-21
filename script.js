// document.getElementById('sketchesBtn').onclick = function () {
//     document.getElementById('sketches').style.display = 'flex';
//     document.getElementById('photographs').style.display = 'none';
// };

// document.getElementById('photographsBtn').onclick = function () {
//     document.getElementById('sketches').style.display = 'none';
//     document.getElementById('photographs').style.display = 'flex';
// };

// function openModal(img) {
//     const modal = document.getElementById("modal");
//     const modalImg = document.getElementById("img01");
//     modal.style.display = "block";
//     modalImg.src = img.src;
// }

// function closeModal() {
//     const modal = document.getElementById("modal");
//     modal.style.display = "none";
// }

document.addEventListener('DOMContentLoaded', function() {
  const checkbox = document.getElementById('checkbox');
  const sketchesSection = document.getElementById('sketches');
  const photographsSection = document.getElementById('photographs');
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('img01');
  const closeButton = document.getElementsByClassName('close')[0];

  // Show Sketches section initially
  sketchesSection.style.display = 'block';
  photographsSection.style.display = 'none';

  checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
          // Show Photographs section and hide Sketch section
          sketchesSection.style.display = 'none';
          photographsSection.style.display = 'block';
      } else {
          // Show Sketch section and hide Photographs section
          sketchesSection.style.display = 'block';
          photographsSection.style.display = 'none';
      }
  });

  // Function to open the modal with the selected image
  window.openModal = function(img) {
      modal.style.display = 'block';
      modalImage.src = img.src; // Set the modal image source to the clicked image

      // Adjust modal image dimensions
      modalImage.onload = function() {
          const aspectRatio = modalImage.naturalWidth / modalImage.naturalHeight;
          if (window.innerWidth / window.innerHeight > aspectRatio) {
              modalImage.style.width = 'auto';
              modalImage.style.height = '100%'; // Full height
          } else {
              modalImage.style.width = '100%'; // Full width
              modalImage.style.height = 'auto';
          }
      };
  }

  // Function to close the modal
  window.closeModal = function() {
      modal.style.display = 'none';
  }

  // Close modal when the close button is clicked
  closeButton.onclick = function() {
      closeModal();
  }

  // Close modal when clicking outside of the modal content
  window.onclick = function(event) {
      if (event.target == modal) {
          closeModal();
      }
  }
});

// ------------------------------------------------- js for contact form

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation (you can expand this)
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Here you can also add code to send the form data to a server
        // For example, using fetch() to send data to a PHP script
    } else {
        alert('Please fill in all fields.');
    }

    // Clear the form fields after submission
    document.getElementById('contactForm').reset();
});




class HoverButton {
    constructor(el) {
      this.el = el;
      this.hover = false;
      this.calculatePosition();
      this.attachEventsListener();
    }
  
    attachEventsListener() {
      window.addEventListener("mousemove", (e) => this.onMouseMove(e));
      window.addEventListener("resize", (e) => this.calculatePosition(e));
    }
  
    calculatePosition() {
      gsap.set(this.el, {
        x: 0,
        y: 0,
        scale: 1
      });
      const box = this.el.getBoundingClientRect();
      this.x = box.left + box.width * 0.5;
      this.y = box.top + box.height * 0.5;
      this.width = box.width;
      this.height = box.height;
    }
  
    onMouseMove(e) {
      let hover = false;
      let hoverArea = this.hover ? 0.7 : 0.5;
      let x = e.clientX - this.x;
      let y = e.clientY - this.y;
      let distance = Math.sqrt(x * x + y * y);
      if (distance < this.width * hoverArea) {
        hover = true;
        if (!this.hover) {
          this.hover = true;
        }
        this.onHover(e.clientX, e.clientY);
      }
  
      if (!hover && this.hover) {
        this.onLeave();
        this.hover = false;
      }
    }
  
    onHover(x, y) {
      gsap.to(this.el, {
        x: (x - this.x) * 0.4,
        y: (y - this.y) * 0.4,
        scale: 1.15,
        ease: "power2.out",
        duration: 0.4
      });
      this.el.style.zIndex = 10;
    }
    onLeave() {
      gsap.to(this.el, {
        x: 0,
        y: 0,
        scale: 1,
        ease: "elastic.out(1.2, 0.4)",
        duration: 0.7
      });
      this.el.style.zIndex = 1;
    }
  }
  
  const btn1 = document.querySelector("li:nth-child(1) profile");
  new HoverButton(btn1);
  
  const btn2 = document.querySelector("li:nth-child(2) profile");
  new HoverButton(btn2);
  
  const btn3 = document.querySelector("li:nth-child(3) profile");
  new HoverButton(btn3);
  
  