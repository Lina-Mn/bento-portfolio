function toggleDropdown(element) {
  // Close all dropdowns
  const allDropdowns = document.querySelectorAll('.project-desc');
  const allimages = document.querySelectorAll('.project-img');
  const allIcons = document.querySelectorAll('.dropdown-icon');
  
  allDropdowns.forEach((dropdown) => {
    dropdown.style.display = 'none';
  });
  
  allimages.forEach((dropdown) => {
    dropdown.style.display = 'none';
  });

  allIcons.forEach((icon) => {
    icon.textContent = '▼';
  });

  // Open the clicked dropdown if it was closed
  const content = element.nextElementSibling.nextElementSibling;
  const image = element.nextElementSibling;
  const icon = element.querySelector('.dropdown-icon');

  if (content.style.display !== 'block') {
    content.style.display = 'block';
    image.style.display = 'block';
    icon.textContent = '▲';
  }
}

// Function to open the first dropdown on page load
function openFirstDropdown() {
  const firstDropdownTitle = document.querySelector('.project-title');
  const firstDropdownImg = firstDropdownTitle.nextElementSibling;
  const firstDropdownContent = firstDropdownTitle.nextElementSibling;
  const firstIcon = firstDropdownTitle.querySelector('.dropdown-icon');

  firstDropdownContent.style.display = 'block';
  firstImage.style.display = 'block';
  firstIcon.textContent = '▲';
}

// Run the function to open the first dropdown when the page loads
window.onload = openFirstDropdown;
