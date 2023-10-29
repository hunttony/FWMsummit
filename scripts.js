

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const mobileMenu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".overlay");

  menuIcon.addEventListener("click", function () {
    document.body.classList.toggle("menu-open");
  });

  overlay.addEventListener("click", function () {
    document.body.classList.remove("menu-open");
  });
});


document.getElementById("bookNow").addEventListener("click", function() {
  window.location.href = "https://www.eventbrite.com/e/the-finance-wealth-mastery-summit-tickets-724272647987?aff=oddtdtcreator"; // Replace with your desired URL
});



