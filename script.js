document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.getElementById("loading-screen");
  const loadingLogo = document.getElementById("loading-logo");
  const navbarLogo = document.getElementById("navbar-logo");
  const logoContainer = document.querySelector(".logo-container");

  // Position the navbar logo to match the loading logo initially
  const loadingLogoRect = loadingLogo.getBoundingClientRect();
  navbarLogo.style.top = loadingLogoRect.top + "px";
  navbarLogo.style.left = loadingLogoRect.left + "px";

  setTimeout(function () {
    loadingScreen.style.opacity = "0";
    loadingScreen.style.pointerEvents = "none";

    // Get the center of the logo container
    const logoContainerRect = logoContainer.getBoundingClientRect();
    const logoContainerCenterX =
      logoContainerRect.left + logoContainerRect.width / 2;
    const logoContainerCenterY =
      logoContainerRect.top + logoContainerRect.height / 2;

    // Animate the navbar logo
    navbarLogo.style.fontSize = "1em";
    navbarLogo.style.left =
      logoContainerCenterX - navbarLogo.offsetWidth / 2 + "px"; // Center horizontally
    navbarLogo.style.top =
      logoContainerCenterY - navbarLogo.offsetHeight / 2 + "px"; // Center vertically
    navbarLogo.style.transform = "scale(1)";

    // shrink the loading logo.
    loadingLogo.style.fontSize = "1em";
    loadingLogo.style.transform = "scale(0.01)";

    setTimeout(function () {
      loadingScreen.style.display = "none";
      navbarLogo.style.position = "static";
    }, 500);
  }, 2000);
});
