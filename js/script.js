document.addEventListener("DOMContentLoaded", function () {
  // Toggle mobile menu
  const toggleButton = document.querySelector(".navbar__mobile-menu-toggle")
  const mobileMenu = document.querySelector(".navbar__mobile-menu-items")

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active")
  })

  // Video Modal functionality
  const modal = document.getElementById("videoModal")
  const videoButton = document.querySelector(".preview__video-button")
  const closeButton = document.querySelector(".modal__close-button")

  // Open modal on play button click
  videoButton.addEventListener("click", function () {
    // Show the modal
    modal.style.display = "block"

    // Replace the src attribute with the video URL.
    const videoFrame = modal.querySelector("#videoPlayer")
    videoFrame.src = "https://www.youtube.com/embed/AFkoZTEKOiM?si=5m-VFRGKtHvtvq66"
  })

  // Close modal on close button click
  closeButton.addEventListener("click", function () {
    // Hide the modal
    modal.style.display = "none"
    // Stop the video by removing the src attribute
    const videoFrame = modal.querySelector("#videoPlayer")
    videoFrame.src = ""
  })

  // Close modal when clicking outside the modal content
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none"
      const videoFrame = modal.querySelector("#videoPlayer")
      videoFrame.src = ""
    }
  })
})

// Change navbar style on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 0) {
    navbar.classList.add("navbar--scroll")
  } else {
    navbar.classList.remove("navbar--scroll")
  }
})
