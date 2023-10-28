

function toggleDropdown() {
  const dropdown = document.querySelector('.dropdown-menu');
  if (dropdown.style.display === 'none' || dropdown.style.display === '') {
      dropdown.style.display = 'block';
  } else {
      dropdown.style.display = 'none';
  }
}

document.getElementById("bookNow").addEventListener("click", function() {
  window.location.href = "https://www.eventbrite.com/e/the-finance-wealth-mastery-summit-tickets-724272647987?aff=oddtdtcreator"; // Replace with your desired URL
});



