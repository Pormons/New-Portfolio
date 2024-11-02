const navbar = document.querySelector(".nav-bar");
const socialButton = document.querySelector(".social-button");
const socialContainer = document.querySelector(".social-container");
const iconElement = socialButton.querySelector("span i");
const buttons = document.querySelectorAll(".nav-button");
const indicator = document.querySelector(".selection-indicator");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove selected class from all buttons
    buttons.forEach((btn) => btn.classList.remove("nav-selected"));

    // Add selected class to clicked button
    button.classList.add("nav-selected");

    // Move the indicator
    const index = Array.from(buttons).indexOf(button);
    indicator.style.transform = `translateX(${index * (79 + 8)}px)`;
  });
});

const toggleSocialButton = () => {

  socialContainer.classList.toggle("show");
  iconElement.classList.toggle("scale");


  if (socialContainer.classList.contains("show")) {
    iconElement.classList.remove("fi-rr-at");
    iconElement.classList.add("fi-rr-cross");
  } else {
    iconElement.classList.remove("fi-rr-cross");
    iconElement.classList.add("fi-rr-at"); 
  }

  setTimeout(() => {
    iconElement.classList.toggle("scale"); 
  }, 300);
};

socialButton.addEventListener("click", toggleSocialButton);

let lastScrollTop = 0;
window.addEventListener("scroll", () => {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (socialContainer.classList.contains("show")) {
    toggleSocialButton();
  }
  // Show navbar on scroll up, hide on scroll down
  if (currentScroll > lastScrollTop) {
    // Scrolling down
    navbar.style.top = "-90px"; // Adjust this value based on your navbar height
  } else {
    // Scrolling up
    navbar.style.top = "0";
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
